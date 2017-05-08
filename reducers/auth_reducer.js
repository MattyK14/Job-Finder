import * as types from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case types.FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload };
    case types.FACEBOOK_LOGIN_FAIL:
      return { token: null };
    default:
      return state;
  }
}
