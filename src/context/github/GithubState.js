import axios from 'axios';
import React, { useReducer } from 'react';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

let GithubClientId;
let GithubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  GithubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  GithubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  GithubClientId = process.env.GITHUB_CLIENT_ID;
  GithubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const githubAxios = axios.create({
  baseURL: 'https://api.github.com/',
  params: { client_id: GithubClientId, client_secret: GithubClientSecret },
});

const GithubState = (props) => {
  const initialState = {
    useres: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    const { data } = await githubAxios.get(`search/users?q=${text}`);

    dispatch({
      type: SEARCH_USERS,
      payload: data.items,
    });
  };

  // Get User
  const getUser = async (username) => {
    setLoading();
    const res = await githubAxios.get(`users/${username}`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //Get repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await githubAxios.get(
      `users/${username}/repos?per_page=5&sort=created:asc`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
