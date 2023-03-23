import { useState } from 'react';
import styled from 'styled-components';

const App = () => {
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
    <Container>
      <ColorPreview
        style={{
          backgroundColor: `rgba(${values.red},${values.green},${values.blue})`,
        }}
      ></ColorPreview>
      <div className='range'>
        <Color>
          <span>Red</span>
          <input
            type='range'
            name='red'
            min='0'
            max='255'
            value={values.red}
            onChange={handleChange}
          />
        </Color>
        <Color>
          <span>Green</span>
          <input
            type='range'
            name='green'
            min='0'
            max='255'
            value={values.green}
            onChange={handleChange}
          />
        </Color>
        <Color>
          <span>Blue</span>
          <input
            type='range'
            name='blue'
            min='0'
            max='255'
            value={values.blue}
            onChange={handleChange}
          />
        </Color>
        <Btn>
          rgb: ({values.red}, {values.green}, {values.blue});
        </Btn>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 50vw;
  min-width: 300px;
  height: 50vh;
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

const Color = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;
  span {
    margin-right: 10px;
  }

  input[type='range'] {
    height: 16px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #adadad;
    border-radius: 2px;
    border: 0px solid #000000;
  }
  input[type='range']::-webkit-slider-thumb {
    box-shadow: 0px 0px 1px #000000;
    border: 0px solid #2e2e2e;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: #2e2e2e;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3px;
  }
`;

const Btn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: lightgray;
  :hover,
  :active {
    background-color: gray;
    color: white;
  }
  border: none;
  border-radius: 15px;
`;

export default App;
