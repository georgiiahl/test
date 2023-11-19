import React from "react";
import styled from "styled-components";

interface SliderProps {
  value: number;
  min: number;
  max: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SliderValue = styled.p`
  font-size: 1em;
  margin-top: 20px;
`

const Range = styled.input`
  width: 100%;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track{
    height: 3px;
    border-radius: 2px;
    background-color: #360dc9;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px; 
    height: 20px; 
    border-radius: 50%;
    background: #360dc9; 
    cursor: pointer;
    margin-top: -8px;
  }
`;

const Slider: React.FC<SliderProps> = ({ value, min, max, onChange }) => {
  return (
    <div>
      <Range
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <SliderValue>Value: {value}</SliderValue>
    </div>
  );
};

export default Slider;