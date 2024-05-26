import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import ScrollToTop from "../components/ScrollToTop";
import BackgroundGradient from "../components/BackgroundGradient";

function Layout() {
  return (
    <>
      <BackgroundGradient />
      <SimpleGrid templateAreas={`"nav" "main"`}>
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem area={"main"}>
          <Outlet />
          <ScrollToTop />
        </GridItem>
      </SimpleGrid>
    </>
  );
}

export default Layout;
