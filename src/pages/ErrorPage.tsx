import { Heading, Stack, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  return (
    <>
      <NavBar />
      <Stack
        spacing={5}
        height="70vh"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as={"h1"}>Oops... 😓</Heading>
        <Text fontSize="xl">
          {isRouteError
            ? "Invalid URL, the page does not exist or it has been removed"
            : "Sorry, something went wrong try to refresh the page"}
        </Text>
      </Stack>
    </>
  );
}

export default ErrorPage;
