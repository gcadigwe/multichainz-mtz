import {
  Box,
  Flex,
  Text,
  Button,
  Img,
  Divider,
  useMediaQuery,
  AspectRatio,
  Heading,
} from "@chakra-ui/react";
import multichainz from "../../assets/svg/bigmultichainz.svg";
import binance from "../../assets/svg/placeholderbinance.svg";
import cmc from "../../assets/svg/cmc.svg";
import coingecko from "../../assets/svg/coingecko.svg";
import Navbar from "@/components/Landing4/Navbar";
import GovernanceCard from "@/components/Landing4/Cards/Governance";
import comingsoon from "../../assets/comingsoon.png";
import comingsoonmobile from "../../assets/comingsoonmobile.png";
import join from "../../assets/join.png";
import backgroundvidpic from "../../assets/backgroundvidpic.png";
import quillhash from "../../assets/svg/quickshill.svg";
import halborn from "../../assets/svg/halborn.svg";
import peckshield from "../../assets/svg/peckshield.svg";
import Footer from "@/components/Footer";
import videoblemish from "../../assets/videoblemish.png";
import AnimatedPolygon from "@/components/Landing1/AnimatedPolygons";
import styles from "./styles.module.css";
import FixedMenu from "@/components/Landing1/Menu/FixedMenu";
import { useEffect, useState } from "react";

export default function Landing4() {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");

  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setShowElement(scrollPosition > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      color='black'
      background='radial-gradient(circle, rgba(235,242,248,1) 0%, rgba(182,217,245,1) 100%)'
    >
      <Flex justifyContent={"center"}>
        <Navbar />
      </Flex>

      <Flex flexDirection='column'>
        <Flex position={"relative"} pt={10}>
          {isMobileDevice ? (
            <Img src={backgroundvidpic.src} />
          ) : (
            <>
              <Flex
                w='100%'
                h='100vh'
                // h='70vh'
                // justifyContent={"center"}
                // background='linear-gradient(90deg, rgba(223,216,255,1) 0%, rgba(204,211,255,1) 40%, rgba(175,202,255,1) 100%)'
              >
                <video
                  // height={"50px"}
                  style={{
                    objectFit: "cover",
                  }}
                  width='100% !important'
                  height={"50% !important"}
                  // height={"100%"}
                  // width='1200'
                  // height='240'
                  muted
                  autoPlay
                  loop
                  src='https://res.cloudinary.com/duzyqi3zj/video/upload/v1686834772/dao_half_vd3zvt.mp4'
                />
              </Flex>
            </>
          )}

          <AnimatedPolygon />

          {showElement && !isMobileDevice && <FixedMenu />}

          <Flex
            w='100%'
            top={"40%"}
            position='absolute'
            flexDirection={"column"}
            alignItems='center'
          >
            <Heading
              fontSize={{ sm: "40px", lg: "80px", xl: "100px" }}
              fontWeight='900'
            >
              Multichainz DAO
            </Heading>
            <Text
              textAlign={isMobileDevice ? "center" : undefined}
              mb={5}
              fontSize={isMobileDevice ? "20px" : "30px"}
            >
              Propose, Vote, and Engage in the protocol governance system
            </Text>
            <Button
              color='white'
              fontSize={"14px"}
              px={8}
              background={
                "linear-gradient(90deg, rgba(73,168,252,1) 0%, rgba(104,172,253,1) 100%)"
              }
              _hover={{
                background:
                  "linear-gradient(90deg, rgba(73,168,252,1) 0%, rgba(104,172,253,1) 100%)",
              }}
            >
              Go to Forum
            </Button>
          </Flex>

          {isMobileDevice ? (
            <Flex
              w='100%'
              top='95%'
              position={"absolute"}
              justifyContent={"center"}
            >
              <Box
                position={"relative"}
                boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
                borderRadius={"12px"}
                p={4}
                pt={20}
                w='90vw'
                bgColor={"#E0EFFB"}
              >
                <Flex justifyContent={"space-between"}>
                  <Box>
                    <Heading
                      fontWeight={"700"}
                      fontSize='24px'
                      textAlign={"center"}
                    >
                      CHAINZ, the MultichainZ Governance Token
                    </Heading>

                    <Text my={4} textAlign='center'>
                      Use CHAINZ to submit priority proposals, get voting
                      powers, and access exclusive benefits to govern
                      Multichainz
                    </Text>

                    <Text fontWeight={"bold"}>Trade</Text>
                    <Flex
                      //   justifyContent={"space-between"}
                      flexDirection='column'
                    >
                      <Flex w='100%' justifyContent={"space-between"}>
                        <Img w='100px' src={binance.src} />
                        <Img w='100px' src={binance.src} />
                        <Img w='100px' src={binance.src} />
                      </Flex>
                      <Divider orientation='vertical' />

                      <Flex mt={4}>
                        <Flex mb={5} flexDirection={"column"}>
                          <Text fontWeight={"bold"}>Learn more</Text>
                          <Img src={cmc.src} />
                        </Flex>
                        <Img src={coingecko.src} />
                      </Flex>
                    </Flex>

                    <Flex position={"absolute"} top={-20} left='26%'>
                      <Img src={multichainz.src} />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          ) : (
            <>
              <Flex
                position={"absolute"}
                top='80%'
                w='100%'
                // border={"1px solid red"}
                // borderBottom={"1px solid black"}
                // boxShadow={"0px 42px 50px -15px rgba(0, 7, 72, 0.31)"}
              >
                <Img h='260px' w='100%' src={videoblemish.src} />
              </Flex>
              <Flex
                top='90%'
                position={"absolute"}
                justifyContent='center'
                w='100%'
              >
                <Flex
                  w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
                  justifyContent={"center"}
                >
                  <Box
                    boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.12)"}
                    borderRadius={"12px"}
                    p={8}
                    w='70vw'
                    bgColor={"#E0EFFB"}
                  >
                    <Flex justifyContent={"space-between"}>
                      <Box>
                        <Heading fontWeight={"700"} fontSize='24px'>
                          CHAINZ, the MultichainZ Governance Token
                        </Heading>

                        <Text my={4}>
                          Use CHAINZ to submit priority proposals, get voting
                          powers,
                          <br />
                          and access exclusive benefits to govern Multichainz
                        </Text>

                        <Text fontWeight={"bold"}>Trade</Text>
                        <Flex
                          justifyContent={"space-between"}
                          alignItems='center'
                        >
                          <Img filter={"blur(4px)"} src={binance.src} />
                          <Img filter={"blur(4px)"} mx={6} src={binance.src} />
                          <Img filter={"blur(4px)"} src={binance.src} />
                          <Divider
                            h='50px'
                            mx={4}
                            borderColor='black'
                            orientation='vertical'
                          />
                          <Flex ml={12} mx={3} mb={5} flexDirection={"column"}>
                            <Text fontWeight={"bold"}>Learn more</Text>
                            <Img
                              className={styles.scaleimage}
                              cursor={"pointer"}
                              src={cmc.src}
                              mr={4}
                            />
                          </Flex>
                          <Img cursor={"pointer"} src={coingecko.src} />
                        </Flex>
                      </Box>

                      <Img src={multichainz.src} />
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </>
          )}
        </Flex>

        <Flex
          justifyContent={"center"}
          background='linear-gradient(90deg, rgba(235,242,248,1) 0%, rgba(182,217,245,1) 100%)'
          pt={60}
          pb={40}
          mt={isMobileDevice ? 40 : 20}
        >
          <Box w={isMobileDevice ? "80vw" : "70vw"}>
            <Heading
              textAlign={"center"}
              fontWeight={"700"}
              fontSize={{ sm: "24px", lg: "54px", xl: "64px" }}
              mt={isMobileDevice ? 20 : undefined}
            >
              The Decision Makers
            </Heading>

            {isMobileDevice ? (
              <Text mb={10} mt={5} fontWeight={"700"} fontSize={"14px"}>
                Multichainz direction, future, and present improvements are
                determined in a decentralized way by X token holders.
                Multichainz governance model is unique since every relevant
                ecosystem stakeholder is involved in the proposal and voting
                process
              </Text>
            ) : (
              <Heading
                py={10}
                fontSize={{ lg: "20px", xl: "28px" }}
                fontWeight={"700"}
                textAlign='center'
              >
                Multichainz direction, future, and present improvements are
                determined in a <br /> decentralized way by X token holders.
                Multichainz governance model is unique since <br /> every
                relevant ecosystem stakeholder is involved in the proposal and
                voting process
              </Heading>
            )}

            <Flex
              flexDirection={isMobileDevice ? "column" : undefined}
              justifyContent={isMobileDevice ? undefined : "space-evenly"}
            >
              <Flex
                py={10}
                px={10}
                cursor='pointer'
                _hover={{
                  bgColor: "#125DDE",
                  color: "#ffffff",
                }}
                bgColor='#ffffff'
                borderRadius={"6px"}
              >
                <Heading
                  fontWeight={"bold"}
                  textAlign='center'
                  fontSize={{ sm: "40px", lg: "20px", xl: "28px" }}
                >
                  Founding <br /> Team and <br />
                  Developers
                </Heading>
              </Flex>

              <Flex
                cursor='pointer'
                _hover={{
                  bgColor: "#125DDE",
                  color: "#ffffff",
                }}
                py={6}
                px={10}
                bgColor='#ffffff'
                borderRadius={"6px"}
                alignItems='center'
                mt={isMobileDevice ? 4 : undefined}
              >
                <Heading
                  textAlign={"center"}
                  fontSize={{ sm: "40px", lg: "20px", xl: "28px" }}
                  fontWeight={"bold"}
                >
                  Investors <br /> and Advisors
                </Heading>
              </Flex>

              <Flex
                cursor='pointer'
                _hover={{
                  bgColor: "#125DDE",
                  color: "#ffffff",
                }}
                px={10}
                py={10}
                bgColor='#ffffff'
                borderRadius={"6px"}
                alignItems='center'
                mt={isMobileDevice ? 4 : undefined}
              >
                <Heading
                  textAlign={"center"}
                  fontSize={{ sm: "40px", lg: "20px", xl: "28px" }}
                  fontWeight={"bold"}
                >
                  Community <br /> Members
                </Heading>
              </Flex>

              <Flex
                cursor='pointer'
                _hover={{
                  bgColor: "#125DDE",
                  color: "#ffffff",
                }}
                py={6}
                px={10}
                bgColor='#ffffff'
                borderRadius={"6px"}
                alignItems='center'
                mt={isMobileDevice ? 4 : undefined}
              >
                <Heading
                  textAlign={"center"}
                  fontSize={{ sm: "40px", lg: "20px", xl: "28px" }}
                  fontWeight={"bold"}
                >
                  Ecosystem <br /> Partners
                </Heading>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex
        // background='radial-gradient(237.97% 471.1% at 108.54% -6.09%, #49A8FC 0%, #0C56DB 100%)'
        background='linear-gradient(39deg, rgba(73, 168, 252, 1) 0%, rgba(12, 86, 219, 1) 100%)'
        bgColor={"#0C56DB"}
        justifyContent={"center"}
      >
        <Box w={{ sm: "80vw", lg: "70vw", xl: "60vw" }} py={20}>
          <Heading
            color='white'
            textAlign={"center"}
            fontSize={{ sm: "24px", lg: "54px", xl: "64px" }}
            fontWeight='700'
          >
            Submit a Proposal
          </Heading>

          <Text
            mb={10}
            fontSize={{ sm: "16px", lg: "18px", xl: "20px" }}
            textAlign={"center"}
            color='white'
          >
            The DAO Process to submit a proposal is easy and intuitive, allowing
            everyone to submit any proposal at any time
          </Text>

          <Flex color='white' flexDirection={"column"} alignItems='center'>
            <Flex
              borderRadius={"20px"}
              background='linear-gradient(90deg, rgba(255,255,255,0.14) 0%, rgba(75,115,255,0.15) 77.78%)'
              px={6}
              py={8}
              border='1px solid rgba(255, 255, 255, 0.2)'
              alignItems={"center"}
              w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
            >
              <Text
                mr={5}
                fontSize={{ sm: "60px", lg: "70px", xl: "80px" }}
                fontWeight='700'
              >
                1
              </Text>

              <Flex flexDirection={"column"}>
                <Heading
                  fontSize={{ sm: "24px", lg: "28px", xl: "36px" }}
                  fontWeight='bold'
                >
                  Sign Up to Forum
                </Heading>
                <Text
                  fontWeight={"500"}
                  fontSize={{ sm: "16px", lg: "18px", xl: "24px" }}
                >
                  Create an account on our forum and get <br />
                  approved to propose and comment in the interface
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={5}
              borderRadius={"20px"}
              background='linear-gradient(90deg, rgba(255,255,255,0.14) 0%, rgba(75,115,255,0.15) 77.78%)'
              px={6}
              py={8}
              border='1px solid rgba(255, 255, 255, 0.2)'
              alignItems={"center"}
              w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
            >
              <Text
                mr={5}
                fontSize={{ sm: "60px", lg: "70px", xl: "80px" }}
                fontWeight='700'
              >
                2
              </Text>

              <Flex flexDirection={"column"}>
                <Heading
                  fontSize={{ sm: "24px", lg: "28px", xl: "36px" }}
                  fontWeight='bold'
                >
                  Submit a Forum Proposal
                </Heading>
                <Text
                  fontWeight={"500"}
                  fontSize={{ sm: "16px", lg: "18px", xl: "24px" }}
                >
                  Upload your proposal for improvement or suggestion to <br />{" "}
                  the forum and receive feedback and community interest
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={5}
              borderRadius={"20px"}
              background='linear-gradient(90deg, rgba(255,255,255,0.14) 0%, rgba(75,115,255,0.15) 77.78%)'
              px={6}
              py={8}
              border='1px solid rgba(255, 255, 255, 0.2)'
              alignItems={"center"}
              w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
            >
              <Text
                mr={5}
                fontSize={{ sm: "60px", lg: "70px", xl: "80px" }}
                fontWeight='700'
              >
                3
              </Text>

              <Flex flexDirection={"column"}>
                <Heading
                  fontSize={{ sm: "24px", lg: "28px", xl: "36px" }}
                  fontWeight='bold'
                >
                  Create a Snapshot
                </Heading>
                <Text
                  fontWeight={"500"}
                  fontSize={{ sm: "16px", lg: "18px", xl: "24px" }}
                >
                  If the forum interest is big, connect your wallet <br /> to
                  Snapshot, and submit the proposal
                </Text>
              </Flex>
            </Flex>

            <Flex
              mt={5}
              borderRadius={"20px"}
              background='linear-gradient(90deg, rgba(255,255,255,0.14) 0%, rgba(75,115,255,0.15) 77.78%)'
              px={6}
              py={8}
              border='1px solid rgba(255, 255, 255, 0.2)'
              alignItems={"center"}
              w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
            >
              <Text
                mr={5}
                fontSize={{ sm: "60px", lg: "70px", xl: "80px" }}
                fontWeight='700'
              >
                4
              </Text>

              <Flex flexDirection={"column"}>
                <Heading
                  fontSize={{ sm: "24px", lg: "28px", xl: "36px" }}
                  fontWeight='bold'
                >
                  Sign Up to Forum
                </Heading>
                <Text
                  fontWeight={"500"}
                  fontSize={{ sm: "16px", lg: "18px", xl: "24px" }}
                >
                  Once approved in Snapshot, create a Github request <br /> for
                  the proposal to be voted by all MTZ token holders
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Heading
            color='white'
            mt={20}
            fontSize={isMobileDevice ? "24px" : "30px"}
            fontWeight='700'
            mb={10}
            textAlign={isMobileDevice ? "center" : undefined}
          >
            About MultichainZ Governance
          </Heading>

          <Flex
            flex={1}
            justifyContent={isMobileDevice ? undefined : "space-between"}
            flexDirection={isMobileDevice ? "column" : undefined}
          >
            <Flex flex={0.24}>
              <GovernanceCard
                bottomText='Go to Forum'
                title='Our Forum'
                text={
                  <Text fontSize={"14px"} opacity={0.7}>
                    Visit our forum to know and engage with active proposals and
                    its categories
                  </Text>
                }
              />
            </Flex>

            <Flex flex={0.24} mt={isMobileDevice ? 4 : undefined}>
              <GovernanceCard
                bottomText='Go to Guide'
                title='Proposals'
                text={
                  <Text fontSize={"14px"} opacity={0.7}>
                    Read our process to submit proposals to our DAO and learn
                    its guidelines
                  </Text>
                }
              />
            </Flex>

            <Flex flex={0.24} mt={isMobileDevice ? 4 : undefined}>
              <GovernanceCard
                bottomText='Go to Manual'
                title='Voting'
                text={
                  <Text fontSize={"14px"} opacity={0.7}>
                    Learn more about voting processes, vote delegation, and vote
                    types
                  </Text>
                }
              />
            </Flex>

            <Flex flex={0.24} mt={isMobileDevice ? 4 : undefined}>
              <GovernanceCard
                bottomText='Go to FAQs'
                title='FAQs'
                text={
                  <Text fontSize={"14px"} opacity={0.7}>
                    Solve any questions you have about our governance model and
                    process
                  </Text>
                }
              />
            </Flex>
          </Flex>

          {/* {isMobileDevice ? (
            <Flex mt={20}>
              <Img src={join.src} />
            </Flex>
          ) : ( */}
          <Flex justifyContent={"center"}>
            <Flex
              pl={isMobileDevice ? 2 : 4}
              border='1px solid rgba(255, 255, 255, 0.3)'
              borderLeftRadius={"12px"}
              alignItems={"center"}
              justifyContent='space-between'
              mt={40}
              color='white'
              w={{ sm: "100%", lg: "70vw", xl: "60vw" }}
              boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.12)"}
              flex={!isMobileDevice ? undefined : 1}
            >
              <Flex
                flex={!isMobileDevice ? undefined : 0.6}
                flexDirection={"column"}
                py={4}
              >
                <Heading
                  fontWeight={"700"}
                  fontSize={isMobileDevice ? "14px" : "18px"}
                  mb={2}
                >
                  Multichainz DAO Grants
                </Heading>
                {isMobileDevice ? (
                  <Text
                    // color='rgba(255, 255, 255, 0.8)'
                    fontSize={isMobileDevice ? "9px" : "12px"}
                  >
                    If your startup or company has a proposal to
                    advance Institutional or Real-World Asset on-chain lending,
                    our DAO Grant program is interested to fund your idea.
                  </Text>
                ) : (
                  <Text
                    color='rgba(255, 255, 255, 0.8)'
                    fontSize={{ lg: "12px", xl: "14px" }}
                  >
                    If your startup or company has a proposal to
                    advance Institutional or Real-World Asset on-chain lending,
                    our DAO Grant program is interested to fund your idea.
                  </Text>
                )}
              </Flex>

              <Flex
                flex={!isMobileDevice ? undefined : 0.4}
                position={"relative"}
                h='100%'
                w='100%'
              >
                <Img
                  src={isMobileDevice ? comingsoonmobile.src : comingsoon.src}
                  w='100%'

                  // h='100px'
                />
                <Flex
                  borderRadius='4px'
                  top={"40%"}
                  right={"10%"}
                  bgColor='black'
                  px={4}
                  py={2}
                  position={"absolute"}
                >
                  <Text fontSize={{ sm: "9px", lg: "14px", xl: "14px" }}>
                    COMING SOON
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          {/* )} */}

          <Flex justifyContent={"center"} pt={20}>
            <Flex
              py={{ sm: 14, lg: 14, xl: 14 }}
              justifyContent={"space-between"}
              w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
              backdropFilter={"blur(20px)"}
              flexDirection={isMobileDevice ? "column" : undefined}
              alignItems='center'
              border='1px solid rgba(255, 255, 255, 0.3)'
              px={12}
              borderRadius='18px'
              boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.12)"}
            >
              <Heading
                fontSize={{ sm: "30px", lg: "32px", xl: "36px" }}
                fontWeight='bold'
                color='white'
              >
                Audited and <br /> Verified by
              </Heading>
              <Flex
                flexDirection={isMobileDevice ? "column" : undefined}
                border='1px solid rgba(255, 255, 255, 0.12)'
                py={4}
                borderRadius='8px'
                px={4}
              >
                <Flex
                  _hover={{
                    border: "2px solid white",
                    boxShadow: "-4px 8px 9px 0px rgba(0, 0, 0, 0.45)",
                  }}
                  cursor='pointer'
                  alignItems={"center"}
                  justifyContent='center'
                  w={isMobileDevice ? "200px" : undefined}
                  // py={1}
                  h='60px'
                  px={2}
                  bgColor='black'
                  borderRadius={"18px"}
                  border='2px solid black'
                >
                  <Img w='150px' h='30px' src={halborn.src} />
                </Flex>
                <Flex
                  _hover={{
                    border: "2px solid white",
                    boxShadow: "-4px 8px 9px 0px rgba(0, 0, 0, 0.45)",
                  }}
                  cursor='pointer'
                  alignItems={"center"}
                  justifyContent='center'
                  // py={1}
                  w={isMobileDevice ? "200px" : undefined}
                  h='60px'
                  px={2}
                  bgColor='black'
                  borderRadius={"18px"}
                  mx={isMobileDevice ? 0 : 5}
                  my={isMobileDevice ? 5 : 0}
                  border='2px solid black'
                >
                  <Img w='150px' h='40px' src={peckshield.src} />
                </Flex>
                <Flex
                  _hover={{
                    border: "2px solid white",
                    boxShadow: "-4px 8px 9px 0px rgba(0, 0, 0, 0.45)",
                  }}
                  cursor='pointer'
                  alignItems={"center"}
                  justifyContent='center'
                  // py={1}
                  w={isMobileDevice ? "200px" : undefined}
                  h='60px'
                  px={2}
                  bgColor='black'
                  borderRadius={"18px"}
                  border='2px solid black'
                >
                  <Img w='150px' h='30px' src={quillhash.src} />
                </Flex>
              </Flex>
            </Flex>{" "}
          </Flex>
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
}
