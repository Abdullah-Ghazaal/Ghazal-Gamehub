import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { GrLinkTop } from "react-icons/gr";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsVisible(window.scrollY > 350 ? true : false);
    });
  }, []);

  const JumpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={JumpToTop}
          colorScheme="teal"
          position="fixed"
          right="3"
          bottom="4"
          borderRadius="100%"
          zIndex="2"
          paddingX="16px"
          paddingY="18px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <GrLinkTop />
        </Button>
      )}
    </>
  );
}

export default ScrollToTop;
