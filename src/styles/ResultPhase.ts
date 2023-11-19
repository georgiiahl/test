import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ResultsHeader = styled.div`
    width: 94%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
`;

export const SliderContainer = styled.div`
    width: 45%;
`;

export const SliderText = styled.div `

`;

export const SliderTitle = styled.h4 `
    font-size: 2em;
    color: #360dc9;
`;

export const SliderDescription = styled.p `
    font-size: 1em;
    margin: 25px 0;
`;

export const EmissionInfo = styled.div `
    width: 50%;
    background-color: #360dc9;
    font-size: 1.8em;
    line-height: 1.8em;
    color: #fff;
    padding: 5%;
    text-align: center;
    box-sizing: border-box;
    border-radius: 16px;
    opacity: 0.8;
`;

/* CARDS */

export const CardsContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  width: 94%;
  padding: 0 0 40px 0;
`;

export const Card = styled.div`

  
  
  @media (min-width: 768px) {
    width: 45%;
    
    margin: 60px 10% 0 0;
    &:nth-child(2n) {
      margin: 60px  0 0 0;
    }
  }
  @media (min-width: 1024px) {
    
    margin: 60px 4% 0 0;
    width: 22%;
    &:nth-child(4n) {
      margin: 60px 0 0 0;
    }
  }
  @media (min-width: 1920px) {
  }
  @media (max-width: 767px) {
    width: 45%;
    
    margin: 60px 10% 0 0;
    &:nth-child(2n) {
      margin: 60px  0 0 0;
    }
  }
`;

export const CardTitle = styled.h4`
  font-size: 2em;
  color: #360dc9;
  height: 160px;
`;

export const CardValue = styled.div`
  font-size: 4.6em;
  font-weight: bold;
`;

export const CardDescription = styled.div`
  margin-top: 30px;
  font-size: 1em;
`;

export const ContactButton = styled.button`
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
`

export const ButtonContainer = styled.div`
    width: 94%;
    margin-top: 20px;
`

export const Collapsibles = styled.div`
    margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
`