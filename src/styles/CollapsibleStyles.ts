import styled from "styled-components";

export interface CollapsibleContentProps {
  isOpen: boolean;
}

export const CollapsibleContent = styled.div<CollapsibleContentProps>`
  padding: 10px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const CollapsibleContainer = styled.div`
  margin-top: 10px;
  padding: 5px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const CollapsibleTitle = styled.button`
  padding: 10px;
  width: 100%;
  text-align: left;
  background: #eee;
  border: none;
  outline: none;
  cursor: pointer;
`;
