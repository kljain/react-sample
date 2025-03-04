import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    LOGOUT 
  } from '../actions/authActions';
  
  const initialState = {
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
          loading: false,
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          token: null,
          loading: false,
          error: action.payload,
        };
      case LOGOUT:
        return {
          ...initialState,
          token: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;