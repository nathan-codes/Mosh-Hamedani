import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import getCroppedImages from "../services/getCroppedImageUrl";
import GameCardContainer from "./GameCardContainer";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImages(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformList platforms={game.parent_platforms} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}> {game.name}</Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
