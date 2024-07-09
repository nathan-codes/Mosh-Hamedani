import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: ExpandableTextProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const text = isExpanded ? children : children.slice(0, maxChar) + "...";
    
    if (children.length <= maxChar) return <p>{children}</p>
  return (
    <p>
      {text}
      <button onClick={()=>setIsExpanded(!isExpanded)}> {isExpanded ? "Less" : "More"}</button>
    </p>
  );
};

export default ExpandableText;
