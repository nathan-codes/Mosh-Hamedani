import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleTextExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const isTextExpandable = children.length > maxChar;
  const displayedText = isExpanded
    ? children
    : children.slice(0, maxChar) +"...";

  return (
    <div>
      <p>{displayedText}</p>
      {isTextExpandable && (
        <button onClick={handleToggleTextExpand}>
          {isExpanded ? "Less" : "More"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;


