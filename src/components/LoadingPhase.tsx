import React from "react";
import styled from "styled-components";

type LoadingPhaseProps = {
  isLoading: boolean;
};

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4605DF;
  color: #FFF;
  animation-duration: 3s;
  animation-name: open;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const LoadingPhase: React.FC<LoadingPhaseProps> = ({ isLoading }) => {
  return <LoadingContainer>{isLoading ? "Loading..." : "Loaded"}</LoadingContainer>;
};

export default LoadingPhase;
