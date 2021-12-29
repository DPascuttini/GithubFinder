import React from 'react';

import {useGithubContext} from '../../context/github/githubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = () => {
  const  { loading, users } = useGithubContext();

  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle}>
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
