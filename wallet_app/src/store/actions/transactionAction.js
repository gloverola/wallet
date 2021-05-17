import axios from 'axios';
import IO from 'socket.io-client';
import {API_URI, UPDATE_AMOUNT, UPDATE_BALANCE} from './types';

//** Socket Config */
export const socket = IO(`${API_URI}`, {
  forceNew: true,
});

export const roomID = 'k328wfiuqwhefjashufasfhaysdfu';

socket.on('connection', () => console.log('Connection'));

export const send = ({amount, account, description}) => async (
  dispatch,
  getState,
) => {
  //get current user
  const {user} = getState.auth;
  if (user.account_balance < amount)
    alert('Sorry you do not have enough balance');

  // Contruct send data
  const data = {
    amount,
    account_number: account,
    description,
    sender: user.name,
    roomID,
  };

  // Emit data
  socket.emit('send', data);

  // update user account balance
  const newAccountBalance = user.account_balance - amount;
  dispatch({type: UPDATE_AMOUNT, payload: newAccountBalance});
};

export const receiver = () => async (dispatch, getState) => {};
