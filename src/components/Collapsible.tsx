import React, { useState } from "react";
import {
  CollapsibleContainer,
  CollapsibleContent,
  CollapsibleTitle,
} from "../styles/CollapsibleStyles";

interface CollapsibleProps {
  title: string;
  content: string;
}

const Collapsible: React.FC<CollapsibleProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <CollapsibleContainer>
      <CollapsibleTitle onClick={toggleOpen}>{title}</CollapsibleTitle>
      <CollapsibleContent isOpen={isOpen}>
        <p>{content}</p>
      </CollapsibleContent>
    </CollapsibleContainer>
  );
};

export default Collapsible;
