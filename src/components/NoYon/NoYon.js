import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContainer: {
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sadIcon: {
    marginBottom: '1.25rem',
  },
  actionMessage: { marginBottom: '0.5rem', fontFamily: 'circular-standard' },
  actionContainer: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
});

const NoYon = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <View style={styles.sadIcon}>
          <FontAwesome5 name="sad-tear" size={30} color="black" />
        </View>
        <Text style={{ fontFamily: 'circular-standard' }}>
          no yon is here...
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <Text style={styles.actionMessage}>add your first yon</Text>
        <FontAwesome5 name="arrow-down" size={30} color="black" />
      </View>
    </View>
  );
};

export default NoYon;
