import React, { useState } from 'react';
import axios from 'axios';
import InputPhase from './components/InputPhase';
import LoadingPhase from './components/LoadingPhase';
import ResultPhase from './components/ResultPhase';
import { ApiResponse } from './types';
import { GlobalStyle } from './styles/styles';

import styled from "styled-components";

type Phase = 'input' | 'loading' | 'result';

const MainSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column; 
  justify-content: center;
`;

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

    // Hardcoded values for URL and carbonIntensity
    const url = "https://hiondigital.com"; // Replace with the actual URL you want to measure
    const carbonIntensity = 442; // Replace with the actual carbon intensity factor

    try {
      const response = await axios.post('https://us-central1-hionsite.cloudfunctions.net/helloWorld', {
        data: data,
        url: url,
        carbonIntensity: carbonIntensity
      });
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
      <GlobalStyle/>
      <MainSection>
        <InputPhase onSubmit={handleDataSubmit} />
        {currentPhase !== 'input' && <LoadingPhase isLoading={isLoading} />}
      </MainSection>
      {currentPhase === 'result' && result && <ResultPhase data={result} />}
    </div>
  );
};

export default App;
