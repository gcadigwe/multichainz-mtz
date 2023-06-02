import BorrowLend from "@/components/Landing2/Cards/BorrowPools";
import LendingInfoCards from "@/components/Landing2/Cards/LendingInfoCards";
import Navbar from "@/components/Landing2/Navbar";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import lendingbg from "../../assets/lendingbg.png";
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
import inactivefantom from "../../assets/svg/inactivefantom.svg";
import inactivepolygon from "../../assets/svg/inactivepolygon.svg";
import inactiveavalanche from "../../assets/svg/inactiveavalance.svg";
import inactiveoptimism from "../../assets/svg/inactiveoptimism.svg";
import quillhash from "../../assets/svg/quickshill.svg";
import Footer from "@/components/Footer";

export default function Landing2() {
  return (
    <Box>
      <Box position={"relative"}>
        <Flex justifyContent={"center"}>
          <Navbar />
        </Flex>

        <Flex
          w='100%'
          mt={40}
          position={"absolute"}
          alignItems='center'
          flexDirection={"column"}
        >
          <Text
            // lineHeight={"1"}
            textAlign={"center"}
            fontWeight={"900"}
            fontSize='60px'
          >
            The Institutional Cross-Chain <br /> Lending Solution
          </Text>
          <Text fontSize={"20px"}>
            Bringing real-life use cases to on-chain lending
          </Text>

          <Flex
            mt={20}
            px={5}
            border={"1px solid white"}
            borderRadius='6px'
            backdropFilter={"blur(76px)"}
          >
            <Flex flexDirection={"column"} alignItems='center'>
              <Text fontSize='60px' fontWeight={"500"}>
                $X
              </Text>
              <Text fontSize={"30px"}>Total Collateral</Text>
            </Flex>

            <Flex mx={10} flexDirection={"column"} alignItems='center'>
              <Text fontSize='60px' fontWeight={"500"}>
                $X
              </Text>
              <Text fontSize={"30px"}>Total Borrowing</Text>
            </Flex>

            <Flex flexDirection={"column"} alignItems='center'>
              <Text fontSize='60px' fontWeight={"500"}>
                $X
              </Text>
              <Text fontSize={"30px"}>Total Loans</Text>
            </Flex>
          </Flex>
        </Flex>
        <Img w='100vw' src={lendingbg.src} />
      </Box>
      <Box
        backdropFilter={"blur(157)"}
        background='linear-gradient(90deg, rgba(241,247,252,1) 0%, rgba(218,237,253,1) 40%)'
      >
        <Flex justifyContent={"center"}>
          <Box w='70vw'>
            <Flex flexDirection={"column"}>
              <Text fontSize={"40px"} fontWeight='700'>
                Lend and Borrow{" "}
              </Text>
              <Img src={underline.src} w='350px' />
              <Text fontSize={"40px"} fontWeight='700'>
                in Multiple Chains
              </Text>
            </Flex>

            <Flex mt={10} justifyContent='space-between'>
              <BorrowLend />
              <Flex mx={5}>
                <BorrowLend />
              </Flex>
              <BorrowLend />
            </Flex>

            <Flex mt={5} justifyContent='space-between'>
              <BorrowLend />
              <Flex mx={5}>
                <BorrowLend />
              </Flex>
              <BorrowLend />
            </Flex>
          </Box>
        </Flex>

        <Flex justifyContent={"center"}>
          <Box w='70vw'>
            <Text pt={32} fontSize={"40px"} fontWeight='700' textAlign='center'>
              On-Chain lending available for all Institutions
            </Text>
            <Flex mt={10} justifyContent={"space-between"}>
              <LendingInfoCards
                img={crosschainintegration.src}
                text={
                  <Text fontSize={"20px"} fontWeight='600'>
                    Secure Cross-chain <br /> Integration
                  </Text>
                }
              />

              <Flex mx={5}>
                <LendingInfoCards
                  img={riskmanagement.src}
                  text={
                    <Text fontSize={"20px"} fontWeight='600'>
                      Risk-Managing <br /> Borrowing Mechanism
                    </Text>
                  }
                />
              </Flex>

              <LendingInfoCards
                img={capitalefficient.src}
                text={
                  <Text fontSize={"20px"} fontWeight='600'>
                    Capital-Efficient <br /> Lending Pools
                  </Text>
                }
              />
            </Flex>
          </Box>
        </Flex>

        <Flex justifyContent={"center"}>
          <Box w='70vw'>
            <Text pt={32} fontSize={"40px"} fontWeight='700' textAlign='center'>
              Safe and Efficient Interoperable Lending
            </Text>
            <Flex mt={10} flex={1} justifyContent={"space-between"}>
              <Flex
                position='relative'
                border='1px solid white'
                flex={6}
                flexDirection='column'
                alignItems={"center"}
                pt={5}
                bgColor={"#D3E7F7"}
                borderRadius='12px'
              >
                <Text fontWeight={"700"} fontSize={"20px"}>
                  Compliance
                </Text>

                <Text px={10} mt={10} textAlign={"center"}>
                  Off-chain and on-chain Know-Your-Customer (KYC) process for
                  institutional network participants
                </Text>

                <Img
                  w='50%'
                  src={compliance.src}
                  mt={5}
                  //   position='absolute'
                  //   bottom={0}
                />
              </Flex>

              <Flex
                ml={5}
                flex={4}
                border='1px solid white'
                flexDirection={"column"}
                alignItems='center'
                pt={5}
                bgColor={"#D3E7F7"}
                borderRadius='12px'
              >
                <Text fontWeight={"700"} fontSize={"20px"}>
                  Custody
                </Text>

                <Text mt={10} textAlign={"center"}>
                  Institutional-grade asset custody partners to enhance protocol
                  liquidity security
                </Text>

                <Img w='100px' h='120px' src={custody.src} />
              </Flex>
            </Flex>

            <Flex mt={10} flex={1} justifyContent={"space-between"}>
              <Flex
                mr={5}
                flex={4}
                border='1px solid white'
                flexDirection={"column"}
                alignItems='center'
                pt={5}
                bgColor={"#D3E7F7"}
                borderRadius='12px'
              >
                <Text fontWeight={"700"} fontSize={"20px"}>
                  Security
                </Text>

                <Text px={5} mt={10} textAlign={"center"}>
                  Contract audits and bug bounty program to minimize contract
                  risk
                </Text>

                <Flex mt={5}>
                  <Flex borderRadius={"10px"} py={4} bgColor={"#0C1120"}>
                    <Img src={halborn.src} />
                  </Flex>

                  <Flex borderRadius={"10px"} ml={2} bgColor={"#0C1120"}>
                    <Img src={peckshield.src} />
                  </Flex>
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
              >
                <Text fontWeight={"700"} fontSize={"20px"}>
                  Efficiency
                </Text>

                <Text px={10} mt={10} textAlign={"center"}>
                  Fast, scalable and reliable chain alternatives to decrease
                  transaction costs
                </Text>

                <Img
                  w='50%'
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
            >
              <Text fontWeight={"700"} fontSize={"20px"}>
                Transparency
              </Text>

              <Text px={10} mt={10} textAlign={"center"}>
                Instant and accessible on-chain transaction and liquidity
                verifications
              </Text>

              <Img
                w='50%'
                src={transparency.src}
                mt={5}
                //   position='absolute'
                //   bottom={0}
              />
            </Flex>
          </Box>
        </Flex>

        <Flex
          mt={20}
          justifyContent={"center"}
          background={
            "linear-gradient(90deg, rgba(73,168,252,1) 0%, rgba(12,86,219,1) 100%)"
          }
          position='relative'
        >
          <Flex h={"90vh"}>
            <Text
              // backgroundClip={"text"}
              // fill='transparent'

              className={styles.text}
              fontSize={"100px"}
              fontWeight='bold'
              textAlign={"center"}
            >
              WEB3 CRYPTO WALLET <br /> LENDING STAKING <br /> NFT CONTRACT
              TOKENS SECURITY
            </Text>

            <Flex
              position={"absolute"}
              flexDirection='column'
              alignItems={"center"}
              w='100%'
              pt={10}
            >
              <Text fontSize={"36px"} fontWeight='700' color='white'>
                Instant Support for Institutions
              </Text>

              <Text
                fontSize={"26px"}
                fontWeight='700'
                color='white'
                textAlign={"center"}
                my={10}
              >
                If your institution wants support to lend  off-chain,
                <br /> Multichainz offers multiple deposit alternatives aside
                from wallets.
              </Text>

              <Button
                background={
                  "linear-gradient(90deg, rgba(225,241,255,1) 0%, rgba(208,230,255,1) 100%)"
                }
                color='#125EDF'
              >
                Get Support
              </Button>

              <Box
                // background={
                //   "linear-gradient(90deg, rgba(73,168,252,1) 0%, rgba(12,86,219,1) 100%)"
                // }

                border='0.5px solid white'
                backdropFilter={"blur(76px)"}
                px={5}
                py={5}
                mt={10}
                borderRadius='6px'
              >
                <Text
                  fontSize={"26px"}
                  fontWeight='700'
                  color='white'
                  textAlign={"center"}
                  mb={10}
                >
                  Partners, integrators, and protocols that collaborate <br />
                  with Multichainz continue to grow
                </Text>

                <Flex justifyContent={"center"}>
                  <Flex alignItems='center' flexDirection={"column"}>
                    <Img w='30px' h='30px' src={chainlinklogo.src} />
                    <Text fontWeight={"700"} color='white'>
                      Chainlink
                    </Text>
                  </Flex>
                  <Flex mx={20} alignItems='center' flexDirection={"column"}>
                    <Img w='30px' h='30px' src={gemini.src} />
                    <Text textAlign={"center"} fontWeight={"700"} color='white'>
                      Gemini <br /> Finance
                    </Text>
                  </Flex>
                  <Flex flexDirection={"column"} alignItems='center'>
                    <Img w='30px' h='30px' src={supra.src} />
                    <Text textAlign={"center"} fontWeight={"700"} color='white'>
                      Supra <br /> Oracles
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          background={
            "linear-gradient(90deg, rgba(73,168,252,1) 0%, rgba(12,86,219,1) 100%)"
          }
          justifyContent={"center"}
        >
          <Box pb={10} w='70vw'>
            <Text fontWeight='700' color={"#ffffff"} mb={4}>
              Supported Networks
            </Text>

            <Flex flexWrap={"wrap"} justifyContent='center'>
              <Img w='150px' mr={4} src={activebinance.src} />
              <Img w='150px' src={inactiveethereum.src} />
              <Img w='150px' mx={4} src={inactivefantom.src} />
              <Img w='150px' src={inactivepolygon.src} />
              <Img w='150px' mx={4} src={inactiveavalanche.src} />
              <Img w='150px' src={inactiveoptimism.src} />
            </Flex>

            <Flex
              py={10}
              mt={20}
              justifyContent={"space-between"}
              w={"70vw"}
              backdropFilter={"blur(20px)"}
              //   flexDirection={isMobileDevice ? "column" : undefined}
              alignItems='center'
              border='1px solid rgba(255, 255, 255, 0.12)'
              px={5}
            >
              <Text fontSize={"30px"} fontWeight='bold' color='white'>
                Audited and <br /> Verified by
              </Text>
              <Flex
                // flexDirection={isMobileDevice ? "column" : undefined}
                border='1px solid rgba(255, 255, 255, 0.12)'
                py={2}
                px={2}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent='center'
                  //   w={isMobileDevice ? "200px" : undefined}
                  // py={1}
                  h='60px'
                  px={2}
                  bgColor='black'
                  borderRadius={"18px"}
                >
                  <Img w='150px' h='30px' src={halborn.src} />
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent='center'
                  // py={1}
                  //   w={isMobileDevice ? "200px" : undefined}
                  h='60px'
                  px={2}
                  bgColor='black'
                  borderRadius={"18px"}
                  mx={5}
                  //   my={isMobileDevice ? 5 : 0}
                >
                  <Img w='150px' h='40px' src={peckshield.src} />
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent='center'
                  // py={1}
                  //   w={isMobileDevice ? "200px" : undefined}
                  h='60px'
                  px={2}
                  bgColor='black'
                  borderRadius={"18px"}
                >
                  <Img w='150px' h='30px' src={quillhash.src} />
                </Flex>
                {/* <Img src={peckshield.src} />
                <Img src={quillhash.src} /> */}
              </Flex>
            </Flex>
          </Box>
        </Flex>

        <Footer />
      </Box>
    </Box>
  );
}
