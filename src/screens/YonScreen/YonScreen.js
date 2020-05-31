import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as yonActions from '../../store/actions/yon';
import { useDispatch, useSelector } from 'react-redux';
import YonStatusBar from '../../components/YonStatusBar/YonStatusBar';
import { SafeAreaView } from 'react-native-safe-area-context';

import YonCard from '../../components/YonCard/YonCard';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const YonScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const yons = useSelector((state) => state.yon.unansweredYons);
  const [currentYon, setCurrentYon] = useState(0);
  const [noMoreYons, setNoMoreYons] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(false);

  const loadYons = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(yonActions.getUnansweredYons());
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading, setError]);

  const nextYon = () => {
    if (yons[currentYon + 1]) {
      setCurrentYon(currentYon + 1);
    }
    setNoMoreYons(true);
  };

  const answerYon = (answer) => {
    const yonId = yons[currentYon]._id;
    try {
      dispatch(yonActions.answerYon(yonId, answer));
    } catch (e) {
      setError(err.message);
    }
    // dispatch action
    setAnswerStatus(true);
  };

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

  if (!isLoading && yons.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No yons found. Maybe start adding some!</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadProducts}
          color={Colors.primary}
        />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <YonStatusBar />
      {noMoreYons ? (
        <Text>No More now....</Text>
      ) : (
        <YonCard
          answerStatus={answerStatus}
          answerYon={answerYon}
          yon={yons[currentYon]}
        />
      )}
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'YonScreen',
    headerRight: () => <Text></Text>,
    headerLeft: () => <Text></Text>,
  };
};

export default YonScreen;
