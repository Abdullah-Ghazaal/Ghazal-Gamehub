import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem bg="coral" area={"nav"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem bg="gold">Aside</GridItem>
      </Show>
      <GridItem bg="dodgerblue">Main</GridItem>
    </Grid>
  );
}

export default App;
