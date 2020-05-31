import React, {
  useEffect,
  useState,
  useCallback,
  ActivityIndicator,
} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as yonActions from '../../store/actions/yon';
import { useDispatch, useSelector } from 'react-redux';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const YonScreen = (props) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const yons = useSelector((state) => state.yon.yons);

  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(yonActions.getYons());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    // const willFocusSub = props.navigation.addListener(
    //   'willFocus',
    //   loadProducts
    // );
    // return () => {
    //   willFocusSub.remove();
    // };
  }, [loadProducts]);

  useEffect(() => {
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProducts]);

  // if (isLoading) {
  //   return (
  //     <View style={styles.centered}>
  //       <ActivityIndicator size="large" color="red" />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.screen}>
      <Text>This is the YonScreen</Text>
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
