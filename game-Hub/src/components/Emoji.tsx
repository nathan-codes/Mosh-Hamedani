import { Image, ImageProps } from "@chakra-ui/react";

import meh from "../assets/meh.webp";
import bullseye from "../assets/bulls-eye.webp";
import thumbsup from "../assets/thumbs-up.webp";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;
  const emojiMap: Record<number, ImageProps> = {
    3: { src: meh, alt: "meh" , boxSize:"25px" },
    4: { src: thumbsup, alt: "thumbsup" , boxSize:"25px"},
    5: { src: bullseye, alt: "bullseye" , boxSize:"25px"},
  };

  return <Image boxSize="25px" {...emojiMap[rating]}  marginTop={1}/>;
};

export default Emoji;
