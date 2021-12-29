import { createContext,useContext } from 'react';

const GithubContext = createContext();

export default GithubContext;
export const useGithubContext = () => useContext(GithubContext);
