import React, { useState } from "react";
import styled from "styled-components";
import { ApiResponse } from "../types";
import Slider from "./Slider";
import Collapsible from "./Collapsible";

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const EmissionsInfo = styled.div`
  padding: 15px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-basis: 40%;
  text-align: center;
`;
const Card = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardTitle = styled.h4`
  margin-bottom: 5px;
`;

const CardValue = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const AuditScoresRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

interface ResultPhaseProps {
  data: {
    greeting: string;
    apiResponse: ApiResponse;
  };
}

const ResultPhase: React.FC<ResultPhaseProps> = ({ data }) => {
  const [visits, setVisits] = useState(1);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVisits(Number(event.target.value));
  };

  const renderSlider = () => (
    <Slider value={visits} min={1} max={10000} onChange={handleSliderChange} />
  );

  const renderAuditCollapsibles = () => {
    const scores = data.apiResponse.individualAuditScores;
    return Object.keys(scores).map((key) => (
      <Collapsible
        key={key}
        title={key}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      />
    ));
  };

  const renderEmissionsInfo = (emissions: number) => (
    <EmissionsInfo>
      <div>Total Emissions: {emissions}</div>
    </EmissionsInfo>
  );

  const renderAuditScoreCard = (title: string, score: number) => (
    <Card key={title}>
      <CardTitle>{title}</CardTitle>
      <CardValue>{score}</CardValue>
    </Card>
  );

  const renderAuditScores = () => {
    const scores = data.apiResponse.individualAuditScores;
    return (
      <AuditScoresRow>
        {Object.entries(scores).map(([key, value]) =>
          renderAuditScoreCard(key, value)
        )}
      </AuditScoresRow>
    );
  };

  return (
    <Container>
      <Header>{data.greeting}</Header>
      <Layout>
        <div>
          <label>Website Traffic (Number of Visits):</label>
          {renderSlider()}
        </div>
        {renderEmissionsInfo(data.apiResponse.emissions * visits)}
      </Layout>
      {renderAuditScores()}
      <div>{renderAuditCollapsibles()}</div>
    </Container>
  );
};

export default ResultPhase;
