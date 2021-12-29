import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import User from './Pages/User';
import { Layout } from './components/layout/Layout';
import AlertState from './context/alert/AlertState';
import GithubState from './context/github/GithubState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Layout>
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/user/:login" element={<User/>} />
                <Route element={<NotFound/>} />
              </Routes>
            </Layout>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
