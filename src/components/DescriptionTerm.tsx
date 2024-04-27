import { Box, Heading, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

function DescriptionTerm({ term, children }: Props) {
  return (
    <Stack spacing={1}>
      <Heading as={"dt"} color="teal.300" size="md">
        {term}
      </Heading>
      <Box>{children}</Box>
    </Stack>
  );
}

export default DescriptionTerm;
