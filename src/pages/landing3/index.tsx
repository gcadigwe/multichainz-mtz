import Navbar from "@/components/Landing3/Navbar";
import PoolCard from "@/components/Landing3/PoolCard";
import YieldFarmInfoCard from "@/components/Landing3/YieldFarmInfoCard";
import {
  Flex,
  Img,
  Box,
  Text,
  Button,
  Input,
  Select,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import flowerbg from "../../assets/flowerbg.png";
import mobileflowerbg from "../../assets/mobileflowerbg.png";
import underline from "../../assets/svg/underline.svg";
import security from "../../assets/svg/security.svg";
import efficiency from "../../assets/svg/landing3efficiency.svg";
import flexibility from "../../assets/svg/flexibility.svg";
import diversification from "../../assets/svg/diversification.svg";
import colorbar from "../../assets/svg/colorbar.svg";
import calculator from "../../assets/calculator.png";
import calculatormobile from "../../assets/calculatormobile.png";
import activebinance from "../../assets/svg/activebinance.svg";
import inactiveethereum from "../../assets/svg/inactiveethereum.svg";
import arbitrum from "../../assets/svg/arbitrum.svg";
import inactivepolygon from "../../assets/svg/inactivepolygon.svg";
import inactiveavalanche from "../../assets/svg/inactiveavalance.svg";
import inactiveoptimism from "../../assets/svg/inactiveoptimism.svg";
import quillhash from "../../assets/svg/quickshill.svg";
import halborn from "../../assets/svg/halborn.svg";
import peckshield from "../../assets/svg/peckshield.svg";
import Footer from "@/components/Footer";
import SupportedNetwork from "@/components/Landing2/SupportedNetworks";
import AnimatedPolygon from "@/components/Landing1/AnimatedPolygons";

export default function Landing3() {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const width = { sm: "80vw", md: "70vw", lg: "70vw", xl: "70vw" };
  return (
    <Box bgColor={"#CDE6FA"} color='black'>
      <Box bgColor={"#CDE6FA"} position={"relative"}>
        <Flex justifyContent={"center"}>
          <Navbar />
        </Flex>

        <AnimatedPolygon earn={true} />

        <Flex justifyContent={"space-between"}>
          <Flex position={"absolute"} justifyContent={"center"} w='100vw'>
            <Flex
              flexDirection={"column"}
              // justifyContent='center'

              h='100vh'
              w={{ sm: "100vw", md: "70vw", lg: "70vw", xl: "70vw" }}
              // w='70vw'
              mt={isMobileDevice ? 40 : 40}
            >
              {isMobileDevice ? (
                <Heading
                  textAlign={"center"}
                  opacity={1}
                  fontSize={"40px"}
                  fontWeight='800'
                >
                  Earn Interest In Multiple Chains
                </Heading>
              ) : (
                <Heading
                  opacity={1}
                  fontSize={{ lg: "60px", xl: "80px" }}
                  fontWeight='700'
                >
                  Earn <br /> In Multiple Chains
                </Heading>
              )}

              {isMobileDevice ? (
                <Text
                  my={10}
                  fontSize={"20px"}
                  textAlign={isMobileDevice ? "center" : undefined}
                  fontWeight={isMobileDevice ? "700" : underline}
                  px={6}
                >
                  The protocol that allows you to earn interest in an easy and
                  interoperable way
                </Text>
              ) : (
                <Text
                  my={10}
                  fontSize={{ lg: "20px", xl: "26px" }}
                  textAlign={isMobileDevice ? "center" : undefined}
                  fontWeight={isMobileDevice ? "700" : underline}
                >
                  The protocol that allows you to earn interest
                  <br />
                  in an easy and interoperable way
                </Text>
              )}

              <Flex
                mt={{ lg: 20, xl: 20 }}
                justifyContent={isMobileDevice ? "center" : "flex-start"}
              >
                <Flex flexDirection={"column"} alignItems='center'>
                  <Flex>
                    <Flex flexDirection='column' alignItems={"center"}>
                      <Flex
                        justifyContent={"center"}
                        // w={{ sm: "60px", lg: "60px", xl: "80px" }}
                        px={2}
                        borderRadius='12px'
                        bgColor='#8CDFD9'
                      >
                        <Heading
                          color={"white"}
                          fontSize={{ sm: "40px", lg: "40px", xl: "48px" }}
                          fontWeight='700'
                        >
                          $100
                        </Heading>
                      </Flex>

                      <Heading
                        mt={4}
                        fontSize={{ sm: "20px", lg: "26px", xl: "28px" }}
                        fontWeight={"700"}
                      >
                        Total Liquidity
                      </Heading>
                    </Flex>

                    <Flex ml={10} flexDirection='column' alignItems={"center"}>
                      <Flex
                        px={2}
                        justifyContent={"center"}
                        // w={{ sm: "60px", lg: "60px", xl: "80px" }}
                        borderRadius='12px'
                        bgColor='#95ADF5'
                      >
                        <Heading
                          color={"white"}
                          fontSize={{ sm: "40px", lg: "40px", xl: "48px" }}
                          fontWeight='700'
                        >
                          $900
                        </Heading>
                      </Flex>

                      <Heading
                        fontSize={{ sm: "20px", lg: "26px", xl: "28px" }}
                        fontWeight={"700"}
                        mt={4}
                      >
                        Total Rewards
                      </Heading>
                    </Flex>
                  </Flex>
                  <Button
                    w={isMobileDevice ? "80vw" : undefined}
                    mt={10}
                    fontSize={{ sm: "14px", lg: "18px", xl: "18px" }}
                    px={{ sm: 0, lg: 8, xl: 10 }}
                    py={{ sm: 4, lg: 6, xl: 6 }}
                    bgColor='#49A8FC'
                    _hover={{
                      bgColor: "#49A8FC",
                    }}
                    color='white'
                  >
                    Start Earning
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex w='100%' justifyContent={"flex-end"}>
            <Img
              w={isMobileDevice ? "100%" : "65%"}
              src={isMobileDevice ? mobileflowerbg.src : flowerbg.src}
            />
          </Flex>
        </Flex>
      </Box>

      <Flex justifyContent={"center"}>
        <Box w={width}>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Flex alignItems={"center"} flexDirection={"column"}>
              <Heading
                fontSize={isMobileDevice ? "30px" : "40px"}
                fontWeight='700'
              >
                Our Pools
              </Heading>
              <Img w='200px' src={underline.src} />
              <Text
                textAlign={"center"}
                fontSize={{ sm: "16px", lg: "18px", xl: "20px" }}
              >
                Provide liquidity and earn interests in Multichainz yield pools
              </Text>
            </Flex>
          </Flex>

          <Flex
            mt={20}
            mb={isMobileDevice ? 0 : 10}
            flexDirection={isMobileDevice ? "column" : undefined}
            justifyContent={"space-between"}
            // h='200px'
          >
            <PoolCard />

            <PoolCard />

            <PoolCard />
          </Flex>

          <Flex
            flexDirection={isMobileDevice ? "column" : undefined}
            justifyContent={"space-between"}
            // h='200px'
          >
            <PoolCard />

            <PoolCard />

            <PoolCard />
          </Flex>

          <Flex mt={40} justifyContent='center'>
            <Heading
              textAlign={isMobileDevice ? "center" : undefined}
              fontSize={isMobileDevice ? "30px" : "40px"}
              mb={isMobileDevice ? 20 : 10}
              fontWeight='700'
            >
              Yield Farming Made Safer and Easier
            </Heading>
          </Flex>

          <Flex
            mt={isMobileDevice ? 0 : 10}
            flexDirection={isMobileDevice ? "column" : undefined}
            justifyContent='space-between'
          >
            <YieldFarmInfoCard
              number={1}
              title={"Get Verified"}
              info={
                <Text textAlign={"center"}>
                  Submit Your KYC verification <br /> and get it approved
                </Text>
              }
            />

            {/* <Box
              // mx={isMobileDevice ? undefined : 2}
              mt={isMobileDevice ? 10 : undefined}
            > */}
            <YieldFarmInfoCard
              number={2}
              title={"Add Liquidity"}
              info={
                <Text textAlign={"center"}>
                  Add any amount of liquidity <br /> into any of our yield pools
                </Text>
              }
            />
            {/* </Box> */}

            {/* <Box
              mr={isMobileDevice ? undefined : 2}
              my={isMobileDevice ? 10 : undefined}
            > */}
            <YieldFarmInfoCard
              number={3}
              title={"Choose Terms"}
              info={
                <Text textAlign={"center"}>
                  Select the time you want to <br /> lock your liquidity for
                </Text>
              }
            />
            {/* </Box> */}

            <YieldFarmInfoCard
              number={4}
              title={"Earn Rewards"}
              info={
                <Text textAlign={"center"}>
                  Redeem your interest rewards <br /> once the locked time ends
                </Text>
              }
            />
          </Flex>

          <Flex mt={10} justifyContent={"center"}>
            <Button
              px={10}
              py={6}
              fontSize={"14px"}
              bgColor='#49A8FC'
              _hover={{
                bgColor: "#49A8FC",
              }}
              color='white'
            >
              Start Now
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Flex mt={40} justifyContent={"center"}>
        <Box w={{ sm: "80vw", md: "70vw", lg: "70vw", xl: "60vw" }}>
          <Heading
            fontSize={isMobileDevice ? "30px" : "40px"}
            textAlign={isMobileDevice ? "center" : undefined}
            fontWeight='700'
          >
            Why Farm <br />
            With Multichainz:
          </Heading>
          <Flex
            flex={1}
            mt={10}
            flexDirection={isMobileDevice ? "column" : undefined}
            justifyContent={"space-around"}
          >
            <Flex>
              <Box
                w={{ sm: "100%", lg: "400px", xl: "460px" }}
                mr={isMobileDevice ? undefined : 40}
                px={8}
                py={6}
                bgColor={"white"}
              >
                <Img w='50px' h='50px' src={security.src} />
                <Heading
                  my={3}
                  fontWeight={"700"}
                  fontSize={{ sm: "24px", lg: "28px", xl: "32px" }}
                >
                  Security
                </Heading>
                <Img src={colorbar.src} />

                <Text mt={3} fontSize={{ sm: "16px", lg: "18px", xl: "22px" }}>
                  MultichainZ has institutional-grade asset custody ensuring
                  high funds security at all times
                </Text>
              </Box>
            </Flex>

            <Flex mt={isMobileDevice ? 10 : undefined}>
              <Box
                w={{ sm: "100%", lg: "400px", xl: "460px" }}
                px={8}
                py={6}
                bgColor={"white"}
              >
                <Img w='50px' h='50px' src={efficiency.src} />
                <Heading
                  fontSize={{ sm: "24px", lg: "28px", xl: "32px" }}
                  my={3}
                  fontWeight={"700"}
                >
                  Efficiency
                </Heading>
                <Img src={colorbar.src} />

                <Text mt={3} fontSize={{ sm: "16px", lg: "18px", xl: "22px" }}>
                  MultichainZ has embedded risk/liquidity efficiency mechanisms
                  to maximize returns
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Flex
            flex={1}
            mt={10}
            flexDirection={isMobileDevice ? "column" : undefined}
            // justifyContent={"space-between"}
            justifyContent={"space-around"}
          >
            <Flex mr={isMobileDevice ? undefined : 40}>
              <Box
                w={{ sm: "100%", lg: "400px", xl: "460px" }}
                px={8}
                py={6}
                bgColor={"white"}
              >
                <Img w='50px' h='50px' src={flexibility.src} />
                <Heading
                  my={3}
                  fontWeight={"700"}
                  fontSize={{ sm: "24px", lg: "28px", xl: "32px" }}
                >
                  Flexibility
                </Heading>
                <Img src={colorbar.src} />

                <Text mt={3} fontSize={{ sm: "16px", lg: "18px", xl: "22px" }}>
                  MultichainZ Gives flexible terms to every type of investors
                  without fixed locking commitments
                </Text>
              </Box>
            </Flex>

            <Flex mt={isMobileDevice ? 10 : undefined}>
              <Box
                w={{ sm: "100%", lg: "400px", xl: "460px" }}
                px={8}
                py={6}
                bgColor={"white"}
              >
                <Img w='50px' h='50px' src={diversification.src} />
                <Heading
                  my={3}
                  fontWeight={"700"}
                  fontSize={{ sm: "24px", lg: "28px", xl: "32px" }}
                >
                  Diversification
                </Heading>
                <Img src={colorbar.src} />

                <Text fontSize={{ sm: "16px", lg: "18px", xl: "22px" }} mt={3}>
                  MultichainZ provides pools in diffferent chains to ensure
                  liquidity diversification and returns
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Flex pt={40} pb={20} justifyContent={"center"}>
        <Box
          w={{ sm: "100vw", md: "70vw", lg: "70vw", xl: "60vw" }}
          h={isMobileDevice ? "80vh" : undefined}
        >
          <Heading
            fontSize={{ sm: "30px", lg: "40px", xl: "48px" }}
            textAlign={isMobileDevice ? "center" : undefined}
            fontWeight='700'
          >
            Calculate Your Potential Rewards
          </Heading>

          <Flex
            mt={10}
            flex={1}
            // flexDirection={isMobileDevice ? "column" : undefined}
            justifyContent={"space-between"}
            position={isMobileDevice ? "relative" : undefined}
          >
            <Img src={isMobileDevice ? calculatormobile.src : calculator.src} />

            {isMobileDevice ? (
              <>
                <Box position={"absolute"} right={0} pr={6}>
                  <Flex pt={5} flexDirection={"column"}>
                    <Flex flexDirection={"column"}>
                      <Text>Amount to lock, USD</Text>
                      <Input bgColor='white' />
                    </Flex>

                    <Flex mt={5} flexDirection={"column"}>
                      <Text>Your Return</Text>
                      <Input bgColor='white' />
                    </Flex>
                  </Flex>

                  <Flex pt={5} flexDirection={"column"}>
                    <Text>Select Farming Pool</Text>
                    <Select
                      fontSize={"14px"}
                      background='linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(148,178,228,1) 100%)'
                    >
                      <option>Farming Pool name</option>
                    </Select>
                  </Flex>

                  <Flex pt={5} flexDirection={"column"}>
                    <Text>Time Period</Text>
                    <Select
                      fontSize={"14px"}
                      background='linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(148,178,228,1) 100%)'
                    >
                      <option>1 week</option>
                    </Select>
                  </Flex>

                  <Flex position={"absolute"} mt={10} left={-100}>
                    <Button
                      w='250px'
                      mt={5}
                      color='white'
                      fontSize={"14px"}
                      bgColor='#49A8FC'
                      _hover={{
                        bgColor: "#49A8FC",
                      }}
                    >
                      Earn Now
                    </Button>
                  </Flex>
                </Box>
              </>
            ) : (
              <>
                <Flex flex={0.3} pt={5} flexDirection={"column"}>
                  <Flex flexDirection={"column"}>
                    <Text
                      fontWeight='700'
                      fontSize={{ lg: "16px", xl: "18px" }}
                      mb={2}
                    >
                      Amount to lock, USD
                    </Text>
                    <Input bgColor='white' />
                  </Flex>

                  <Flex mt={5} flexDirection={"column"}>
                    <Text
                      fontWeight='700'
                      fontSize={{ lg: "16px", xl: "18px" }}
                      mb={2}
                    >
                      Your Return
                    </Text>
                    <Input bgColor='white' />
                  </Flex>

                  <Button
                    mt={5}
                    color='white'
                    fontSize={"14px"}
                    bgColor='#49A8FC'
                    _hover={{
                      bgColor: "#49A8FC",
                    }}
                  >
                    Earn Now
                  </Button>
                </Flex>

                <Flex flex={0.3} pt={5} flexDirection={"column"}>
                  <Text
                    mb={2}
                    fontWeight='700'
                    fontSize={{ lg: "16px", xl: "18px" }}
                  >
                    Select Farming Pool
                  </Text>
                  <Select
                    fontSize={{ lg: "14px", xl: "16px" }}
                    fontWeight='500'
                    background='linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(148,178,228,1) 100%)'
                  >
                    <option>Farming Pool name</option>
                  </Select>
                </Flex>

                <Flex flex={0.3} pt={5} flexDirection={"column"}>
                  <Text
                    mb={2}
                    fontSize={{ lg: "16px", xl: "18px" }}
                    fontWeight='700'
                  >
                    Time Period
                  </Text>
                  <Select
                    fontSize={{ lg: "14px", xl: "16px" }}
                    fontWeight='500'
                    background='linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(148,178,228,1) 100%)'
                  >
                    <option>1 week</option>
                  </Select>
                </Flex>
              </>
            )}
          </Flex>
        </Box>
      </Flex>

      <Flex
        justifyContent={"center"}
        bg='linear-gradient(90deg, rgba(65,156,247,1) 0%, rgba(42,126,235,1) 100%)'
      >
        <Flex
          w={{ sm: "80vw", md: "70vw", lg: "70vw", xl: "60vw" }}
          alignItems={"center"}
          flexDirection='column'
          pt={{ sm: 10, lg: 32, xl: 32 }}
          pb={{ sm: 10, lg: 20, xl: 20 }}
        >
          <Flex flexDirection={"column"}>
            <Heading
              textAlign={"center"}
              fontSize={{ sm: "30px", lg: "50px", xl: "64px" }}
              fontWeight='900'
              color='white'
            >
              Diversify the Capital of Your Company
            </Heading>

            <Heading
              color='white'
              mt={10}
              textAlign={"center"}
              fontSize={{ sm: "16px", lg: "26px", xl: "32px" }}
              fontWeight={"700"}
            >
              Multichainz Yield Farming solution is the perfect alternative to
              low-risk capital investments for companies. Contact us to get
              support for adding liquidity to our pools with or without a
              wallet.
            </Heading>
          </Flex>

          <Flex
            my={10}
            // w={isMobileDevice ? "80%" : undefined}
            justifyContent={"center"}
          >
            <Button
              w={isMobileDevice ? "80vw" : undefined}
              background={
                "linear-gradient(90deg, rgba(225,241,255,1) 0%, rgba(208,230,255,1) 100%)"
              }
              color='#125EDF'
              _hover={{
                bgColor: "#125EDF",
              }}
            >
              Get Support
            </Button>
          </Flex>

          <Flex
            // bgColor={"#49a8fc"}
            justifyContent={"center"}
            pt={isMobileDevice ? 20 : 10}
          >
            <Box
              pb={{ sm: 4, lg: 10, xl: 10 }}
              w={{ sm: "80vw", md: "70vw", lg: "70vw", xl: "60vw" }}
            >
              <Text
                textAlign={isMobileDevice ? "center" : undefined}
                fontWeight='700'
                color={"#ffffff"}
                mb={4}
                fontSize={"18px"}
              >
                Supported Networks
              </Text>

              <Flex
                flexWrap={isMobileDevice ? "nowrap" : "wrap"}
                justifyContent={isMobileDevice ? "center" : "space-between"}
                flexDirection={isMobileDevice ? "column" : undefined}
                alignItems={isMobileDevice ? "center" : undefined}
                my={isMobileDevice ? 0 : 10}
                mt={isMobileDevice ? 6 : undefined}
              >
                <SupportedNetwork img={activebinance.src} />
                <SupportedNetwork img={inactiveethereum.src} />
                <SupportedNetwork img={arbitrum.src} />
                <SupportedNetwork img={inactivepolygon.src} />
              </Flex>

              <Flex
                justifyContent={isMobileDevice ? "center" : "space-between"}
                flexDirection={isMobileDevice ? "column" : undefined}
                alignItems={isMobileDevice ? "center" : undefined}
                pb={{ sm: 6, lg: 20, xl: 20 }}
              >
                <SupportedNetwork img={inactiveavalanche.src} />
                <SupportedNetwork img={inactiveoptimism.src} />

                {!isMobileDevice && (
                  <Img
                    cursor={"pointer"}
                    opacity={0.6}
                    _hover={{
                      opacity: 1,
                    }}
                    w='180px'
                    visibility={"hidden"}
                    // mx={isMobileDevice ? undefined : 4}
                    src={inactiveavalanche.src}
                  />
                )}
                {!isMobileDevice && (
                  <Img
                    cursor={"pointer"}
                    visibility={"hidden"}
                    opacity={0.6}
                    _hover={{
                      opacity: 1,
                    }}
                    w='180px'
                    src={inactiveoptimism.src}
                  />
                )}
              </Flex>

              {/* <Flex justifyContent={"center"}>
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
                </Flex>
              </Flex> */}
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Box>
  );
}
