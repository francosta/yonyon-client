import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as yonActions from '../../store/actions/yon';
import { useDispatch, useSelector } from 'react-redux';
import YonStatusBar from '../../components/YonStatusBar/YonStatusBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import EStyleSheet from 'react-native-extended-stylesheet';
import YonCard from '../../components/YonCard/YonCard';
import NoYon from '../../components/NoYon/NoYon';

const styles = EStyleSheet.create({
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
  messageContainer: {
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sadIcon: {
    marginBottom: '1.25rem',
  },
  actionMessage: { marginBottom: '0.5rem' },
  actionContainer: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
});

const YonScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const yons = useSelector((state) => state.yon.unansweredYons);
  const [currentYon, setCurrentYon] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [noMoreYons, setNoMoreYons] = useState(false);

  const loadYons = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    setNoMoreYons(false);
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
      setAnswerStatus(false);
    } else {
      setNoMoreYons(true);
      setAnswerStatus(false);
    }
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

  const resetState = () => {
    setCurrentYon(0);
    setAnswerStatus(false);
    setNoMoreYons(false);
    loadYons();
    dispatch(yonActions.updateUnansweredYons())
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', resetState);
    return () => {
      unsubscribe();
    };
  }, [resetState]);

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

  if ((!isLoading && yons.length === 0) || noMoreYons) {
    return (
      <View style={styles.screen}>
        <YonStatusBar />
        <NoYon />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.screen}>
        <View style={styles.emptyContainer}>
          <Text>An error occurred!</Text>
          <Button title="Try again" onPress={loadYons} />
        </View>
      </View>
    );
  }

  if (yons[currentYon]) {
    return (
      <View style={styles.screen}>
        <YonStatusBar />
        <YonCard
          answerStatus={answerStatus}
          answerYon={answerYon}
          yon={yons[currentYon]}
          nextYon={nextYon}
        />
      </View>
    );
  }
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'YonScreen',
    headerRight: () => <Text></Text>,
    headerLeft: () => <Text></Text>,
  };
};

export default YonScreen;
