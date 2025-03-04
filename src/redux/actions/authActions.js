import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user, token) => ({
  type: LOGIN_SUCCESS,
  payload: { user, token },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const response = await axios.post('/api/auth/login', credentials);
    const { user, token } = response.data;
    localStorage.setItem('token', token);
    dispatch(loginSuccess(user, token));
    return true;
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || 'Login failed'));
    return false;
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logout());
};