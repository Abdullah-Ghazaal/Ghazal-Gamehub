import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

function Layout() {
  return (
    <SimpleGrid templateAreas={`"nav" "main"`}>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <Outlet />
      </GridItem>
    </SimpleGrid>
  );
}

export default Layout;
