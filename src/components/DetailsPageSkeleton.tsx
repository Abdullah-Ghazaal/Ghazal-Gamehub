import { SimpleGrid, Skeleton, GridItem } from "@chakra-ui/react";

function DetailsPageSkeleton() {
  const textSkeletons = ["line1", "line2", "line3", "line4"];
  const attributesSkeletons = ["att1", "att2", "att3", "att4"];
  const screenshtosSkeletons = ["sc1", "sc2", "sc3", "sc4"];

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} padding={4} spacing={5}>
      <GridItem>
        {textSkeletons.map((s) => (
          <Skeleton key={s} height="20px" marginY={3} />
        ))}
        <SimpleGrid
          columns={2}
          templateColumns={"1.5fr 1fr"}
          spacingY={10}
          marginY={10}
        >
          {attributesSkeletons.map((s) => (
            <Skeleton key={s} height="20px" width={"120px"} />
          ))}
        </SimpleGrid>
      </GridItem>
      <GridItem>
        <Skeleton height="300px" marginBottom={2} />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {screenshtosSkeletons.map((s) => (
            <Skeleton key={s} height="200px" borderRadius="15px" />
          ))}
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  );
}

export default DetailsPageSkeleton;
