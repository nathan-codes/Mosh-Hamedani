import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import getCroppedImages from "../services/getCroppedImageUrl";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card width={"300px"} borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImages(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}> {game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformList platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
