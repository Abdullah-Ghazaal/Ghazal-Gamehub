import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import ScrollToTop from "../components/ScrollToTop";

function Layout() {
  return (
    <SimpleGrid templateAreas={`"nav" "main"`}>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <Outlet />
        <ScrollToTop />
      </GridItem>
    </SimpleGrid>
  );
}

export default Layout;
