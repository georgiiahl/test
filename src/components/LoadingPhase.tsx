import React from "react";

type LoadingPhaseProps = {
  isLoading: boolean;
};

const LoadingPhase: React.FC<LoadingPhaseProps> = ({ isLoading }) => {
  return <div>{isLoading ? "Loading..." : "Loaded"}</div>;
};

export default LoadingPhase;
