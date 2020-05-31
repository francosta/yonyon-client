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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
      <FlatList
        data={yons}
        keyExtractor={(item) => item._id}
        renderItem={(itemData) => <Text>{itemData.item.yon}</Text>}
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
