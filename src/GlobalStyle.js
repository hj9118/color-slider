import styled from 'styled-components';

export const Input = styled.input`
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
