import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

const IconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  android: FaAndroid,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
};

interface PlatformListProps {
  platforms: Platform[];
}

const PlatformList = ({ platforms }: PlatformListProps) => {
  return (
    <HStack marginY={"10px"}>
      {platforms.map(({ platform }, index) => (
        <Icon key={index} as={IconMap[platform.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default PlatformList;
