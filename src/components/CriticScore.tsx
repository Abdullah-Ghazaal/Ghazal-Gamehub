import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score >= 85 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <Badge
        colorScheme={color}
        fontSize="16px"
        paddingX="10px"
        borderRadius="7px"
      >
        {score}
      </Badge>
    </>
  );
}

export default CriticScore;
