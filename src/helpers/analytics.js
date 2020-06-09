import * as Analytics from 'expo-firebase-analytics';

export const logCreateYon = async ({ userId, milestone }) => {
  switch (milestone) {
    case 1:
      return Analytics.logEvent('yn_first_yon', {
        name: 'First yon',
        screen: 'Create',
        purpose: 'Created first yon',
        userId,
      });
    case 5:
      return Analytics.logEvent('yn_5_yons', {
        name: '5th yon',
        screen: 'Create',
        purpose: 'Created first five yons',
        userId,
      });
    case 10:
      return Analytics.logEvent('yn_10_yons', {
        name: '10th yon',
        screen: 'Create',
        purpose: 'Created first ten yons',
        userId,
      });
    default:
      return;
  }
};

export const logAnswer = async ({ answer }) => {
  switch (answer) {
    case true:
      return Analytics.logEvent('yn_yes_answer', {
        name: 'Yes answer',
        screen: 'Yon',
        purpose: 'Answered yes to yon',
      });
    case false:
      return Analytics.logEvent('yn_no_answer', {
        name: 'No answer',
        screen: 'Yon',
        purpose: 'Answered no to yon',
      });
    default:
      return;
  }
};

export const signup = async () => {
  return Analytics.logEvent('yn_signup', {
    name: 'Signup',
    screen: 'Auth',
    purpose: 'Sign up to app',
  });
};
export const login = async () => {
  return Analytics.logEvent('yn_login', {
    name: 'Login',
    screen: 'Auth',
    purpose: 'Logged into app',
  });
};
