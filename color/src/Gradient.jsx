import { useState } from 'react';
import styled from 'styled-components';
import { Input } from './GlobalStyle';


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
    <Container>
      <ColorPreview
        style={{
          background: `linear-gradient(${values.deg}deg, rgb(${values.reds},${values.greens},${values.blues}), rgb(${values.rede},${values.greene},${values.bluee}))`,
        }}
      ></ColorPreview>
      <Range>
        <Start>
          <Color>
            <span>Red</span>
            <Input
              type='range'
              name='reds'
              min='0'
              max='255'
              value={values.reds}
              onChange={handleChange}
            />
          </Color>
          <Color>
            <span>Green</span>
            <Input
              type='range'
              name='greens'
              min='0'
              max='255'
              value={values.greens}
              onChange={handleChange}
            />
          </Color>
          <Color>
            <span>Blue</span>
            <Input
              type='range'
              name='blues'
              min='0'
              max='255'
              value={values.blues}
              onChange={handleChange}
            />
          </Color>
        </Start>
        <Deg>
          <span>Deg</span>
          <Input
            type='range'
            name='deg'
            min='0'
            max='360'
            value={values.deg}
            onChange={handleChange}
          />
        </Deg>
        <End>
          <Color>
            <span>Red</span>
            <Input
              type='range'
              name='rede'
              min='0'
              max='255'
              value={values.rede}
              onChange={handleChange}
            />
          </Color>
          <Color>
            <span>Green</span>
            <Input
              type='range'
              name='greene'
              min='0'
              max='255'
              value={values.greene}
              onChange={handleChange}
            />
          </Color>
          <Color>
            <span>Blue</span>
            <Input
              type='range'
              name='bluee'
              min='0'
              max='255'
              value={values.bluee}
              onChange={handleChange}
            />
          </Color>
        </End>
      </Range>
      <Btn>
        code: linear-gradient({values.deg}deg, rgb({values.reds},{values.greens}
        ,{values.blues}), rgb({values.rede},{values.greene},{values.bluee}))
      </Btn>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  width: 80vw;
  border: 1px solid #000;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ColorPreview = styled.div`
  width: 250px;
  height: 200px;
`;

const Range = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;

const Start = styled.div``;
const Deg = styled.div`
  span {
    margin-right: 10px;
  }
`;
const End = styled.div``;

const Color = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;
  span {
    margin-right: 10px;
  }
`;

const Btn = styled.button`
  width: 60%;
  padding: 10px;
  margin: 10px;
  background-color: lightgray;
  :hover,
  :active {
    background-color: gray;
    color: white;
  }
  border: none;
  border-radius: 15px;
`;

export default Gradient;
