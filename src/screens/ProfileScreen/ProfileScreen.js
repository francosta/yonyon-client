import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as yonActions from '../../store/actions/yon';
import { FontAwesome5 } from '@expo/vector-icons';
import YonListItem from '../../components/YonListItem/YonListItem';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeader: {
    height: '19%',
  },
});

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const yons = useSelector((state) => state.yon.answeredYons);
  const [noMoreYons, setNoMoreYons] = useState(false);

  const loadYons = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(yonActions.getAnsweredYons());
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', loadYons);
    return () => {
      unsubscribe();
    };
  }, [loadYons]);

  useEffect(() => {
    loadYons();
  }, [dispatch, loadYons]);

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <ProfileHeader style={styles.profileHeader}></ProfileHeader>
      <FlatList
        data={yons}
        keyExtractor={(item) => item._id}
        renderItem={(itemData) => <YonListItem yon={itemData.item} />}
      />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'ProfileScreen',
    headerRight: () => <Text></Text>,
    headerLeft: () => <Text></Text>,
  };
};

export default ProfileScreen;
