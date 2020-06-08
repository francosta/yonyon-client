import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as authActions from '../../store/actions/auth';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    paddingHorizontal: '8%',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: '$h1Size',
    color: '$primaryColorShade2',
    fontFamily: 'circular-bold',
  },
  userState: {
    color: '$primaryColorShade2',
    fontFamily: 'circular-standard',
  },
  userStats: {
    fontFamily: 'circular-standard',
  },
});

const ProfileHeader = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogOut = async () => {
    try {
      await dispatch(authActions.logOut());
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.userStats}>{user.createdYons.length} yons</Text>
      </View>
      <TouchableOpacity onPress={handleLogOut}>
        <FontAwesome5 name="sign-out-alt" size={30} color="#797979" />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
