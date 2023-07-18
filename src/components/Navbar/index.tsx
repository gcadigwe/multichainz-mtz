import { Flex, Img, Text, useMediaQuery } from "@chakra-ui/react";
import logo from "../../assets/svg/logo.svg";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");

  return (
    <Flex
      zIndex={8}
      px={isMobileDevice ? 5 : 32}
      pt={5}
      w='100%'
      position='absolute'
      alignItems='center'
      justifyContent={"space-between"}
    >
      <Link href={"/"}>
        <Img src={logo.src} />
      </Link>

      {/* {isMobileDevice ? (
        <HamburgerIcon color='white' boxSize={"6"} />
      ) : (
        <Flex color='white'>
          <Text cursor={"pointer"}>How to claim</Text>
          <Text cursor={"pointer"} mx={3}>
            Why Spherium
          </Text>
          <Text cursor={"pointer"}>Join Community</Text>
        </Flex>
      )} */}
    </Flex>
  );
};

export default Navbar;
