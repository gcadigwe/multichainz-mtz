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
        w='100%'
        justifyContent={"center"}
        box-shadow=' 0px 5px 14px 2px rgba(0,0,0,0.38);
        -webkit-box-shadow: 0px 5px 14px 2px rgba(0,0,0,0.38);
        -moz-box-shadow: 0px 5px 14px 2px rgba(0,0,0,0.38)'
      >
        <Box w={isMobileDevice ? "100vw" : "70vw"}>
          <Flex
            alignItems={"center"}
            py={4}
            px={isMobileDevice ? 5 : undefined}
            justifyContent={"space-between"}
            flex={1}
          >
            <Flex>
              <Img src={logo.src} />
            </Flex>

            {isMobileDevice ? (
              <HamburgerIcon onClick={onToggle} fontSize={"24px"} />
            ) : (
              <>
                <Flex
                  flex={0.6}
                  justifyContent='space-between'
                  fontWeight={"700"}
                >
                  <Text
                    cursor={"pointer"}
                    _hover={{
                      textDecoration: "underline",
                      textDecorationColor: "rgba(44, 129, 237, 0.7)",
                      textDecorationThickness: "0.2em",
                    }}
                  >
                    Products
                  </Text>
                  <Text
                    cursor={"pointer"}
                    _hover={{
                      textDecoration: "underline",
                      textDecorationColor: "rgba(44, 129, 237, 0.7)",
                      textDecorationThickness: "0.2em",
                    }}
                    mx={3}
                  >
                    Markets
                  </Text>
                  <Text
                    cursor={"pointer"}
                    _hover={{
                      textDecoration: "underline",
                      textDecorationColor: "rgba(44, 129, 237, 0.7)",
                      textDecorationThickness: "0.2em",
                    }}
                  >
                    Governance
                  </Text>
                  <Text
                    cursor={"pointer"}
                    _hover={{
                      textDecoration: "underline",
                      textDecorationColor: "rgba(44, 129, 237, 0.7)",
                      textDecorationThickness: "0.2em",
                    }}
                    mx={3}
                  >
                    Documentation
                  </Text>
                </Flex>

                <Button
                  fontSize={"14px"}
                  _hover={{
                    bgColor: "#49A8FC",
                  }}
                  bgColor='#49A8FC'
                  color='white'
                >
                  Launch App
                </Button>
              </>
            )}
          </Flex>
        </Box>
      </Flex>

      <MobileNavbar toggle={onToggle} isOpen={isOpen} />
    </>
  );
};

export default Navbar;
