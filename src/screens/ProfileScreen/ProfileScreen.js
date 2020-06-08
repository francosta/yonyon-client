import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as yonActions from '../../store/actions/yon';
import { FontAwesome5 } from '@expo/vector-icons';
import YonListItem from '../../components/YonListItem/YonListItem';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import EStyleSheet from 'react-native-extended-stylesheet';
import NoYon from '../../components/NoYon/NoYon';

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

  // const answeredWithoutCreatedYons = answe
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
    },
    yonList: {
      width: '100%',
    },
    buttonContainer: {
      flexDirection: 'row',
      height: '6.5%',
    },
    buttonYou: {
      flex: 1,
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: buttonMode === 'you' ? '$primaryColorShade1' : 'white',
    },
    buttonYesText: {
      color: buttonMode === 'you' ? '$textColor' : '$primaryColorShade1',
      fontFamily: 'circular-bold',
      fontSize: '$h2Size',
    },

    buttonAnswered: {
      height: '100%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:
        buttonMode === 'answered' ? '$primaryColorShade1' : 'white',
    },
    buttonAnsweredText: {
      color: buttonMode === 'answered' ? '$textColor' : '$primaryColorShade1',
      fontFamily: 'circular-bold',
      fontSize: '$h2Size',
    },
  });

  const loadYons = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
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
      <View style={styles.buttonContainer}>
        {console.log(finalAnsweredYons)}
        <TouchableOpacity
          style={styles.buttonYou}
          onPress={() => setButtonMode('you')}
        >
          <Text style={styles.buttonYesText}>you</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonAnswered}
          onPress={() => setButtonMode('answered')}
        >
          <Text style={styles.buttonAnsweredText}>answered</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.yonList}
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
