import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as yonActions from '../../store/actions/yon';
import YonListItem from '../../components/YonListItem/YonListItem';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import EStyleSheet from 'react-native-extended-stylesheet';
import YonListHeader from '../../components/YonListHeader/YonListHeader';
import * as authActions from '../../store/actions/auth';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const user = useSelector((state) => state.auth.user);
  const answeredYons = useSelector((state) => state.yon.answeredYons);
  const createdYons = user.createdYons;
  const answeredYonsIds = answeredYons.map((yon) => yon._id);
  const createdYonsIds = createdYons.map((yon) => yon._id);
  const answeredIdsWithoutCreatedIds = answeredYonsIds.filter(
    (yonId) => !createdYonsIds.includes(yonId)
  );
  const answeredWithoutCreatedYons = answeredYons.filter((yon) => {
    if (!createdYons.includes(yon)) {
      return yon;
    }
  });
  const finalAnsweredYons = answeredWithoutCreatedYons.filter((yon) => {
    return answeredIdsWithoutCreatedIds.includes(yon._id);
  });

  const [noMoreYons, setNoMoreYons] = useState(false);
  const [buttonMode, setButtonMode] = useState('you');
  const yons = buttonMode === 'you' ? createdYons : finalAnsweredYons;

  const styles = EStyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileHeader: {
      height: '19%',
      fontFamily: 'circular-bold',
    },
    yonList: {
      width: '100%',
    },
  });

  const loadYons = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(authActions.udpdateUser());
      await dispatch(yonActions.getAnsweredYons());
      await dispatch(yonActions.getUnansweredYons());
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    }
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
      <YonListHeader buttonMode={buttonMode} setButtonMode={setButtonMode} />
      <FlatList
        style={styles.yonList}
        data={yons}
        keyExtractor={(item) => item._id}
        renderItem={(itemData) => {
          return <YonListItem yon={itemData.item} />;
        }}
        initialNumToRender={10}
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
