import React from 'react';

import Search from '../components/users/Search';
import Users from '../components/users/Users';

export const Home = ({ searchUsers, clearUsers, users, setAlert, loading }) => {
  return (
    <>
      <Search/>
      <Users />
    </>
  );
};
