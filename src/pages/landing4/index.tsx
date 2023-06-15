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
import join from "../../assets/join.png";
import backgroundvidpic from "../../assets/backgroundvidpic.png";
import quillhash from "../../assets/svg/quickshill.svg";
import halborn from "../../assets/svg/halborn.svg";
import peckshield from "../../assets/svg/peckshield.svg";
import Footer from "@/components/Footer";

export default function Landing4() {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
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
            <video
              height={"100vh"}
              width='100%'
              muted
              autoPlay
              loop
              src='https://res.cloudinary.com/duzyqi3zj/video/upload/v1686834772/dao_half_vd3zvt.mp4'
            />
          )}

          <Flex
            w='100%'
            top={"40%"}
            position='absolute'
            flexDirection={"column"}
            alignItems='center'
          >
            <Heading
              fontSize={{ sm: "40px", lg: "80px", xl: "100px" }}
              fontWeight='700'
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
              background={
                "linear-gradient(90deg, rgba(73,168,252,1) 0%, rgba(104,172,253,1) 100%)"
              }
            >
              Get Started
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
            <Flex
              top='85%'
              position={"absolute"}
              justifyContent='center'
              w='100%'
            >
              <Flex
                w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
                justifyContent={"center"}
              >
                <Box
                  boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
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
                      <Flex justifyContent={"space-between"}>
                        <Img src={binance.src} />
                        <Img mx={3} src={binance.src} />
                        <Img src={binance.src} />
                        <Divider orientation='vertical' />
                        <Flex mx={3} mb={5} flexDirection={"column"}>
                          <Text fontWeight={"bold"}>Learn more</Text>
                          <Img src={cmc.src} />
                        </Flex>
                        <Img src={coingecko.src} />
                      </Flex>
                    </Box>

                    <Img src={multichainz.src} />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          )}
        </Flex>
        <Flex
          justifyContent={"center"}
          background='linear-gradient(90deg, rgba(235,242,248,1) 0%, rgba(182,217,245,1) 100%)'
          pt={60}
          pb={40}
          mt={isMobileDevice ? 40 : undefined}
        >
          <Box w={isMobileDevice ? "80vw" : "70vw"}>
            <Heading
              textAlign={"center"}
              fontWeight={"700"}
              fontSize={isMobileDevice ? "24px" : "50px"}
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
                mb={10}
                fontSize='16px'
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
                p={6}
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
                  fontSize={isMobileDevice ? "40px" : "20px"}
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
                p={6}
                px={10}
                bgColor='#ffffff'
                borderRadius={"6px"}
                alignItems='center'
                mt={isMobileDevice ? 4 : undefined}
              >
                <Heading
                  textAlign={"center"}
                  fontSize={isMobileDevice ? "40px" : "20px"}
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
                p={6}
                px={10}
                bgColor='#ffffff'
                borderRadius={"6px"}
                alignItems='center'
                mt={isMobileDevice ? 4 : undefined}
              >
                <Heading
                  textAlign={"center"}
                  fontSize={isMobileDevice ? "40px" : "20px"}
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
                p={6}
                px={10}
                bgColor='#ffffff'
                borderRadius={"6px"}
                alignItems='center'
                mt={isMobileDevice ? 4 : undefined}
              >
                <Heading
                  textAlign={"center"}
                  fontSize={isMobileDevice ? "40px" : "20px"}
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
        background='linear-gradient(90deg, rgba(73,168,252,1) 0%, rgba(12,86,219,1) 53%)'
        bgColor={"#0C56DB"}
        justifyContent={"center"}
      >
        <Box w={isMobileDevice ? "80vw" : "70vw"} py={20}>
          <Heading
            color='white'
            textAlign={"center"}
            fontSize={isMobileDevice ? "24px" : "50px"}
            fontWeight='700'
          >
            Submit a Proposal
          </Heading>

          <Text mb={10} textAlign={"center"} color='white'>
            The DAO Process to submit a proposal is easy and intuitive, allowing
            everyone to submit any proposal at any time
          </Text>

          <Flex color='white' flexDirection={"column"}>
            <Flex
              borderRadius={"20px"}
              background='linear-gradient(90deg, rgba(255,255,255,0.14) 0%, rgba(75,115,255,0.15) 77.78%)'
              px={6}
              py={8}
              border='1px solid rgba(255, 255, 255, 0.2)'
              alignItems={"center"}
            >
              <Text mr={5} fontSize={"60px"} fontWeight='700'>
                1
              </Text>

              <Flex flexDirection={"column"}>
                <Heading fontSize={"24px"} fontWeight='bold'>
                  Sign Up to Forum
                </Heading>
                <Text fontWeight={"500"}>
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
            >
              <Text mr={5} fontSize={"60px"} fontWeight='700'>
                2
              </Text>

              <Flex flexDirection={"column"}>
                <Heading fontSize={"24px"} fontWeight='bold'>
                  Submit a Forum Proposal
                </Heading>
                <Text fontWeight={"500"}>
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
            >
              <Text mr={5} fontSize={"60px"} fontWeight='700'>
                3
              </Text>

              <Flex flexDirection={"column"}>
                <Heading fontSize={"24px"} fontWeight='bold'>
                  Create a Snapshot
                </Heading>
                <Text fontWeight={"500"}>
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
            >
              <Text mr={5} fontSize={"60px"} fontWeight='700'>
                4
              </Text>

              <Flex flexDirection={"column"}>
                <Heading fontSize={"24px"} fontWeight='bold'>
                  Sign Up to Forum
                </Heading>
                <Text fontWeight={"500"}>
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

          {isMobileDevice ? (
            <Flex mt={20}>
              <Img src={join.src} />
            </Flex>
          ) : (
            <Flex justifyContent={"center"}>
              <Flex
                pl={isMobileDevice ? 2 : 4}
                border='1px solid rgba(255, 255, 255, 0.2)'
                alignItems={"center"}
                justifyContent='space-between'
                mt={40}
                color='white'
                w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
              >
                <Flex flexDirection={"column"}>
                  <Heading
                    fontWeight={"700"}
                    fontSize={isMobileDevice ? "14px" : "18px"}
                  >
                    Multichainz DAO Grants
                  </Heading>
                  {isMobileDevice ? (
                    <Text fontSize={isMobileDevice ? "10px" : "12px"}>
                      If your startup or company has a proposal to
                      advance Institutional or Real-World Asset on-chain
                      lending, our DAO Grant program is interested to fund your
                      idea.
                    </Text>
                  ) : (
                    <Text fontSize={isMobileDevice ? "10px" : "12px"}>
                      If your startup or company has a proposal to
                      advance Institutional or Real-World Asset on-chain
                      lending, our DAO Grant program is interested to fund your
                      idea.
                    </Text>
                  )}
                </Flex>

                <Flex position={"relative"}>
                  <Img
                    src={comingsoon.src}
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
                    <Text fontSize={"14px"}>COMING SOON</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          )}

          <Flex justifyContent={"center"} pt={20}>
            <Flex
              py={{ sm: 14, lg: 14, xl: 20 }}
              justifyContent={"space-between"}
              w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
              backdropFilter={"blur(20px)"}
              flexDirection={isMobileDevice ? "column" : undefined}
              alignItems='center'
              border='1px solid rgba(255, 255, 255, 0.12)'
              px={5}
              borderRadius='18px'
              boxShadow='0px 0px 40px -14px rgba(0,0,0,0.75)'
            >
              <Heading
                fontSize={{ sm: "30px", lg: "40px", xl: "45px" }}
                fontWeight='bold'
                color='white'
              >
                Audited and <br /> Verified by
              </Heading>
              <Flex
                flexDirection={isMobileDevice ? "column" : undefined}
                border='1px solid rgba(255, 255, 255, 0.12)'
                py={2}
                px={2}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent='center'
                  w={isMobileDevice ? "200px" : undefined}
                  // py={1}
                  h='60px'
                  px={2}
                  bgColor='black'
                  borderRadius={"18px"}
                  cursor='pointer'
                  _hover={{
                    border: "1px solid white",
                  }}
                >
                  <Img w='150px' h='30px' src={halborn.src} />
                </Flex>
                <Flex
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
                  cursor='pointer'
                  _hover={{
                    border: "1px solid white",
                  }}
                >
                  <Img w='150px' h='40px' src={peckshield.src} />
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent='center'
                  // py={1}
                  w={isMobileDevice ? "200px" : undefined}
                  h='60px'
                  px={2}
                  bgColor='black'
                  borderRadius={"18px"}
                  cursor='pointer'
                  _hover={{
                    border: "1px solid white",
                  }}
                >
                  <Img w='150px' h='30px' src={quillhash.src} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
}
