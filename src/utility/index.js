import {
  Alert,
  Dimensions,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';

export const isAndroid = () => {
  return Platform.OS === 'android';
};

export const isIOS = () => {
  return Platform.OS === 'ios';
};
