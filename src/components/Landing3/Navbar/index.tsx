import {
  Button,
  Flex,
  Img,
  Text,
  Box,
  useMediaQuery,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import logo from "../../../assets/svg/multichainzlogo.svg";
import { HamburgerIcon } from "@chakra-ui/icons";
import MobileNavbar from "./MobileNavbar";
import styles from "./styles.module.css";
import Link from "next/link";

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
        zIndex={2}
      >
        <Box w={{ sm: "100vw", md: "70vw", lg: "70vw", xl: "70vw" }}>
          <Flex
            py={{ sm: 4, lg: 4, xl: 6 }}
            alignItems={"center"}
            // py={4}
            px={isMobileDevice ? 5 : undefined}
            justifyContent={"space-between"}
            flex={1}
          >
            <Link href='/'>
              <Flex>
                <Img src={logo.src} />
              </Flex>
            </Link>

            {isMobileDevice ? (
              <HamburgerIcon onClick={onToggle} fontSize={"24px"} />
            ) : (
              <>
                <Flex
                  fontSize={{ sm: "16px", md: "14px", lg: "16px", xl: "18px" }}
                  flex={{ lg: 0.8, xl: 0.7 }}
                  justifyContent='space-between'
                  fontWeight={"700"}
                >
                  {/* <Tooltip label='Coming soon...' hasArrow>
                    <Text
                      cursor={"pointer"}
                      className={styles.hoverUnderlineAnimation}
                    >
                      Products
                    </Text>
                  </Tooltip>
                  <Tooltip label='Coming soon...' hasArrow>
                    <Text
                      cursor={"pointer"}
                      className={styles.hoverUnderlineAnimation}
                    >
                      Markets
                    </Text>
                  </Tooltip> */}
                  <Link href={"/governance"}>
                    <Text
                      cursor={"pointer"}
                      className={styles.hoverUnderlineAnimation}
                    >
                      Governance
                    </Text>
                  </Link>
                  <Tooltip label='Coming soon...' hasArrow>
                    <Text
                      cursor={"pointer"}
                      className={styles.hoverUnderlineAnimation}
                      // mx={3}
                      textDecorationThickness={"0.2em"}
                    >
                      Documentation
                    </Text>
                  </Tooltip>

                  <Link href='/lending'>
                    <Text
                      cursor={"pointer"}
                      className={styles.hoverUnderlineAnimation}
                      // mx={3}
                      textDecorationThickness={"0.2em"}
                    >
                      Lending
                    </Text>
                  </Link>

                  <Link href='/yield'>
                    <Text
                      cursor={"pointer"}
                      className={styles.hoverUnderlineAnimation}
                      // mx={3}
                      textDecorationThickness={"0.2em"}
                    >
                      Yield
                    </Text>
                  </Link>
                </Flex>

                <Button
                  _hover={{
                    bgColor: "#49A8FC",
                  }}
                  bgColor='#49A8FC'
                  color='white'
                  fontSize={{ lg: "16px", xl: "18px" }}
                  py={6}
                  px={8}
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
