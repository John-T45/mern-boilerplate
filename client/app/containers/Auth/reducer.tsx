import { SET_AUTH_DATA, UNSET_AUTH_DATA, SET_USER_DATA } from './constants';

const initialState = {
  authenticated: false,
  loading: true,
  token: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        authenticated: true,
        loading: false,
        token: action.payload,
      };
    case UNSET_AUTH_DATA:
      return {
        ...state,
        authenticated: false,
        loading: false,
        token: null,
      };
    case SET_USER_DATA: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export { authReducer, initialState };
