import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Mono = () => {
  const [values, setValues] = useState({
    red: 255,
    green: 0,
    blue: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className='container d-flex flex-column align-items-center'>
      <div className='card p-2'>
        <ColorPreview
          style={{
            backgroundColor: `rgb(${values.red},${values.green},${values.blue})`,
          }}
        />
        <div className='container d-flex flex-column'>
          <div className='container my-3'>
            <div className='row'>
              <div class='col-md-2'>
                <span>R</span>
              </div>
              <div class='col-md-10'>
                <input
                  className='form-range'
                  type='range'
                  name='red'
                  min='0'
                  max='255'
                  value={values.red}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='row'>
              <div class='col-md-2'>
                <span>G</span>
              </div>
              <div class='col-md-10'>
                <input
                  className='form-range'
                  type='range'
                  name='green'
                  min='0'
                  max='255'
                  value={values.green}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='row'>
              <div class='col-md-2'>
                <span>B</span>
              </div>
              <div class='col-md-10'>
                <input
                  className='form-range'
                  type='range'
                  name='blue'
                  min='0'
                  max='255'
                  value={values.blue}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button className='btn btn-light p-10px w-100'>
            rgb({values.red}, {values.green}, {values.blue});
          </button>
        </div>
      </div>
      <Link to='/'>
        <button className='btn btn-dark btn-sm p-10px mt-2'>뒤로가기</button>
      </Link>
    </div>
  );
};

const ColorPreview = styled.div`
  width: 250px;
  height: 200px;
`;

export default Mono;
