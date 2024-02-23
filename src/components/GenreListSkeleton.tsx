import { List, ListItem, SkeletonCircle } from "@chakra-ui/react";

function GenreListSkeleton() {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <List>
      {skeletons.map((s) => (
        <ListItem key={s} marginY={4}>
          <SkeletonCircle></SkeletonCircle>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreListSkeleton;
