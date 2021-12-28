import React from 'react';

import Search from '../components/users/Search';
import Users from '../components/users/Users';

export const Home = ({ searchUsers, clearUsers, users, setAlert, loading }) => {
  return (
    <>
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        showClear={!!users.length}
        setAlert={setAlert}
      />
      <Users loading={loading} users={users} />
    </>
  );
};
