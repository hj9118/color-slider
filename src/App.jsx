import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='container d-flex flex-column align-items-center m-auto pt-5'>
      <h1 className='my-2'>Color Slider - 색상 확인 슬라이더</h1>
      <div className='buttons'>
        <Link to='/mono'>
          <button className='btn btn-dark m-2'>단색</button>
        </Link>
        <Link to='/gradient'>
          <button type='button' className='btn btn-dark m-2'>
            그라데이션
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;
