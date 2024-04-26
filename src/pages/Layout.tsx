import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";

function Layout() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `220px 1fr`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Outlet />
      {/* All Outlet components (the layout route's children components) must be wrapped in a GridItem component */}
    </Grid>
  );
}

export default Layout;
