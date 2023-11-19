import React, { useState } from 'react';
import styled from "styled-components";

interface InputPhaseProps {
  onSubmit: (data: string) => void;
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  min-height: 400px;
`;

const FormContainer = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
`;

const InputTitle = styled.h3`
  font-size: 4em; 
  font-weight: bold;
  margin: 0; 
  padding: 0 0 30px 0;
  font-family: 'Helvetica';
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1920px) {
  }
  @media (max-width: 767px) {
  }
`;

const InputTitleBlue = styled.p`
  color: #360dc9;
  margin: 0;
`;

const Container = styled.div`
  width: 85%;
  max-width: 1200px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  input {
    width: 100%;
    height: 2.6em;
    box-sizing: border-box;
    border: 0;
    font-size: 1.4em;
    line-height: 2.6em;
  }

  &:after {
    content: '';
    position: absolute;
    height: 3px;
    width: 100%;
    bottom: -3px;
    border-radius: 3px;
    display: block;
    background-color: #360dc9;
  }
`;


const FormSubmit = styled.button`
display: block;
  background-color: #4605DF;
  color: #fff;
  font-size: 1em;
  padding: 20px 30px;
  border-radius: 50px;
  box-sizing: border-box;
  border: 0;
  cursor: pointer; 
  &:hover {
    opacity: 0.9;
  }
`;

const InputPhase: React.FC<InputPhaseProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    onSubmit(input);
  };

  return (
    <FlexContainer>
        <Container>
          <InputTitle>Insert url and click<br/><InputTitleBlue>Calculate</InputTitleBlue></InputTitle>
          <FormContainer>
            <InputWrapper>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Url:'/>
            </InputWrapper>
            <FormSubmit onClick={handleSubmit}>Calculate</FormSubmit>
          </FormContainer>
        </Container>
    </FlexContainer>
  );
};

export default InputPhase;
