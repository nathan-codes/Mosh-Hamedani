import { Badge } from "@chakra-ui/react";

interface CriticScore {
  score: number;
}

const CriticScore = ({ score }: CriticScore) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge
      colorScheme={color}
      paddingX={2}
      borderRadius={"4px"}
      fontSize={"14px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
