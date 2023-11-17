import React, { useState } from 'react';
import axios from 'axios';
import InputPhase from './components/InputPhase';
import LoadingPhase from './components/LoadingPhase';
import ResultPhase from './components/ResultPhase';
import { ApiResponse } from './types';

type Phase = 'input' | 'loading' | 'result';

const App: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState<Phase>('input');
  const [inputData, setInputData] = useState<string>('');
  const [result, setResult] = useState<{
    greeting: string;
    apiResponse: ApiResponse;
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDataSubmit = async (data: string) => {
    setInputData(data);
    setIsLoading(true);
    setCurrentPhase('loading');

    try {
      const response = await axios.post('https://us-central1-hionsite.cloudfunctions.net/helloWorld', { data: data });
      console.log(response.data);
      setResult(response.data);
      setIsLoading(false);
      setCurrentPhase('result');
    } catch (error) {
      console.error('Error calling cloud function:', error);
      setIsLoading(false);
    }
  };


  return (
    <div className="App">
      <InputPhase onSubmit={handleDataSubmit} />
      {currentPhase !== 'input' && <LoadingPhase isLoading={isLoading} />}
      {currentPhase === 'result' && result && <ResultPhase data={result} />}
    </div>
  );
};

export default App;
