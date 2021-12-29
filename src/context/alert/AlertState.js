import React, { useReducer } from 'react';

import { SET_ALERT, REMOVE_ALERT } from '../types';
import AlertReducer from './alertReducer';
import AlertContext from './githubContext';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
        type: SET_ALERT,
        payload: {msg, type}
    });
    setTimeout(()=> dispatch({type: REMOVE_ALERT}), 2500);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default GithubState;
