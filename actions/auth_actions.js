import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import * as types from './types';

export const facebookLogin = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      dispatch({ type: types.FACEBOOK_LOGIN_SUCCESS, payload: token });
    }

    else {
      doFaceBookLogin(dispatch);
    }
  };
};

const doFaceBookLogin = async (dispatch) => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('291943587922796', {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({ type: types.FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: types.FACEBOOK_LOGIN_SUCCESS, payload: token });
};
