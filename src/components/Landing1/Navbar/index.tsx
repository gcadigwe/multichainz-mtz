import {
  Button,
  Flex,
  Img,
  Text,
  Box,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../../../assets/svg/multichainzlogo.svg";
import { HamburgerIcon } from "@chakra-ui/icons";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        w={isMobileDevice ? "100vw" : "70vw"}
        //   border='1px solid red'
        alignItems={"center"}
        py={4}
        px={isMobileDevice ? 5 : undefined}
        justifyContent={"space-between"}
      >
        <Img src={logo.src} />

        {isMobileDevice ? (
          <HamburgerIcon onClick={onToggle} fontSize={"24px"} />
        ) : (
          <>
            <Flex>
              <Text>Products</Text>
              <Text mx={3}>Markets</Text>
              <Text>Governance</Text>
              <Text mx={3}>Documentation</Text>
            </Flex>

            <Button fontSize={"14px"} bgColor='#49A8FC' color='white'>
              Launch App
            </Button>
          </>
        )}
      </Flex>

      <MobileNavbar toggle={onToggle} isOpen={isOpen} />
    </>
  );
};

export default Navbar;
