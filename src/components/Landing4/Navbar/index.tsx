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
        position={"absolute"}
        w='100vw'
        backdropFilter={"blur(76px)"}
        justifyContent={"center"}
        zIndex={199999}
        background='linear-gradient(90deg, rgba(223,216,255,1) 0%, rgba(204,211,255,1) 40%, rgba(175,202,255,1) 100%)'
      >
        <Flex
          w={isMobileDevice ? "100vw" : "70vw"}
          alignItems={"center"}
          py={4}
          px={isMobileDevice ? 5 : undefined}
          justifyContent={"space-between"}
        >
          <Img src={logo.src} />

          {isMobileDevice ? (
            <HamburgerIcon
              onClick={() => {
                onToggle();
              }}
              fontSize={"24px"}
            />
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
      </Flex>

      <MobileNavbar toggle={onToggle} isOpen={isOpen} />
    </>
  );
};

export default Navbar;
