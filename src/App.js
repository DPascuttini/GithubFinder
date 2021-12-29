import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';
import About from './Pages/About';
import { Home } from './Pages/Home';
import User from './Pages/User';
import { Layout } from './components/layout/Layout';


const App = () => {

    return (
      <GithubState>
        <AlertState>
      <Router>
        <div className="App">
          <Layout >
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    loading={loading}
                    users={users}
                    setAlert={showAlert}
                    clearUsers={clearUsers}
                  />
                }
              />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/user/:login" element={<User />}/>
            </Routes>
          </Layout>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  
}

export default App;
