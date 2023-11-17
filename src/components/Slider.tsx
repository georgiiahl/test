import React from "react";

interface SliderProps {
  value: number;
  min: number;
  max: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: React.FC<SliderProps> = ({ value, min, max, onChange }) => {
  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <p>Visits: {value}</p>
    </div>
  );
};

export default Slider;
