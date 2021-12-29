import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Spinner from '../components/layout/Spinner';
import Repos from '../components/repos/Repos';
import { useGithubContext } from '../context/github/githubContext';
import { useGetUser } from '../hooks/useGetUser';

const User = () => {
  const { loading, user, repos } = useGithubContext();

  useGetUser();

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  if (loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="avatar"
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a target="_blank" href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            {login && (
              <li>
                <strong>Username: </strong> {login}
              </li>
            )}
            {company && (
              <li>
                <strong>Company: </strong> {company}
              </li>
            )}

            {blog && (
              <li>
                <strong>Website: </strong> {blog}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Publis Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default User;
