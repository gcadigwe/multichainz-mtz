import Navbar from "@/components/Landing1/Navbar";
import {
  Box,
  Img,
  Flex,
  Text,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import eclipsebg from "../../assets/svg/elipsebg.svg";
import wallet from "../../assets/svg/wallet.svg";
import crosschain from "../../assets/svg/crosschain.svg";
import institution from "../../assets/svg/institution.svg";
import dao from "../../assets/svg/dao.svg";
import ethereum from "../../assets/svg/ethereum.svg";
import fantom from "../../assets/svg/fantom.svg";
import binance from "../../assets/svg/binance.svg";
import polygon from "../../assets/svg/polygon.svg";
import avalanche from "../../assets/svg/avalanche.svg";
import optimism from "../../assets/svg/optimism.svg";
import Cards from "../../components/Landing1/Chains/Cards";
import SlideCard from "@/components/Landing1/Cards/SlideCards";
import { useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import bayc from "../../assets/svg/bayc.svg";
import droid from "../../assets/svg/droid.svg";
import azuki from "../../assets/svg/azuki.svg";
import buildings from "../../assets/svg/buildings.svg";
import dollar from "../../assets/svg/dollar.svg";
import woods from "../../assets/svg/woods.svg";
import phone from "../../assets/svg/phone.svg";
import flower from "../../assets/svg/flower.svg";
import mobileflower from "../../assets/svg/mobileflower.svg";
import DaoCard from "@/components/Landing1/Dao/Cards";
import RadialMenu from "@/components/Landing1/RadialMenu";
import styles from "./style.module.css";
import halborn from "../../assets/svg/halborn.svg";
import peckshield from "../../assets/svg/peckshield.svg";
import quillhash from "../../assets/svg/quickshill.svg";
import spherium from "../../assets/svg/spherium.svg";
import google from "../../assets/svg/google.svg";
import transakt from "../../assets/svg/transakt.svg";
import chainlink from "../../assets/svg/chainlink.svg";
import binancebacked from "../../assets/svg/binancebacked.svg";
import polygonbacked from "../../assets/svg/polygonbacked.svg";
import okxbacked from "../../assets/svg/okx.svg";
import fantombacked from "../../assets/svg/fantombacked.svg";
import ethereumbacked from "../../assets/svg/ethereumbacked.svg";
import multichainz from "../../assets/svg/multichainzlogo.svg";
import { FaDiscord, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import blurelipsemobile from "../../assets/svg/blurelipsemobile.svg";
import blurelipse from "../../assets/svg/blurelipse.svg";
import FixedMenu from "@/components/Landing1/Menu/FixedMenu";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import AnimatedPolygon from "@/components/Landing1/AnimatedPolygons";
import web3label from "../../assets/svg/web3label.svg";

const Landing1 = () => {
  const firstpageRef = useRef<any>(null);
  const secondpageRef = useRef<any>(null);
  const [currentCard, setcurrentCard] = useState<number>(0);

  const firstcardref = useRef<any>(null);
  const secondcardref = useRef<any>(null);
  const thirdcardref = useRef<any>(null);
  const fourthcardref = useRef<any>(null);
  const fifthcardref = useRef<any>(null);

  const cardsToRef: any = {
    "1": firstcardref,
    "2": secondcardref,
    "3": thirdcardref,
    "4": fourthcardref,
    "5": fifthcardref,
  };

  useEffect(() => {
    if (currentCard !== 0) {
      cardsToRef[currentCard]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentCard]);

  console.log(currentCard);

  const handleScrollForward = () => {
    if (isMobileDevice) {
      if (currentCard !== 5) {
        setcurrentCard((prev) => prev + 1);
      }
    } else {
      console.log(secondpageRef.current.getBoundingClientRect());
      console.log(firstpageRef.current.getBoundingClientRect());

      secondpageRef.current?.scrollIntoView({
        behavior: "smooth",
        // block: "end",
        block: "nearest",
        // inline: "start",
      });
    }
  };

  const handleScrollBack = () => {
    if (isMobileDevice) {
      if (currentCard !== 0) {
        cardsToRef[currentCard]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });

        setcurrentCard((prev) => prev - 1);
      }
    } else {
      firstcardref.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "end",
      });
    }
  };

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

  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Box color='black'>
      <Flex
        background={
          "linear-gradient(90deg, rgba(204,220,247,1) 0%, rgba(225,238,252,1) 100%)"
        }
        justifyContent='center'
      >
        <Navbar />
      </Flex>

      {showElement && !isMobileDevice && <FixedMenu />}

      <Box
        background={
          "linear-gradient(90deg, rgba(195,215,247,1) 0%, rgba(221,235,251,1) 100%)"
        }
        pb={10}
      >
        <Flex position={"relative"} justifyContent={"center"}>
          <Img
            w={isMobileDevice ? "100%" : "50%"}
            h={isMobileDevice ? "70vh" : undefined}
            src={eclipsebg.src}
          />

          <AnimatedPolygon />

          <Flex
            w='100%'
            top={isMobileDevice ? "10%" : "30%"}
            position={"absolute"}
            flexDirection='column'
            alignItems={"center"}
          >
            {isMobileDevice ? (
              <Heading fontSize={"50px"} textAlign='center' fontWeight='bold'>
                MultichainZ <br /> Protocol
              </Heading>
            ) : (
              <Heading fontSize={{ lg: "80px", xl: "100px" }} fontWeight='900'>
                MultiChainZ Protocol
              </Heading>
            )}

            {isMobileDevice ? (
              <Text
                px={10}
                fontFamily={"Roboto"}
                my={5}
                textAlign='center'
                fontSize={"20px"}
                fontWeight='400'
              >
                Lend, borrow, and stake crypto, NFT, and tokenized real-world
                assets in any chain
              </Text>
            ) : (
              <Text
                my={5}
                fontFamily={"Roboto"}
                fontSize={"30px"}
                fontWeight='400'
              >
                Lend, borrow, and stake crypto, NFT, and
                <br /> tokenized real-world assets in any chain
              </Text>
            )}

            <Flex
              justifyContent={"center"}
              w={{ base: undefined, sm: "100%", lg: "150px", xl: "150px" }}
            >
              <Button
                w={{ sm: "80%", lg: undefined, xl: undefined }}
                color='white'
                fontSize={"14px"}
                background={
                  "linear-gradient(90deg, rgba(73,168,252,1) 0%, rgba(104,172,253,1) 100%)"
                }
              >
                Get Started
              </Button>
            </Flex>

            <Flex
              mt={isMobileDevice ? 10 : 40}
              w={isMobileDevice ? "100vw" : "70vw"}
              px={isMobileDevice ? 5 : 0}
              fontWeight={"bold"}
              flexDirection={isMobileDevice ? "column" : undefined}
              justifyContent={isMobileDevice ? undefined : "space-between"}
              fontSize='18px'
            >
              <Flex alignItems={"center"}>
                <Img mr={2} src={wallet.src} />
                <Text fontWeight={"bold"}>NFT/RWA Lending</Text>
              </Flex>

              <Flex mt={isMobileDevice ? 4 : 0} alignItems={"center"}>
                <Img mr={2} src={crosschain.src} />
                <Text fontWeight={"bold"}>Cross-chain infrastructure</Text>
              </Flex>

              <Flex mt={isMobileDevice ? 4 : 0} alignItems={"center"}>
                <Img mr={2} src={institution.src} />
                <Text fontWeight={"bold"}>Institutional Compliance</Text>
              </Flex>

              <Flex mt={isMobileDevice ? 4 : 0} alignItems={"center"}>
                <Img mr={2} src={dao.src} />
                <Text fontWeight={"bold"}>DAO Governance</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box
        pt={20}
        // px={36}

        background={
          "linear-gradient(90deg, rgba(235,242,248,1) 0%, rgba(182,217,245,1) 100%)"
        }
      >
        <Flex alignItems={"center"} flexDirection={"column"}>
          <Flex
            justifyContent={isMobileDevice ? "center" : undefined}
            w={isMobileDevice ? "100vw" : "70vw"}
            mb={10}
          >
            <Text
              textAlign={isMobileDevice ? "center" : undefined}
              fontSize={isMobileDevice ? "20px" : "24px"}
              fontWeight='600'
            >
              $X locked in collateral to back the loans
            </Text>
          </Flex>

          <Flex
            w={isMobileDevice ? "100vw" : "70vw"}
            mt={5}
            justifyContent={"space-between"}
            px={isMobileDevice ? 5 : undefined}
            alignItems='center'
          >
            <Flex
              textAlign={"center"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={isMobileDevice ? "center" : undefined}
            >
              <Heading
                // fontWeight={"700"}
                fontSize={isMobileDevice ? "20px" : "40px"}
              >
                $xx Million+
              </Heading>
              <Text fontSize={isMobileDevice ? "14px" : "18px"}>
                Processed Loans
              </Text>
            </Flex>

            <Flex
              alignItems={isMobileDevice ? "center" : undefined}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Heading
                fontWeight={"700"}
                fontSize={isMobileDevice ? "20px" : "40px"}
              >
                $M+
              </Heading>
              <Text fontSize={isMobileDevice ? "14px" : "18px"}>
                World Users
              </Text>
            </Flex>

            <Flex
              flexDirection={"column"}
              alignItems={isMobileDevice ? "center" : undefined}
              justifyContent={"center"}
            >
              <Heading
                fontWeight={"700"}
                fontSize={isMobileDevice ? "20px" : "40px"}
              >
                20+
              </Heading>
              <Text fontSize={isMobileDevice ? "14px" : "18px"}>
                Reached Countries
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"}>
          <Flex
            w={isMobileDevice ? "100vw" : "70vw"}
            px={isMobileDevice ? 5 : undefined}
            mt={40}
            flexDirection={"column"}
          >
            <Heading
              fontWeight={"700"}
              color='#8F979C'
              fontSize={isMobileDevice ? "24px" : "40px"}
            >
              Explore MultichainZ
            </Heading>
            <Heading
              lineHeight={"1.2"}
              fontWeight={"700"}
              fontSize={isMobileDevice ? "24px" : "38px"}
            >
              Community Pools <br /> across Multiple Chains
            </Heading>
          </Flex>
        </Flex>
        <Flex mt={20} justifyContent={"center"}>
          <Box w={{ sm: "80vw", lg: "70vw", xl: "70vw" }}>
            <Flex
              h={isMobileDevice ? undefined : "250px"}
              flex={1}
              flexDirection={{ sm: "column", lg: "row", xl: "row" }}
              justifyContent='space-between'
            >
              <Cards
                img={ethereum.src}
                text={
                  <Text mb={5} fontSize={{ lg: "16px", xl: "20px" }}>
                    Access 450k+ tokens through the largest chain for dApps
                  </Text>
                }
              />

              <Cards
                img={fantom.src}
                text={
                  <Text mb={5} fontSize={{ lg: "16px", xl: "20px" }}>
                    Access speed and security in your loan transactions.
                  </Text>
                }
              />

              <Cards
                img={binance.src}
                text={
                  <Text mb={5} fontSize={{ lg: "16px", xl: "20px" }}>
                    Lend your assets in a cheaper and faster way through this
                    leading chain
                  </Text>
                }
              />
            </Flex>
          </Box>
        </Flex>

        <Flex mt={6} justifyContent={"center"}>
          <Box
            w={{ sm: "80vw", lg: "70vw", xl: "70vw" }}
            // border='1px solid red'
          >
            <Flex
              h={isMobileDevice ? undefined : "250px"}
              flexDirection={{ sm: "column", lg: "row", xl: "row" }}
              flex={1}
              justifyContent='space-between'
            >
              <Cards
                img={polygon.src}
                text={
                  <Text mb={5} fontSize={{ lg: "16px", xl: "20px" }}>
                    Unlock lower fees and higher scalability with this scaling
                    technology
                  </Text>
                }
              />

              <Cards
                img={avalanche.src}
                text={
                  <Text mb={5} fontSize={{ lg: "16px", xl: "20px" }}>
                    Enjoy efficiency and security robustness in your loans
                  </Text>
                }
              />

              <Cards
                img={optimism.src}
                text={
                  <Text mb={5} fontSize={{ lg: "16px", xl: "20px" }}>
                    Lend and borrow with the fastest and cheapest L2 benefits
                  </Text>
                }
              />
            </Flex>
          </Box>
        </Flex>

        {/* <Flex justifyContent={"center"}>
          <Flex
            w={isMobileDevice ? "100vw" : "70vw"}
            mt={isMobileDevice ? 0 : 10}
            flexDirection={isMobileDevice ? "column" : undefined}
            justifyContent={isMobileDevice ? undefined : "space-between"}
            alignItems={isMobileDevice ? "center" : undefined}
          >
            <Cards
              img={polygon.src}
              text={
                <Text mb={5} fontSize={"14px"}>
                  Unlock lower fees and higher <br /> scalability with this
                  scaling technology
                </Text>
              }
            />
            <Flex w='100%' mx={isMobileDevice ? 0 : 5}>
              <Cards
                img={avalanche.src}
                text={
                  <Text mb={5} fontSize={"14px"}>
                    Enjoy efficiency and security <br /> robustness in your
                    loans
                  </Text>
                }
              />
            </Flex>
            <Cards
              img={optimism.src}
              text={
                <Text mb={5} fontSize={"14px"}>
                  Lend and borrow with the fastest <br /> and cheapest L2
                  benefits
                </Text>
              }
            />
          </Flex>
        </Flex> */}

        <Flex mt={4} justifyContent={"center"}>
          <Flex w='70vw'>
            <Heading fontSize={"16px"} fontWeight={"bold"}>
              More chains coming soon…
            </Heading>
          </Flex>
        </Flex>
        <Flex
          mt={isMobileDevice ? 12 : 20}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Heading
            fontSize={isMobileDevice ? "18px" : "24px"}
            fontWeight={"bold"}
          >
            Enabling Institutional Lending
          </Heading>
          {isMobileDevice ? (
            <Text
              fontSize={isMobileDevice ? "14px" : undefined}
              textAlign='center'
            >
              Institutional features to enhance on-chain <br /> lending security
              and trust
            </Text>
          ) : (
            <Text fontSize={isMobileDevice ? "14px" : undefined}>
              Institutional features to enhance on-chain lending security and
              trust
            </Text>
          )}
        </Flex>

        <Flex justifyContent={"center"}>
          <Flex
            mt={20}
            w={isMobileDevice ? "80vw" : "70vw"}
            flexDirection={"column"}
          >
            <Flex mb={10} justifyContent={"flex-end"}>
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
            <Flex
              overflowX={"hidden"}

              // width='200%'
            >
              <Flex ref={firstpageRef}>
                <Flex ref={firstcardref}>
                  <SlideCard
                    title='Compliant with Regulations'
                    text={
                      <Text mb={2} fontSize={{ lg: "14px", xl: "18px" }}>
                        Multichainz has on-chain Know- Your-Customer (KYC)
                        verification for users
                      </Text>
                    }
                  />
                </Flex>
                <Flex ref={secondcardref}>
                  <SlideCard
                    title='Extra Secure Asset Custody'
                    text={
                      <Text mb={2} fontSize={{ lg: "14px", xl: "18px" }}>
                        MultichainZ has top-industry asset custody partners to
                        increase asset protection
                      </Text>
                    }
                  />
                </Flex>
                <Flex ref={thirdcardref}>
                  <SlideCard
                    title='Increased Transparency'
                    text={
                      <Text mb={2} fontSize={{ lg: "14px", xl: "18px" }}>
                        MultichainZ enhances protocol transparency through open
                        access of proof of reserves and funds
                      </Text>
                    }
                  />
                </Flex>
              </Flex>
              <Flex ref={secondpageRef}>
                <Flex ref={fourthcardref}>
                  <SlideCard
                    title='Constantly Improved Security'
                    text={
                      <Text mb={2} fontSize={{ lg: "14px", xl: "18px" }}>
                        MultichainZ partners with audit leaders of the
                        blockchain industry to improve its smart contract
                        robustness
                      </Text>
                    }
                  />
                </Flex>
                <Flex ref={fifthcardref}>
                  <SlideCard
                    title='Building the blocks of banking 2.0 by bringing NFT and Real-World Asset Lending on chain'
                    text={
                      <Text mb={2} fontSize={{ lg: "14px", xl: "18px" }}>
                        Multichainz enables lending of tokenized real-world
                        assets by partnering with oracle leaders
                      </Text>
                    }
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* <Flex justifyContent={"center"}>
          <Flex
            mt={20}
            w={isMobileDevice ? "80vw" : "70vw"}
            flexDirection={"column"}
          >
            <Flex mb={10} justifyContent={"flex-end"}>
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
            <Flex
              // w='200%'

              // w='70vw'

              h='250px'
              overflowX={"hidden"}
            >
              <Flex w='100%' ref={firstpageRef} justifyContent='space-between'>
                <SlideCard
                  title={
                    <Text
                      fontSize={"18px"}
                      top={6}
                      mb={2}
                      fontWeight={"bold"}
                      whiteSpace='nowrap'
                    >
                      Compliant with Regulations
                    </Text>
                  }
                  text={
                    <Text mb={2} fontSize={"14px"}>
                      Multichainz has on-chain Know- Your-Customer (KYC)
                      verification for users
                    </Text>
                  }
                />

                <SlideCard
                  title={
                    <Text
                      fontSize={"18px"}
                      // position={"absolute"}
                      top={6}
                      mb={2}
                      fontWeight={"bold"}
                      whiteSpace='nowrap'
                    >
                      Extra Secure Asset Custody
                    </Text>
                  }
                  text={
                    <Text mb={2} fontSize={"14px"}>
                      MultichainZ has top-industry asset custody partners to
                      increase asset protection
                    </Text>
                  }
                />

                <SlideCard
                  title={
                    <Text
                      fontSize={"18px"}
                      top={6}
                      mb={2}
                      fontWeight={"bold"}
                      whiteSpace='nowrap'
                    >
                      Increased Transparency
                    </Text>
                  }
                  text={
                    <Text mb={2} fontSize={"14px"}>
                      MultichainZ enhances protocol transparency through open
                      access of proof of reserves and funds
                    </Text>
                  }
                />
              </Flex>

              <Flex
                border='1px solid red'
                ref={secondpageRef}
                justifyContent='space-between'
              >
                <SlideCard
                  title={
                    <Text
                      fontSize={"18px"}
                      top={6}
                      mb={2}
                      fontWeight={"bold"}
                      whiteSpace='nowrap'
                    >
                      Compliant with Regulations
                    </Text>
                  }
                  text={
                    <Text mb={2} fontSize={"14px"}>
                      Multichainz has on-chain Know- Your-Customer (KYC)
                      verification for users
                    </Text>
                  }
                />

                <SlideCard
                  title={
                    <Text
                      fontSize={"18px"}
                      // position={"absolute"}
                      top={6}
                      mb={2}
                      fontWeight={"bold"}
                      whiteSpace='nowrap'
                    >
                      Extra Secure Asset Custody
                    </Text>
                  }
                  text={
                    <Text mb={2} fontSize={"14px"}>
                      MultichainZ has top-industry asset custody partners to
                      increase asset protection
                    </Text>
                  }
                />

                <SlideCard
                  title={
                    <Text
                      fontSize={"18px"}
                      top={6}
                      mb={2}
                      fontWeight={"bold"}
                      whiteSpace='nowrap'
                    >
                      Increased Transparency
                    </Text>
                  }
                  text={
                    <Text mb={2} fontSize={"14px"}>
                      MultichainZ enhances protocol transparency through open
                      access of proof of reserves and funds
                    </Text>
                  }
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex> */}

        <Heading
          my={20}
          textAlign={"center"}
          fontSize={isMobileDevice ? "24px" : "44px"}
          fontWeight={"700"}
        >
          NFT Lending
        </Heading>
        <Flex justifyContent={"center"}>
          <Box w={{ sm: "80vw", lg: "60vw", xl: "50vw" }}>
            <Flex
              borderRadius={"12px"}
              border={"1.5px solid white"}
              boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
              alignItems={"center"}
              flexDirection={isMobileDevice ? "column" : undefined}
              py={isMobileDevice ? 5 : 0}
              flex={1}
              justifyContent={isMobileDevice ? undefined : "center"}
            >
              {isMobileDevice ? (
                <Flex alignItems={"center"}>
                  <Img w='100px' h='100px' src={droid.src} />

                  <Img w='100px' h='100px' src={bayc.src} />
                  <Img w='100px' h='100px' src={azuki.src} />
                </Flex>
              ) : (
                <Flex alignItems={"center"}>
                  <Img w='200px' h='200px' src={droid.src} />
                  <Flex flexDirection={"column"}>
                    <Img w='200px' h='200px' src={bayc.src} />
                    <Img w='200px' h='200px' src={azuki.src} />
                  </Flex>
                </Flex>
              )}

              <Flex
                // flex={0.3}

                ml={isMobileDevice ? 5 : 10}
                alignItems={"flex-start"}
                flexDirection={"column"}
              >
                <Text
                  fontWeight={"600"}
                  fontSize={isMobileDevice ? "16px" : "20px"}
                >
                  Unlock instant liquidity using your NFTs <br /> as collateral
                </Text>

                <Text
                  my={isMobileDevice ? 5 : 10}
                  fontWeight={"600"}
                  fontSize={isMobileDevice ? "16px" : "20px"}
                >
                  Access more favorable collateral terms with <br /> more
                  valuable NFTs
                </Text>

                <Text
                  fontWeight={"600"}
                  fontSize={isMobileDevice ? "16px" : "20px"}
                >
                  Turn illiquid NFTs into valuable liquid crypto <br />
                  funds to increase your leverage
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex mt={40} flexDirection='column'>
          <Heading
            textAlign={"center"}
            fontSize={isMobileDevice ? "24px" : "44px"}
            fontWeight={"700"}
          >
            Real-World Asset Lending
          </Heading>
          <Text
            textAlign='center'
            px={{ sm: 5 }}
            fontSize={{ base: "16px", xl: "20px" }}
          >
            Multichainz will expand the on-chain RWA lending potential through
            tailored mechanisms for borrowers and lenders.
          </Text>
        </Flex>
        <Flex my={20} justifyContent={"center"}>
          <Flex
            // flex={1}
            w={{ sm: "80vw", lg: "60vw", xl: "50vw" }}
            py={6}
            px={3}
            borderRadius={"12px"}
            border={"1.5px solid white"}
            boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
            alignItems={"center"}
            flexDirection={isMobileDevice ? "column" : undefined}
            justifyContent={isMobileDevice ? undefined : "center"}
          >
            {isMobileDevice ? (
              <Flex flexDirection={"column"}>
                <Flex mr={20}>
                  <Img w='80px' mx={5} h='100px' src={dollar.src} />
                  <Img w='80px' h='100px' src={phone.src} />
                </Flex>
                <Flex ml={20}>
                  <Img w='80px' h='100px' mx={5} src={woods.src} />
                  <Img w='80px' h='100px' src={buildings.src} />
                </Flex>
              </Flex>
            ) : (
              <Flex alignItems={"center"} flex={0.5}>
                <Flex mb={24} mr={-10} flexDirection={"column"}>
                  <Img w='200px' h='200px' src={buildings.src} />
                  <Img w='200px' h='200px' src={woods.src} />
                </Flex>
                <Flex mt={24} flexDirection={"column"}>
                  <Img w='200px' h='200px' src={phone.src} />
                  <Img w='200px' h='200px' src={dollar.src} />
                </Flex>
              </Flex>
            )}

            <Flex
              // position='absolute'
              // mb={40}
              mb={22}
              ml={isMobileDevice ? 0 : 10}
              mt={isMobileDevice ? 5 : 0}
              px={isMobileDevice ? 5 : 0}
              alignItems={"flex-start"}
              flexDirection={"column"}
              flex={0.4}
            >
              <Flex mb={10} flexDirection={"column"}>
                <Heading
                  mb={2}
                  fontWeight={"bold"}
                  fontSize={{ sm: "24px", lg: "24px", xl: "30px" }}
                >
                  For borrowers
                </Heading>
                <Text fontWeight={"600"} fontSize={{ lg: "16px", xl: "18px" }}>
                  Access permissionless liquidity across multiple blockchains
                  for your fund, startup, real estate or other financial needs
                </Text>
              </Flex>

              <Flex mb={10} flexDirection={"column"}>
                <Heading
                  fontWeight={"bold"}
                  fontSize={{ sm: "24px", lg: "24px", xl: "30px" }}
                >
                  For lenders
                </Heading>
                <Text fontWeight={"600"} fontSize={{ lg: "16px", xl: "18px" }}>
                  Lend any tokenized asset to verified counter-parties to
                  support their real-life causes and initiatives
                </Text>
              </Flex>

              <Flex flexDirection={"column"}>
                <Heading
                  fontWeight={"bold"}
                  fontSize={{ sm: "24px", lg: "24px", xl: "30px" }}
                >
                  For institutions
                </Heading>
                <Text fontWeight={"600"} fontSize={{ lg: "16px", xl: "18px" }}>
                  Borrow or lend liquid tokenized assets with institutional-
                  grade security to meet your company financial needs and goals
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          position={"relative"}
          justifyContent='center'
          alignItems={"center"}
        >
          <Flex h='100vh'>
            <Img
              w={isMobileDevice ? "100%" : "100%"}
              filter={"blur(2px)"}
              src={isMobileDevice ? mobileflower.src : flower.src}
            />
          </Flex>
          <Flex
            // mt={24}
            position={"absolute"}
            alignItems='center'
            flexDirection='column'
          >
            <Heading
              fontSize={isMobileDevice ? "24px" : "44px"}
              fontWeight='700'
            >
              Community Led DAO
            </Heading>
            <Text
              px={isMobileDevice ? 5 : 0}
              textAlign={isMobileDevice ? "center" : undefined}
              fontSize={{ lg: "16px", xl: "18px" }}
            >
              Propose protocol suggestions and improvements within seconds
              through our community forum.
            </Text>

            <Flex
              mt={isMobileDevice ? 5 : 20}
              w={isMobileDevice ? "80vw" : "70vw"}
              justifyContent={"space-between"}
              alignItems={isMobileDevice ? "center" : undefined}
              flexDirection={isMobileDevice ? "column" : "row"}
            >
              <DaoCard
                title='Engage'
                text={
                  <Text fontSize={{ lg: "16px", xl: "20px" }}>
                    Learn more about initiatives proposed by community members
                  </Text>
                }
              />

              {/* <Flex mx={5}> */}
              <DaoCard
                title='Propose'
                text={
                  <Text fontSize={{ lg: "16px", xl: "20px" }}>
                    Publish your own suggestions or improvements for the
                    protocol
                  </Text>
                }
              />
              {/* </Flex> */}

              <DaoCard
                title='Vote'
                text={
                  <Text fontSize={{ lg: "16px", xl: "20px" }}>
                    Support proposals that you agree with
                  </Text>
                }
              />
            </Flex>
            <Flex mt={10} justifyContent={"center"}>
              <Button
                color='white'
                fontSize={"14px"}
                background={
                  "linear-gradient(90deg, rgba(73,168,252,1) 0%, rgba(104,172,253,1) 100%)"
                }
              >
                Governance Forum
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          mt={10}
          pb={20}
          alignItems={isMobileDevice ? undefined : "center"}
          // justifyContent={"center"}
          flexDirection={isMobileDevice ? "column" : "column"}
          position='relative'
        >
          {isMobileDevice ? (
            <>
              <Text textAlign={"center"} fontWeight={"700"} fontSize='24px'>
                Treasury balance
              </Text>

              <Text px={isMobileDevice ? 5 : 0} textAlign={"center"}>
                Multichainz has a robust ecosystem treasury reserve composed by
                foundation tokens and protocol fees and interests
              </Text>
            </>
          ) : (
            <>
              <Heading textAlign={"center"} fontSize={"44px"} fontWeight='700'>
                Treasury balance
              </Heading>

              <Text
                px={isMobileDevice ? 5 : 0}
                fontSize={{ lg: "16px", xl: "20px" }}
                textAlign={"center"}
              >
                Multichainz has a robust ecosystem treasury reserve composed by
                foundation tokens and protocol fees and interests
              </Text>
            </>
          )}

          <Flex
            position={"relative"}
            alignItems='center'
            justifyContent={"center"}
            my={10}
            h='600px'
          >
            <Img
              w={isMobileDevice ? undefined : "600px"}
              src={isMobileDevice ? blurelipsemobile.src : blurelipse.src}
            />

            <RadialMenu />

            <Flex
              w='100%'
              position={"absolute"}
              bottom={-20}
              right={{ lg: 10, xl: 10 }}
              pb={10}
              alignItems={"center"}
              flexDirection={"column"}
              justifyContent='center'
            >
              <Text fontSize={"44px"} fontWeight='700'>
                $X
              </Text>
              <Text fontSize={{ lg: "16px", xl: "18px" }}>
                Total Ecosystem Reserve
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {isMobileDevice ? (
          <Flex
            h='150vh'
            bg='linear-gradient(90deg, rgba(65,156,247,1) 0%, rgba(42,126,235,1) 100%)'
            flexDirection='column'
            position='relative'
          >
            <Flex
              w='100%'
              mt={5}
              py={10}
              flexDirection='column'
              alignItems={"center"}
              position='absolute'
            >
              <Flex
                py={10}
                justifyContent={"space-between"}
                w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
                backdropFilter={"blur(20px)"}
                flexDirection={isMobileDevice ? "column" : undefined}
                alignItems='center'
                border='1px solid rgba(255, 255, 255, 0.12)'
                px={5}
              >
                <Heading
                  fontSize={{ lg: "30px", xl: "40px" }}
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
                    _hover={{
                      border: "1px solid white",
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
                  >
                    <Img w='150px' h='30px' src={halborn.src} />
                  </Flex>
                  <Flex
                    _hover={{
                      border: "1px solid white",
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
                  >
                    <Img w='150px' h='40px' src={peckshield.src} />
                  </Flex>
                  <Flex
                    _hover={{
                      border: "1px solid white",
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
                  >
                    <Img w='150px' h='30px' src={quillhash.src} />
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                py={20}
                // position='absolute'
                flexDirection='column'
                justifyContent={"space-between"}
                w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
                mt={isMobileDevice ? 20 : 0}
                backdropFilter={"blur(20px)"}
                alignItems='center'
                border='1px solid rgba(255, 255, 255, 0.12)'
                px={5}
              >
                <Heading
                  fontSize={{ lg: "30px", xl: "40px" }}
                  fontWeight='bold'
                  color='white'
                >
                  Ecosystem Integration partners
                </Heading>
                <Flex
                  py={2}
                  px={2}
                  flexDirection={isMobileDevice ? "column" : undefined}
                  // alignItems='center'
                  justifyContent='space-between'
                  alignItems={isMobileDevice ? "flex-start" : undefined}
                  w='100%'
                  mt={10}
                >
                  <Flex
                    alignItems={"center"}
                    justifyContent='center'
                    px={2}
                    borderRadius={"18px"}
                  >
                    <Img src={spherium.src} />
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent='center'
                    px={2}
                    borderRadius={"18px"}
                    my={isMobileDevice ? 4 : 0}
                  >
                    <Img src={google.src} />
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent='center'
                    px={2}
                    borderRadius={"18px"}
                  >
                    <Img src={transakt.src} />
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent='center'
                    px={2}
                    borderRadius={"18px"}
                    my={isMobileDevice ? 4 : 0}
                  >
                    <Img src={chainlink.src} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              flexDirection={"column"}
              w='100vw'
              px={5}
              zIndex={200}
              position='absolute'
              bottom={"20%"}
              // border='1px solid red'
            >
              <Flex mt={isMobileDevice ? 5 : 0}>
                <Flex justifyContent={"center"} w='100%'>
                  <Heading
                    fontWeight={"bold"}
                    textAlign='center'
                    // mb={10}
                    // mt={10}
                    fontSize='30px'
                    color='white'
                    // position={"absolute"}
                    // top={-40}
                    // left={"45%"}
                  >
                    Backed by
                  </Heading>
                </Flex>

                <Flex
                  mt={20}
                  overflow={"hidden"}
                  w='600%'
                  className={styles.animate_mobile}
                  position='absolute'
                >
                  <Flex
                    w='50%'
                    justifyContent={"space-around"}
                    // className={styles.logo}
                  >
                    <a>
                      <Img mr={10} src={binancebacked.src} />
                    </a>
                    <a>
                      <Img mr={10} src={polygonbacked.src} />
                    </a>
                    <a>
                      <Img mx={10} src={okxbacked.src} />
                    </a>
                    <a>
                      <Img ml={10} mr={10} src={fantombacked.src} />
                    </a>
                    <a>
                      <Img ml={10} mr={10} src={ethereumbacked.src} />
                    </a>
                  </Flex>

                  <Flex
                    ml={10}
                    w='50%'
                    justifyContent={"space-around"}
                    // className={styles.logo}
                  >
                    <a>
                      <Img mr={10} src={binancebacked.src} />
                    </a>
                    <a>
                      <Img mr={10} src={polygonbacked.src} />
                    </a>
                    <a>
                      <Img mx={10} src={okxbacked.src} />
                    </a>
                    <a>
                      <Img ml={10} mr={10} src={fantombacked.src} />
                    </a>
                    <a>
                      <Img ml={10} src={ethereumbacked.src} />
                    </a>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ) : (
          <Flex flexDirection='column' position='relative'>
            <Img src={web3label.src} />

            <Flex
              w='100%'
              mt={5}
              py={10}
              flexDirection='column'
              alignItems={"center"}
              position='absolute'
            >
              <Flex
                py={10}
                justifyContent={"space-between"}
                w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
                backdropFilter={"blur(20px)"}
                flexDirection={isMobileDevice ? "column" : undefined}
                alignItems='center'
                border='1px solid rgba(255, 255, 255, 0.12)'
                px={5}
              >
                <Heading
                  fontSize={{ lg: "30px", xl: "40px" }}
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
                    _hover={{
                      border: "1px solid white",
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
                  >
                    <Img w='150px' h='30px' src={halborn.src} />
                  </Flex>
                  <Flex
                    _hover={{
                      border: "1px solid white",
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
                  >
                    <Img w='150px' h='40px' src={peckshield.src} />
                  </Flex>
                  <Flex
                    _hover={{
                      border: "1px solid white",
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
                  >
                    <Img w='150px' h='30px' src={quillhash.src} />
                  </Flex>
                  {/* <Img src={peckshield.src} />
                <Img src={quillhash.src} /> */}
                </Flex>
              </Flex>

              <Flex
                py={20}
                // position='absolute'
                flexDirection='column'
                justifyContent={"space-between"}
                w={{ sm: "80vw", lg: "70vw", xl: "60vw" }}
                mt={isMobileDevice ? 5 : 0}
                my={isMobileDevice ? 0 : 28}
                backdropFilter={"blur(20px)"}
                alignItems='center'
                border='1px solid rgba(255, 255, 255, 0.12)'
                px={5}
              >
                <Heading
                  fontSize={{ lg: "30px", xl: "40px" }}
                  fontWeight='bold'
                  color='white'
                >
                  Ecosystem Integration partners
                </Heading>
                <Flex
                  py={2}
                  px={2}
                  flexDirection={isMobileDevice ? "column" : undefined}
                  // alignItems='center'
                  justifyContent='space-between'
                  alignItems={isMobileDevice ? "flex-start" : undefined}
                  w='100%'
                  mt={10}
                >
                  <Flex
                    alignItems={"center"}
                    justifyContent='center'
                    px={2}
                    borderRadius={"18px"}
                  >
                    <Img src={spherium.src} />
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent='center'
                    px={2}
                    borderRadius={"18px"}
                    my={isMobileDevice ? 4 : 0}
                  >
                    <Img src={google.src} />
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent='center'
                    px={2}
                    borderRadius={"18px"}
                  >
                    <Img src={transakt.src} />
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent='center'
                    px={2}
                    borderRadius={"18px"}
                    my={isMobileDevice ? 4 : 0}
                  >
                    <Img src={chainlink.src} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              flexDirection={"column"}
              w='100vw'
              px={5}
              zIndex={200}
              position='absolute'
              bottom={"20%"}
              // border='1px solid red'
            >
              <Flex mt={isMobileDevice ? 5 : 0}>
                <Flex justifyContent={"center"} w='100%'>
                  <Heading
                    fontWeight={"bold"}
                    textAlign='center'
                    // mb={10}
                    // mt={10}
                    fontSize='30px'
                    color='white'
                    // position={"absolute"}
                    // top={-40}
                    // left={"45%"}
                  >
                    Backed by
                  </Heading>
                </Flex>

                <Flex
                  mt={20}
                  overflow={"hidden"}
                  w='200%'
                  className={styles.animate}
                  position='absolute'
                >
                  <Flex
                    w='50%'
                    justifyContent={"space-around"}
                    // className={styles.logo}
                  >
                    <a>
                      <Img src={binancebacked.src} />
                    </a>
                    <a>
                      <Img src={polygonbacked.src} />
                    </a>
                    <a>
                      <Img src={okxbacked.src} />
                    </a>
                    <a>
                      <Img src={fantombacked.src} />
                    </a>
                    <a>
                      <Img src={ethereumbacked.src} />
                    </a>
                  </Flex>

                  <Flex
                    w='50%'
                    justifyContent={"space-around"}
                    // className={styles.logo}
                  >
                    <a>
                      <Img src={binancebacked.src} />
                    </a>
                    <a>
                      <Img src={polygonbacked.src} />
                    </a>
                    <a>
                      <Img src={okxbacked.src} />
                    </a>
                    <a>
                      <Img src={fantombacked.src} />
                    </a>
                    <a>
                      <Img src={ethereumbacked.src} />
                    </a>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )}

        {/* Footer */}
        <Footer />
        {/* <Flex
          alignItems={"center"}
          py={20}
          bgColor={"white"}
          flexDirection={"column"}
        >
          <Flex
            w={isMobileDevice ? "100vw" : "70vw"}
            flexDirection={isMobileDevice ? "column" : undefined}
            justifyContent='space-between'
            alignItems={isMobileDevice ? undefined : "center"}
            px={isMobileDevice ? 5 : 0}
          >
            <Img
              w={isMobileDevice ? "250px" : undefined}
              src={multichainz.src}
            />
            <Flex
              mt={isMobileDevice ? 5 : 0}
              fontSize={isMobileDevice ? "30px" : "24px"}
            >
              <Icon as={FaDiscord} />
              <Icon mx={10} as={FaTwitter} />
              <Icon as={FaLinkedin} />
              <Icon mx={10} as={IoMdMail} />
            </Flex>
          </Flex>

          {isMobileDevice ? (
            <Flex px={5} w='100vw' mt={20} flexDirection='column'>
              <Flex justifyContent={"space-between"}>
                <Flex flexDirection={"column"}>
                  <Text fontWeight={"bold"} fontSize='20px'>
                    Product
                  </Text>

                  <Flex mt={4} flexDirection={"column"}>
                    <Text>Media Kit</Text>
                    <Text my={5}>Blog</Text>
                    <Text>FAQ</Text>
                  </Flex>
                </Flex>

                <Flex flexDirection={"column"}>
                  <Text fontWeight={"bold"} fontSize='20px'>
                    Company
                  </Text>

                  <Flex mt={4} flexDirection={"column"}>
                    <Text>Technical Paper</Text>
                    <Text my={5}>Tokenomics</Text>
                    <Text>Use MultiChainZ</Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex mt={10} flexDirection={"column"}>
                <Flex flexDirection={"column"}>
                  <Text fontWeight={"bold"} fontSize='20px'>
                    Resources
                  </Text>

                  <Flex mt={4} flexDirection={"column"}>
                    <Text>Documentation</Text>
                    <Text my={5}>Terms of Use</Text>
                    <Text>Privacy Policy</Text>
                    <Text my={5}>Contact Us</Text>
                  </Flex>
                </Flex>

                <Flex mt={10} flexDirection={"column"}>
                  <Text fontWeight={"bold"}>
                    Subscribe to our newsletter for updates
                  </Text>

                  <InputGroup mt={10}>
                    <Input
                      placeholder='enter your email'
                      _placeholder={{ color: "#867C7C" }}
                      bgColor={"#D9D9D9"}
                    />
                    <InputRightAddon px={0}>
                      <Button
                        color='white'
                        borderRadius={"0"}
                        bgColor={"#61ACFD"}
                      >
                        subscribe
                      </Button>
                    </InputRightAddon>
                  </InputGroup>
                </Flex>
              </Flex>
            </Flex>
          ) : (
            <Flex w='70vw' mt={20} justifyContent={"space-between"}>
              <Flex flexDirection={"column"}>
                <Text fontWeight={"bold"} fontSize='20px'>
                  Product
                </Text>

                <Flex mt={10} flexDirection={"column"}>
                  <Text>Media Kit</Text>
                  <Text my={5}>Blog</Text>
                  <Text>FAQ</Text>
                </Flex>
              </Flex>

              <Flex flexDirection={"column"}>
                <Text fontWeight={"bold"} fontSize='20px'>
                  Company
                </Text>

                <Flex mt={10} flexDirection={"column"}>
                  <Text>Technical Paper</Text>
                  <Text my={5}>Tokenomics</Text>
                  <Text>Use MultiChainZ</Text>
                </Flex>
              </Flex>

              <Flex flexDirection={"column"}>
                <Text fontWeight={"bold"} fontSize='20px'>
                  Resources
                </Text>

                <Flex mt={10} flexDirection={"column"}>
                  <Text>Documentation</Text>
                  <Text my={5}>Terms of Use</Text>
                  <Text>Privacy Policy</Text>
                  <Text my={5}>Contact Us</Text>
                </Flex>
              </Flex>

              <Flex flexDirection={"column"}>
                <Text fontWeight={"bold"}>
                  Subscribe to our newsletter for updates
                </Text>

                <InputGroup mt={10}>
                  <Input
                    placeholder='enter your email'
                    _placeholder={{ color: "#867C7C" }}
                    bgColor={"#D9D9D9"}
                  />
                  <InputRightAddon px={0}>
                    <Button
                      color='white'
                      borderRadius={"0"}
                      bgColor={"#61ACFD"}
                    >
                      subscribe
                    </Button>
                  </InputRightAddon>
                </InputGroup>
              </Flex>
            </Flex>
          )}
        </Flex> */}
      </Box>
    </Box>
  );
};

export default Landing1;
