import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  API_URI,
  REG_LOADING,
  LOG_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
} from './types';
import {CLEAR_ERRORS} from './types';
import {returnErrors} from './errActions';

export const register = form => async dispatch => {
  dispatch({
    type: REG_LOADING,
  });

  await axios
    .post(`${API_URI}/api/users`, form)
    .then(res => {
      const {token} = res.data;
      AsyncStorage.setItem('@token', token);
      dispatch({type: CLEAR_ERRORS});
      dispatch({type: REGISTER_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch(
        returnErrors(
          err.response.data.msg,
          err.response.status,
          'REGISTER-FAIL',
        ),
      );
    });
};

export const login = form => async dispatch => {
  console.log('form_@dispatch>>>', form);
  dispatch({
    type: LOG_LOADING,
  });

  await axios
    .post(`${API_URI}/api/auth`, form)
    .then(res => {
      const {token} = res.data;
      AsyncStorage.setItem('@token', token);
      dispatch({type: CLEAR_ERRORS});
      dispatch({type: LOGIN_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch(
        returnErrors(err.response.data.msg, err.response.status, 'LOGIN-FAIL'),
      );
    });
};

//** Amazon Load User */
export const loadUser = () => async dispatch => {};
