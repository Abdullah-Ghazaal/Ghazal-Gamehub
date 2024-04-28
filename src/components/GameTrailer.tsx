import { AspectRatio, Button, HStack } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";
import { useState } from "react";

interface Props {
  slug: string;
}

function GameTrailer({ slug }: Props) {
  const [videoQuality, setVideoQuality] = useState("480");
  const { data, error, isLoading } = useGameTrailers(slug);

  if (error) return null;

  if (isLoading) return null;

  const firstTrailer = data?.results[0];

  if (!firstTrailer) return null;

  const videoSrc =
    videoQuality === "480" ? firstTrailer.data[480] : firstTrailer.data.max;

  const btnHDColor = videoQuality === "HD" ? "gray" : "pink";
  const btn480Color = videoQuality === "480" ? "gray" : "green";

  return (
    <>
      <HStack my={1} justifyContent="center">
        <Button onClick={() => setVideoQuality("HD")} colorScheme={btnHDColor}>
          {videoQuality === "HD" ? "HD ✅" : "HD"}
        </Button>
        <Button
          onClick={() => setVideoQuality("480")}
          colorScheme={btn480Color}
        >
          {videoQuality === "480" ? "480 ✅" : "480"}
        </Button>
      </HStack>
      <AspectRatio ratio={16 / 9}>
        <video src={videoSrc} poster={firstTrailer.preview} controls />
      </AspectRatio>
    </>
  );
}

export default GameTrailer;
