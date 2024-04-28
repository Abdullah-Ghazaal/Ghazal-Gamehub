import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  const [isExpanded, setExpandText] = useState(false);
  const limit = 340;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  ////

  const unexpandedText = children.substring(0, limit);

  const text = isExpanded ? children : `${unexpandedText}...`;

  return (
    <Text lineHeight="1.7em">
      {text}
      <Button
        size="sm"
        colorScheme="yellow"
        marginLeft={1}
        fontWeight="bold"
        onClick={() => setExpandText((prev) => !prev)}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
}

export default ExpandableText;
