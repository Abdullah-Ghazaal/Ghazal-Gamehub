import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gamesService";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/image-url";
import { useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <Card onClick={() => navigate(`/games/${game.slug}`)} height="100%">
        <Image src={getCroppedImgUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIcons
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
