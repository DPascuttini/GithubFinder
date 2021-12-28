import React from 'react';

import Alert from './Alert';
import Navbar from './Navbar';

export const Layout = ({ children, alert }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Alert alert={alert} />
        {children}
      </div>
    </>
  );
};
