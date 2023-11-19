import React, { useState } from "react";
import {
  CollapsibleContainer,
  CollapsibleContent,
  CollapsibleHeader,
  CollapsibleTitle,
  CollapsibleValue
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
      <CollapsibleHeader onClick={toggleOpen}  isOpen={isOpen}>
        <CollapsibleTitle>{title}</CollapsibleTitle>
        <CollapsibleValue>2 sec</CollapsibleValue>
        </CollapsibleHeader>
      <CollapsibleContent isOpen={isOpen}>
        {content}
      </CollapsibleContent>
    </CollapsibleContainer>
  );
};

export default Collapsible;
