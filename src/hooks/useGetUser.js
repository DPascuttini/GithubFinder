import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGithubContext } from '../context/github/githubContext';

export const useGetUser = (login) => {
  const params = useParams();
  const { getUser, getUserRepos } = useGithubContext();
  const loginText = login || params?.login;
  useEffect(() => {
    if (loginText) {
      getUser(loginText);
      getUserRepos(loginText);
    }
  }, []);
};
