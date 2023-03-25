import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Gradient = () => {
  const [values, setValues] = useState({
    reds: 255,
    greens: 0,
    blues: 0,
    deg: 180,
    rede: 0,
    greene: 0,
    bluee: 255,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className='container d-flex flex-column align-items-center p-5'>
      <div className='card p-2 d-flex align-items-center py-4'>
        <ColorPreview
          style={{
            background: `linear-gradient(${values.deg}deg, rgb(${values.reds},${values.greens},${values.blues}), rgb(${values.rede},${values.greene},${values.bluee}))`,
          }}
        />
        <div className='container d-flex flex-column align-items-center'></div>
        <div class='container text-center my-4'>
          <div class='row'>
            <div class='col-sm-4'>
              <div className='row'>
                <div className='col-10'>
                  <span>R</span>
                  <input
                    className='form-range'
                    type='range'
                    name='reds'
                    min='0'
                    max='255'
                    value={values.reds}
                    onChange={handleChange}
                  />
                  <span>G</span>
                  <input
                    className='form-range'
                    type='range'
                    name='greens'
                    min='0'
                    max='255'
                    value={values.greens}
                    onChange={handleChange}
                  />
                  <span>B</span>
                  <input
                    className='form-range'
                    type='range'
                    name='blues'
                    min='0'
                    max='255'
                    value={values.blues}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div class='col-sm-4'>
              <div class='row'>
                <div class='col-10'>
                  <span>Deg</span>
                  <input
                    className='form-range'
                    type='range'
                    name='deg'
                    min='0'
                    max='360'
                    value={values.deg}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='row'>
                <div className='col-10'>
                  <span>R</span>
                  <input
                    className='form-range'
                    type='range'
                    name='rede'
                    min='0'
                    max='255'
                    value={values.rede}
                    onChange={handleChange}
                  />
                  <span>G</span>
                  <input
                    className='form-range'
                    type='range'
                    name='greene'
                    min='0'
                    max='255'
                    value={values.greene}
                    onChange={handleChange}
                  />
                  <span>B</span>
                  <input
                    className='form-range'
                    type='range'
                    name='bluee'
                    min='0'
                    max='255'
                    value={values.bluee}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className='btn btn-light p-10px w-100'>
          linear-gradient({values.deg}deg, rgb({values.reds},{values.greens},
          {values.blues}), rgb({values.rede},{values.greene},{values.bluee}))
        </button>
      </div>
      <Link to='/'>
        <button className='btn btn-dark btn-sm p-10px mt-2'>뒤로가기</button>
      </Link>
    </div>
  );
};

const ColorPreview = styled.div`
  width: 350px;
  height: 200px;
`;
export default Gradient;
