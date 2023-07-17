import BorrowLend from "@/components/Landing2/Cards/BorrowPools";
import LendingInfoCards from "@/components/Landing2/Cards/LendingInfoCards";
import Navbar from "@/components/Landing2/Navbar";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Img,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import lendingbg from "../../assets/lendingbg.png";
import mobilelendingbg from "../../assets/mobilelendingbg.png";
import underline from "../../assets/svg/underline.svg";
import capitalefficient from "../../assets/capitalefficient.png";
import crosschainintegration from "../../assets/crosschainintegration.png";
import riskmanagement from "../../assets/riskmanagement.png";
import compliance from "../../assets/svg/compliance.svg";
import custody from "../../assets/svg/custody.svg";
import efficiency from "../../assets/svg/efficiency.svg";
import transparency from "../../assets/svg/transparency.svg";
import halborn from "../../assets/svg/halborn.svg";
import peckshield from "../../assets/svg/peckshield.svg";
import styles from "../landing1/style.module.css";
import chainlinklogo from "../../assets/svg/chainlinklogo.svg";
import gemini from "../../assets/svg/gemini.svg";
import supra from "../../assets/svg/supra.svg";
import activebinance from "../../assets/svg/activebinance.svg";
import inactiveethereum from "../../assets/svg/inactiveethereum.svg";
import inactivearbitrum from "../../assets/svg/arbitrum.svg";
import inactivepolygon from "../../assets/svg/inactivepolygon.svg";
import inactiveavalanche from "../../assets/svg/inactiveavalance.svg";
import inactiveoptimism from "../../assets/svg/inactiveoptimism.svg";
import quillhash from "../../assets/svg/quickshill.svg";
import Footer from "@/components/Footer";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

import web3label from "../../assets/svg/web3label.svg";
import SupportedNetwork from "@/components/Landing2/SupportedNetworks";
import AnimatedPolygon from "@/components/Landing1/AnimatedPolygons";

export default function Landing2() {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const [currentCard, setcurrentCard] = useState(0);
  const lendingInfocard1 = useRef(null);
  const lendingInfocard2 = useRef(null);
  const lendingInfocard3 = useRef(null);

  const cardsToRef: any = {
    "1": lendingInfocard1,
    "2": lendingInfocard2,
    "3": lendingInfocard3,
  };

  const handleScrollForward = () => {
    if (currentCard !== 3) {
      console.log(cardsToRef[currentCard + 1]);
      cardsToRef[currentCard + 1]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      console.log("setting");

      setcurrentCard((prev) => prev + 1);
    }
  };

  const handleScrollBack = () => {
    if (currentCard !== 0) {
      cardsToRef[currentCard - 1]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      setcurrentCard((prev) => prev - 1);
    }
  };

  const width = { sm: "80vw", md: "70vw", lg: "70vw", xl: "70vw" };
  return (
    <Box color='black'>
      <Box position={"relative"}>
        <Flex justifyContent={"center"}>
          <Navbar />
        </Flex>

        <AnimatedPolygon />

        <Flex
          w='100%'
          // h='90vh'
          h='100%'
          position={"absolute"}
          alignItems='center'
          flexDirection={"column"}
          justifyContent={isMobileDevice ? undefined : "center"}

          // mb={60}
        >
          <Flex
            mb={isMobileDevice ? undefined : 40}
            mt={isMobileDevice ? 40 : undefined}
            flexDirection={"column"}
            alignItems='center'
          >
            <Heading
              textAlign={"center"}
              fontWeight={"900"}
              fontSize={{ sm: "40px", lg: "72px", xl: "80px" }}
            >
              The Institutional Cross-Chain <br /> Lending Solution
            </Heading>
            <Text
              textAlign={isMobileDevice ? "center" : undefined}
              mt={isMobileDevice ? 10 : undefined}
              fontSize={{ sm: "20px", lg: "24px", xl: "30px" }}
              px={isMobileDevice ? 5 : undefined}
            >
              Bringing real-life use cases to on-chain lending
            </Text>
          </Flex>
          <Flex
            // mx={isMobileDevice ? 10 : 0}
            boxShadow={"0px 3px 38px 0px rgba(0, 7, 72, 0.3)"}
            mx={5}
            border='1px solid white'
            mt={isMobileDevice ? 20 : undefined}
            px={{ sm: 2, lg: 10, xl: 10 }}
            py={{ sm: 4, lg: 6, xl: 10 }}
            // border={"1px solid white"}
            justifyContent='space-between'
            borderRadius='6px'
            backdropFilter={"blur(20px)"}
            w={{ lg: "850px", xl: "900px" }}
          >
            <Flex flexDirection={"column"} alignItems='center'>
              <Heading
                fontSize={{ sm: "24px", md: "40px", lg: "70px", xl: "70px" }}
                fontWeight={"700"}
              >
                $15k+
              </Heading>
              <Text
                whiteSpace={"nowrap"}
                fontSize={{ sm: "14px", lg: "30px", xl: "30px" }}
              >
                Total Collateral
              </Text>
            </Flex>

            <Flex mx={10} flexDirection={"column"} alignItems='center'>
              <Heading
                fontSize={{ sm: "24px", md: "40px", lg: "70px", xl: "70px" }}
                fontWeight={"700"}
              >
                $10k+
              </Heading>
              <Text
                whiteSpace={"nowrap"}
                fontSize={{ sm: "14px", lg: "30px", xl: "30px" }}
              >
                Total Borrowing
              </Text>
            </Flex>

            <Flex flexDirection={"column"} alignItems='center'>
              <Heading
                fontSize={{ sm: "24px", md: "40px", lg: "70px", xl: "70px" }}
                fontWeight={"700"}
              >
                20k
              </Heading>
              <Text
                whiteSpace={"nowrap"}
                fontSize={{ sm: "14px", lg: "30px", xl: "30px" }}
              >
                Total Loans
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Img
          w='100%'
          // h={isMobileDevice ? "70vh" : undefined}
          src={isMobileDevice ? mobilelendingbg.src : lendingbg.src}
        />
      </Box>
      <Box
        backdropFilter={"blur(157)"}
        background={
          isMobileDevice
            ? undefined
            : "linear-gradient(90deg, rgba(241,247,252,1) 0%, rgba(218,237,253,1) 40%)"
        }
        bgColor='#B6D9F5'
      >
        <Flex justifyContent={"center"}>
          <Box w={width}>
            <Flex flexDirection={"column"}>
              <Text
                fontSize={isMobileDevice ? "30px" : "40px"}
                fontWeight='700'
              >
                Lend and Borrow{" "}
              </Text>
              <Img
                display={isMobileDevice ? "none" : undefined}
                src={underline.src}
                w='350px'
              />
              <Text
                fontSize={isMobileDevice ? "30px" : "40px"}
                fontWeight='700'
              >
                in Multiple Chains
              </Text>
            </Flex>

            <Flex
              mt={10}
              flexDirection={isMobileDevice ? "column" : undefined}
              justifyContent={isMobileDevice ? "center" : "space-between"}
              flex={1}
            >
              <BorrowLend lendingAPY={5} borrowAPY={10} />
              <BorrowLend lendingAPY={20} borrowAPY={13} />
              <BorrowLend lendingAPY={12} borrowAPY={17} />
            </Flex>

            <Flex
              mt={isMobileDevice ? undefined : 6}
              flexDirection={isMobileDevice ? "column" : undefined}
              justifyContent={isMobileDevice ? "center" : "space-between"}
              flex={1}
            >
              <BorrowLend lendingAPY={8} borrowAPY={13} />
              <BorrowLend lendingAPY={10} borrowAPY={23} />
              <BorrowLend lendingAPY={19} borrowAPY={27} />
            </Flex>
          </Box>
        </Flex>

        <Flex justifyContent={"center"}>
          <Box w={width}>
            <Heading
              pt={32}
              fontSize={isMobileDevice ? "30px" : "40px"}
              fontWeight='700'
              textAlign='center'
            >
              On-Chain lending available for all Institutions
            </Heading>
            <Flex
              mt={20}
              w={isMobileDevice ? "80vw" : "70vw"}
              flexDirection={"column"}
              display={isMobileDevice ? undefined : "none"}
            >
              <Flex justifyContent={"flex-end"}>
                <Flex
                  cursor={"pointer"}
                  bgColor={"#F5F5F5"}
                  p={2}
                  borderRadius='6px'
                  mr={4}
                  onClick={() => handleScrollBack()}
                >
                  <ChevronLeftIcon />
                </Flex>

                <Flex
                  cursor={"pointer"}
                  bgColor={"#F5F5F5"}
                  p={2}
                  borderRadius='6px'
                  onClick={() => handleScrollForward()}
                >
                  <ChevronRightIcon />
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex justifyContent={"center"}>
          <Box w={width}>
            <Flex
              // border='1px solid red'
              mt={isMobileDevice ? 5 : 10}
              w={isMobileDevice ? "100%" : undefined}
              overflowX={isMobileDevice ? "hidden" : undefined}
              flex={isMobileDevice ? undefined : 1}
              justifyContent={isMobileDevice ? undefined : "space-between"}
              py={isMobileDevice ? undefined : 10}
              px={isMobileDevice ? undefined : 4}
            >
              <Flex flex={0.3} ref={lendingInfocard1}>
                <LendingInfoCards
                  // ref={lendingInfocard1}
                  img={crosschainintegration.src}
                  text={
                    <Text fontSize={"20px"} fontWeight='600'>
                      Secure Cross-chain Integration
                    </Text>
                  }
                />
              </Flex>

              <Flex ref={lendingInfocard2} flex={0.3}>
                <LendingInfoCards
                  // ref={lendingInfocard2}
                  img={riskmanagement.src}
                  text={
                    <Text fontSize={"20px"} fontWeight='600'>
                      Risk-Managing Borrowing Mechanism
                    </Text>
                  }
                />
              </Flex>

              <Flex ref={lendingInfocard3} flex={0.3}>
                <LendingInfoCards
                  // ref={lendingInfocard3}
                  img={capitalefficient.src}
                  text={
                    <Text fontSize={"20px"} fontWeight='700'>
                      Capital-Efficient Lending Pools
                    </Text>
                  }
                />
              </Flex>
            </Flex>
          </Box>
        </Flex>

        <Flex justifyContent={"center"}>
          <Box w={width} pb={20}>
            <Text
              pt={32}
              fontSize={isMobileDevice ? "30px" : "40px"}
              fontWeight='700'
              textAlign='center'
            >
              Safe and Efficient Interoperable Lending
            </Text>
            <Flex
              mt={10}
              flex={isMobileDevice ? undefined : 1}
              flexDirection={isMobileDevice ? "column" : undefined}
              justifyContent={isMobileDevice ? "center" : "space-between"}
            >
              <Flex
                boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.12)"}
                position='relative'
                border='1px solid white'
                flex={isMobileDevice ? undefined : 6}
                flexDirection='column'
                alignItems={"center"}
                pt={5}
                bgColor={"#D3E7F7"}
                borderRadius='12px'
              >
                <Heading
                  fontWeight={"700"}
                  fontSize={{ sm: "20px", lg: "24px", xl: "30px" }}
                >
                  Compliance
                </Heading>

                <Text
                  fontSize={{ sm: "16px", lg: "18px", xl: "20px" }}
                  px={10}
                  mt={10}
                  textAlign={"center"}
                >
                  Off-chain and on-chain Know-Your-Customer (KYC) process for
                  institutional network participants
                </Text>

                <Img
                  w={isMobileDevice ? "80%" : "50%"}
                  src={compliance.src}
                  mt={5}
                  //   position='absolute'
                  //   bottom={0}
                />
              </Flex>

              <Flex
                ml={isMobileDevice ? undefined : 5}
                flex={isMobileDevice ? undefined : 4}
                border='1px solid white'
                flexDirection={"column"}
                alignItems='center'
                pt={5}
                bgColor={"#D3E7F7"}
                borderRadius='12px'
                mt={isMobileDevice ? 10 : undefined}
                boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.12)"}
              >
                <Heading
                  fontWeight={"700"}
                  fontSize={{ sm: "20px", lg: "24px", xl: "30px" }}
                >
                  Custody
                </Heading>

                <Text
                  fontSize={{ sm: "16px", lg: "18px", xl: "20px" }}
                  my={10}
                  textAlign={"center"}
                >
                  Institutional-grade asset custody partners to enhance protocol
                  liquidity security
                </Text>

                <Img src={custody.src} />
              </Flex>
            </Flex>

            <Flex
              mt={10}
              flex={isMobileDevice ? undefined : 1}
              flexDirection={isMobileDevice ? "column" : undefined}
              justifyContent={isMobileDevice ? "center" : "space-between"}
            >
              <Flex
                mr={isMobileDevice ? undefined : 5}
                flex={isMobileDevice ? undefined : 4}
                border='1px solid white'
                flexDirection={"column"}
                alignItems='center'
                py={5}
                bgColor={"#D3E7F7"}
                borderRadius='12px'
                boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.12)"}
              >
                <Heading
                  fontWeight={"700"}
                  fontSize={{ sm: "20px", lg: "24px", xl: "30px" }}
                >
                  Security
                </Heading>

                <Text
                  px={5}
                  my={10}
                  fontSize={{ sm: "16px", lg: "18px", xl: "20px" }}
                  textAlign={"center"}
                >
                  Contract audits and bug bounty program to minimize contract
                  risk
                </Text>

                <Flex mt={5} px={isMobileDevice ? 5 : undefined}>
                  <Flex
                    boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.3)"}
                    borderRadius={"10px"}
                    py={4}
                    bgColor={"#0C1120"}
                  >
                    <Img src={halborn.src} />
                  </Flex>

                  <Flex
                    boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.3)"}
                    borderRadius={"10px"}
                    ml={2}
                    bgColor={"#0C1120"}
                  >
                    <Img src={peckshield.src} />
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                position='relative'
                border='1px solid white'
                flex={isMobileDevice ? undefined : 6}
                flexDirection='column'
                alignItems={"center"}
                pt={5}
                bgColor={"#D3E7F7"}
                borderRadius='12px'
                mt={isMobileDevice ? 10 : undefined}
                boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.12)"}
              >
                <Heading
                  fontWeight={"700"}
                  fontSize={{ sm: "20px", lg: "24px", xl: "30px" }}
                >
                  Efficiency
                </Heading>

                <Text
                  px={10}
                  mt={10}
                  fontSize={{ sm: "16px", lg: "18px", xl: "20px" }}
                  textAlign={"center"}
                >
                  Fast, scalable and reliable chain alternatives to decrease
                  transaction costs
                </Text>

                <Img
                  w={isMobileDevice ? "80%" : "50%"}
                  src={efficiency.src}
                  mt={5}
                  //   position='absolute'
                  //   bottom={0}
                />
              </Flex>
            </Flex>

            <Flex
              position='relative'
              border='1px solid white'
              flex={6}
              flexDirection='column'
              alignItems={"center"}
              pt={5}
              bgColor={"#D3E7F7"}
              borderRadius='12px'
              mt={10}
              boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.12)"}
            >
              <Heading
                fontWeight={"700"}
                fontSize={{ sm: "20px", lg: "24px", xl: "30px" }}
              >
                Transparency
              </Heading>

              <Text
                fontSize={{ sm: "16px", lg: "18px", xl: "20px" }}
                px={10}
                mt={10}
                textAlign={"center"}
              >
                Instant and accessible on-chain transaction and liquidity
                verifications
              </Text>

              <Img
                w={isMobileDevice ? "80%" : "50%"}
                src={transparency.src}
                mt={5}
                //   position='absolute'
                //   bottom={0}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Flex
        // mt={20}
        // justifyContent={"center"}
        // mb={20}
        // h='200vh'
        position='relative'
        bg='linear-gradient(90deg, rgba(65,156,247,1) 0%, rgba(42,126,235,1) 100%)'
        // h={{ lg: "200vh" }}
        // border='1px solid #2C80EC'
      >
        {/* <Flex w='100%' border='1px solid green'> */}

        <Flex
          position={isMobileDevice ? undefined : "absolute"}
          // mt={20}
          flexDirection='column'
          alignItems={"center"}
          justifyContent='space-evenly'
          h={isMobileDevice ? undefined : "100%"}
          w={isMobileDevice ? "100vw" : "100%"}
          pt={10}
        >
          <Flex flexDirection='column' alignItems={"center"}>
            <Heading
              textAlign={isMobileDevice ? "center" : undefined}
              fontSize={{ sm: "30px", lg: "54px", xl: "64px" }}
              fontWeight='700'
              color='white'
            >
              Instant Support for Institutions
            </Heading>

            <Heading
              fontSize={{ sm: "20px", lg: "26px", xl: "32px" }}
              fontWeight='700'
              color='white'
              textAlign={"center"}
              my={10}
              px={isMobileDevice ? 2 : undefined}
              w={{ sm: "80vw", lg: "50vw", xl: "40vw" }}
            >
              If your institution wants support to lend off-chain, Multichainz
              offers multiple deposit alternatives aside from wallets.
            </Heading>
            <Button
              background={
                "linear-gradient(90deg, rgba(225,241,255,1) 0%, rgba(208,230,255,1) 100%)"
              }
              w={isMobileDevice ? "80vw" : undefined}
              color='#125EDF'
              _hover={{
                background:
                  "linear-gradient(90deg, rgba(225,241,255,1) 0%, rgba(208,230,255,1) 100%)",
              }}
            >
              Get Support
            </Button>
          </Flex>

          <Flex w='100%' justifyContent={"center"} py={20}>
            <Flex
              py={{ sm: 6, lg: 14, xl: 16 }}
              justifyContent={"space-between"}
              w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
              backdropFilter={"blur(20px)"}
              flexDirection={"column"}
              alignItems={isMobileDevice ? undefined : "center"}
              border='1px solid rgba(255, 255, 255, 0.3)'
              px={5}
              borderRadius='18px'
              boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.12)"}
            >
              <Heading
                fontSize={{ sm: "24px", lg: "26px", xl: "32px" }}
                fontWeight='700'
                // color='white'
                textAlign={isMobileDevice ? undefined : "center"}
                mb={10}
                color={"white"}
              >
                Partners, integrators, and protocols that collaborate <br />
                with Multichainz continue to grow
              </Heading>
              <Flex
                mt={{ sm: 0, lg: 4, xl: 4 }}
                justifyContent={"center"}
                flexDirection={isMobileDevice ? "column" : undefined}
              >
                <Flex
                  alignItems='center'
                  flexDirection={isMobileDevice ? "row" : "column"}
                >
                  <Img
                    w={{ sm: "40px", lg: "60px", xl: "60px" }}
                    h={{ sm: "40px", lg: "60px", xl: "60px" }}
                    src={chainlinklogo.src}
                  />
                  <Text
                    fontSize={{ sm: "26px", lg: "22px", xl: "22px" }}
                    ml={isMobileDevice ? 2 : undefined}
                    fontWeight={"700"}
                    color='white'
                  >
                    Chainlink
                  </Text>
                </Flex>
                {/* <Flex
                  mx={isMobileDevice ? undefined : 40}
                  my={isMobileDevice ? 4 : undefined}
                  alignItems='center'
                  flexDirection={isMobileDevice ? "row" : "column"}
                >
                  <Img
                    w={{ sm: "40px", lg: "60px", xl: "60px" }}
                    h={{ sm: "40px", lg: "60px", xl: "60px" }}
                    src={gemini.src}
                  />
                  {isMobileDevice ? (
                    <Text
                      textAlign={"center"}
                      fontWeight={"700"}
                      color='white'
                      fontSize={"26px"}
                      ml={2}
                    >
                      Gemini Finance
                    </Text>
                  ) : (
                    <Text
                      fontSize={{ sm: "24px", lg: "22px", xl: "22px" }}
                      textAlign={"center"}
                      fontWeight={"700"}
                      color='white'
                    >
                      Gemini <br /> Finance
                    </Text>
                  )}
                </Flex>
                <Flex
                  flexDirection={isMobileDevice ? "row" : "column"}
                  alignItems='center'
                >
                  <Img
                    w={{ sm: "40px", lg: "60px", xl: "60px" }}
                    h={{ sm: "40px", lg: "60px", xl: "60px" }}
                    src={supra.src}
                  />
                  {isMobileDevice ? (
                    <Text
                      textAlign={"center"}
                      fontWeight={"700"}
                      color='white'
                      fontSize={"26px"}
                      ml={2}
                    >
                      Supra Oracles
                    </Text>
                  ) : (
                    <Text
                      textAlign={"center"}
                      fontSize={{ sm: "24px", lg: "22px", xl: "22px" }}
                      fontWeight={"700"}
                      color='white'
                    >
                      Supra <br /> Oracles
                    </Text>
                  )}
                </Flex> */}
              </Flex>
            </Flex>
          </Flex>

          <Flex w='100%' justifyContent={"center"}>
            <Box w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}>
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
                <SupportedNetwork img={inactivearbitrum.src} />
                <SupportedNetwork img={inactivepolygon.src} />
              </Flex>

              <Flex
                justifyContent={isMobileDevice ? "center" : "space-between"}
                flexDirection={isMobileDevice ? "column" : undefined}
                alignItems={isMobileDevice ? "center" : undefined}
                pb={20}
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
            </Box>
          </Flex>
        </Flex>

        {/* </Flex> */}
        <Img
          // aspectRatio={"16/9"}
          // aspectRatio={"auto"}
          display={isMobileDevice ? "none" : undefined}
          w='100%'
          // h={{ lg: "200vh" }}
          src={web3label.src}
        />
      </Flex>

      {/* <Flex
        bg='linear-gradient(90deg, rgba(65,156,247,1) 0%, rgba(42,126,235,1) 100%)'
        // bgColor={"#49a8fc"}
        justifyContent={"center"}
        pt={isMobileDevice ? 20 : 10}
      >
        <Flex pb={10} justifyContent='center'>
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
        </Flex>
      </Flex> */}
      <Footer />
    </Box>
  );
}
