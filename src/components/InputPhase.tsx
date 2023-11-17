import React, { useState } from 'react';

interface InputPhaseProps {
  onSubmit: (data: string) => void;
}

const InputPhase: React.FC<InputPhaseProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    onSubmit(input);
  };

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputPhase;
