import React, { useState } from "react";
import styled from "styled-components";
import { ApiResponse } from "../types";
import Slider from "./Slider";
import Collapsible from "./Collapsible";
import {
  Layout,
  SliderContainer,
  SliderText,
  SliderTitle,
  SliderDescription,
  EmissionInfo,
  ResultsHeader,
  CardsContainer,
  Card,
  CardTitle,
  CardValue,
  CardDescription,
  ContactButton,
  ButtonContainer,
  Collapsibles
} from "../styles/ResultPhase";

const Container = styled.div`
background: #e9e9e9;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
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
    <EmissionInfo>
      Total Emissions:<br/> {emissions}
    </EmissionInfo>
  );

  const renderAuditScoreCard = (title: string, score: number) => (
    <Card key={title}>
      <CardTitle>{'Site overall sustainability score'}</CardTitle>
      <CardValue>{score}</CardValue>
      <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit...</CardDescription>
    </Card>
  );

  const renderAuditScores = () => {
    const scores = data.apiResponse.individualAuditScores;
    return (
      <CardsContainer>
        {Object.entries(scores).map(([key, value]) =>
          renderAuditScoreCard(key, value)
        )}
      </CardsContainer>
    );
  };

  return (
    <Container>
      <Layout>
        <ResultsHeader>
          <SliderContainer>
              <SliderText>
                <SliderTitle>Monthly sessions</SliderTitle>
                <SliderDescription>You can choose the monthly sessions and the emissions would change accordingly</SliderDescription>
              </SliderText>
              {renderSlider()}
            </SliderContainer>
            {renderEmissionsInfo(data.apiResponse.emissions * visits)}
        </ResultsHeader>
      
      {renderAuditScores()}
      <ButtonContainer>
        <ContactButton>Contact us</ContactButton>
      </ButtonContainer>
      </Layout>

      <Collapsibles>{renderAuditCollapsibles()}</Collapsibles>
    </Container>
  );
};

export default ResultPhase;
