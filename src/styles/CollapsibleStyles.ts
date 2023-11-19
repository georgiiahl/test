import styled from "styled-components";
import arrUp from "./arrUp.svg";
import arrDown from "./arrDown.svg";

export interface CollapsibleContentProps {
  isOpen: boolean;
}

const arr = arrDown
export const CollapsibleContent = styled.div<CollapsibleContentProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding: 0 25px 25px 25px;
`;

export const CollapsibleContainer = styled.div`
  margin: 10px 0;
  background: #fff;
  width: 94%;
  border-radius: 10px;
`;
export const CollapsibleHeader = styled.button<CollapsibleContentProps>`
border-radius: 10px;
  padding: 25px;
  width: 100%;
  text-align: left;
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  font-size: 1.1em;
  font-weight: bold;
  position: relative;
  &:after {
    content: '';
    background: url(${(props) => (props.isOpen ? arrUp : arrDown)}) no-repeat center right;
    display: block;
    height: 70px;
    width: 18px;
    position: absolute;
    top: 0;
    right: 20px;
    color: #360dc9;
  }
`;

export const CollapsibleTitle = styled.div`
  width: 60%;
`

export const CollapsibleValue = styled.div`
  width: 40%;
  color: #360dc9;
`