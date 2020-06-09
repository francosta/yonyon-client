import * as Analytics from 'expo-firebase-analytics';
import { useSelector } from 'react';

const state = useSelector((state) => state.auth);

export const logCreateYon = async () => {
  const createdYons = 1;

  await Analytics.logEvent('yn_first_yon', {
    name: 'First yon',
    screen: 'Create',
    purpose: 'Created first yon',
  });
};
