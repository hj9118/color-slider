import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Link to='/mono'>
        <button>Mono Color</button>
      </Link>
      <Link to='/gradient'>
        <button>Gradient Color</button>
      </Link>
    </>
  );
};

export default App;
