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

const Landing1 = () => {
  const firstpageRef = useRef<any>(null);
  const secondpageRef = useRef<any>(null);
  const [currentCard, setcurrentCard] = useState<number>(0);

  const firstcardref = useRef<any>(null);
  const secondcardref = useRef<any>(null);
  const thirdcardref = useRef<any>(null);
  const fourthcardref = useRef<any>(null);
  const fifthcardref = useRef<any>(null);

  const cardsToRef = {
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
      secondpageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
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
      firstpageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
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
          <Flex
            w='100%'
            top={isMobileDevice ? "10%" : "30%"}
            position={"absolute"}
            flexDirection='column'
            alignItems={"center"}
          >
            {isMobileDevice ? (
              <Text fontSize={"50px"} textAlign='center' fontWeight='bold'>
                MultichainZ <br /> Protocol
              </Text>
            ) : (
              <Text fontSize={"70px"} fontWeight='bold'>
                MultichainZ Protocol
              </Text>
            )}

            {isMobileDevice ? (
              <Text
                my={5}
                textAlign='center'
                fontSize={"24px"}
                fontWeight='400'
              >
                Lend, borrow, and stake crypto, NFT, and tokenized real-world
                assets in any chain
              </Text>
            ) : (
              <Text my={5} fontSize={"30px"} fontWeight='400'>
                Lend, borrow, and stake crypto, NFT, and
                <br /> tokenized real-world assets in any chain
              </Text>
            )}

            <Flex justifyContent={"center"}>
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

            <Flex
              mt={isMobileDevice ? 10 : 40}
              w={isMobileDevice ? "100vw" : "70vw"}
              px={isMobileDevice ? 5 : 0}
              fontWeight={"bold"}
              fontSize={"14px"}
              flexDirection={isMobileDevice ? "column" : undefined}
              justifyContent={isMobileDevice ? undefined : "space-between"}
            >
              <Flex alignItems={"center"}>
                <Img mr={2} src={wallet.src} />
                <Text fontWeight={"bold"} fontSize={"14px"}>
                  NFT/RWA Lending
                </Text>
              </Flex>

              <Flex mt={isMobileDevice ? 4 : 0} alignItems={"center"}>
                <Img mr={2} src={crosschain.src} />
                <Text fontWeight={"bold"} fontSize={"14px"}>
                  Cross-chain infrastructure
                </Text>
              </Flex>

              <Flex mt={isMobileDevice ? 4 : 0} alignItems={"center"}>
                <Img mr={2} src={institution.src} />
                <Text fontWeight={"bold"} fontSize={"14px"}>
                  Institutional Compliance
                </Text>
              </Flex>

              <Flex mt={isMobileDevice ? 4 : 0} alignItems={"center"}>
                <Img mr={2} src={dao.src} />
                <Text fontWeight={"bold"} fontSize={"14px"}>
                  DAO Governance
                </Text>
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
          >
            <Text
              textAlign={isMobileDevice ? "center" : undefined}
              fontSize={isMobileDevice ? "20px" : "30px"}
              fontWeight='500'
            >
              $X locked in collateral to back the loans
            </Text>
          </Flex>

          <Flex
            w={isMobileDevice ? "100vw" : "70vw"}
            mt={5}
            justifyContent={"space-between"}
            px={isMobileDevice ? 5 : undefined}
          >
            <Flex
              textAlign={"center"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={isMobileDevice ? "center" : undefined}
            >
              <Text
                fontWeight={"700"}
                fontSize={isMobileDevice ? "20px" : "40px"}
              >
                $xx Million+
              </Text>
              <Text fontSize={isMobileDevice ? "14px" : "16px"}>
                Processed Loans
              </Text>
            </Flex>

            <Flex
              alignItems={isMobileDevice ? "center" : undefined}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Text
                fontWeight={"700"}
                fontSize={isMobileDevice ? "20px" : "40px"}
              >
                $M+
              </Text>
              <Text fontSize={isMobileDevice ? "14px" : "16px"}>
                World Users
              </Text>
            </Flex>

            <Flex
              flexDirection={"column"}
              alignItems={isMobileDevice ? "center" : undefined}
              justifyContent={"center"}
            >
              <Text
                fontWeight={"700"}
                fontSize={isMobileDevice ? "20px" : "40px"}
              >
                20+
              </Text>
              <Text fontSize={isMobileDevice ? "14px" : "16px"}>
                Reached Countries
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"}>
          <Flex
            w={isMobileDevice ? "100vw" : "70vw"}
            px={isMobileDevice ? 5 : undefined}
            mt={10}
            flexDirection={"column"}
          >
            <Text
              fontWeight={"700"}
              color='#8F979C'
              fontSize={isMobileDevice ? "24px" : "40px"}
            >
              Explore MultichainZ
            </Text>
            <Text
              lineHeight={"1.2"}
              fontWeight={"700"}
              fontSize={isMobileDevice ? "24px" : "38px"}
            >
              Community Pools <br /> across Multiple Chains
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"}>
          <Flex
            w={isMobileDevice ? "100vw" : "70vw"}
            mt={10}
            flexDirection={isMobileDevice ? "column" : undefined}
            justifyContent={isMobileDevice ? undefined : "space-between"}
            alignItems={isMobileDevice ? "center" : undefined}
          >
            <Cards
              img={ethereum.src}
              text={
                <Text mb={5} fontSize={"14px"}>
                  Access 450k+ tokens through the <br /> largest chain for dApps
                </Text>
              }
            />

            <Flex mx={isMobileDevice ? 0 : 5}>
              <Cards
                img={fantom.src}
                text={
                  <Text mb={5} fontSize={"14px"}>
                    Access speed and security in your <br /> loan transactions.
                  </Text>
                }
              />
            </Flex>

            <Cards
              img={binance.src}
              text={
                <Text mb={5} fontSize={"14px"}>
                  Lend your assets in a cheaper and <br />
                  faster way through this leading <br /> chain
                </Text>
              }
            />
          </Flex>
        </Flex>
        <Flex justifyContent={"center"}>
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
            <Flex mx={isMobileDevice ? 0 : 5}>
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
        </Flex>
        <Flex mt={4} justifyContent={"center"}>
          <Flex w='70vw'>
            <Text fontWeight={"bold"}>More chains coming soon…</Text>
          </Flex>
        </Flex>
        <Flex
          mt={isMobileDevice ? 12 : 20}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text fontSize={isMobileDevice ? "18px" : "24px"} fontWeight={"bold"}>
            Enabling Institutional Lending
          </Text>
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
            <Flex overflowX={"hidden"}>
              <Flex ref={firstpageRef}>
                <Flex ref={firstcardref}>
                  <SlideCard
                    title='Compliant with Regulations'
                    text={
                      <Text mb={2} fontSize={"14px"}>
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
                      <Text mb={2} fontSize={"14px"}>
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
                      <Text mb={2} fontSize={"14px"}>
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
                      <Text fontSize={"14px"} mb={2}>
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
                      <Text fontSize={"14px"} mb={2}>
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
        <Text
          my={20}
          textAlign={"center"}
          fontSize={isMobileDevice ? "24px" : "44px"}
          fontWeight={"700"}
        >
          NFT Lending
        </Text>
        <Flex justifyContent={"center"}>
          <Flex
            w={isMobileDevice ? "80vw" : "70vw"}
            borderRadius={"12px"}
            border={"1.5px solid white"}
            boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
            alignItems={"center"}
            flexDirection={isMobileDevice ? "column" : undefined}
            py={isMobileDevice ? 5 : 0}
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

            <Flex ml={10} alignItems={"flex-start"} flexDirection={"column"}>
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
                Access more favorable collateral terms with <br /> more valuable
                NFTs
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
        </Flex>
        <Flex my={20} flexDirection='column'>
          <Text
            textAlign={"center"}
            fontSize={isMobileDevice ? "24px" : "44px"}
            fontWeight={"700"}
          >
            Real-World Asset Lending
          </Text>
          <Text fontSize={"14px"} textAlign='center'>
            Multichainz will expand the on-chain RWA lending potential through
            tailored mechanisms for borrowers and lenders.
          </Text>
        </Flex>
        <Flex my={20} justifyContent={"center"}>
          <Flex
            w={isMobileDevice ? "80vw" : "70vw"}
            py={6}
            borderRadius={"12px"}
            border={"1.5px solid white"}
            boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
            alignItems={"center"}
            flexDirection={isMobileDevice ? "column" : undefined}
          >
            {isMobileDevice ? (
              <Flex flexDirection={"column"}>
                <Flex mr={20}>
                  <Img w='100px' mx={5} h='100px' src={dollar.src} />
                  <Img w='100px' h='100px' src={phone.src} />
                </Flex>
                <Flex ml={20}>
                  <Img w='100px' h='100px' mx={5} src={woods.src} />
                  <Img w='100px' h='100px' src={buildings.src} />
                </Flex>
              </Flex>
            ) : (
              <Flex alignItems={"center"}>
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
              px={isMobileDevice ? 10 : 0}
              alignItems={"flex-start"}
              flexDirection={"column"}
            >
              <Flex mb={10} flexDirection={"column"}>
                <Text fontWeight={"bold"} fontSize='24px'>
                  For borrowers
                </Text>
                <Text fontWeight={"600"}>
                  Access permissionless liquidity across multiple
                  <br /> blockchains for your fund, startup, real estate or
                  other
                  <br /> financial needs
                </Text>
              </Flex>

              <Flex mb={10} flexDirection={"column"}>
                <Text fontWeight={"bold"} fontSize='24px'>
                  For lenders
                </Text>
                <Text fontWeight={"600"}>
                  Lend any tokenized asset to verified counter-parties to
                  <br />
                  support their real-life causes and initiatives
                </Text>
              </Flex>

              <Flex flexDirection={"column"}>
                <Text fontWeight={"bold"} fontSize='24px'>
                  For institutions
                </Text>
                <Text fontWeight={"600"}>
                  Borrow or lend liquid tokenized assets with institutional-
                  <br />
                  grade security to meet your company financial needs and <br />{" "}
                  goals
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
            <Text fontSize={isMobileDevice ? "24px" : "44px"} fontWeight='700'>
              Community Led DAO
            </Text>
            <Text
              px={isMobileDevice ? 5 : 0}
              textAlign={isMobileDevice ? "center" : undefined}
            >
              Propose protocol suggestions and improvements within seconds
              through our community forum.
            </Text>

            <Flex
              mt={isMobileDevice ? 5 : 20}
              minW={isMobileDevice ? "80vw" : "70vw"}
              justifyContent={"space-between"}
              alignItems={isMobileDevice ? "center" : undefined}
              flexDirection={isMobileDevice ? "column" : "row"}
            >
              <DaoCard
                title='Engage'
                text={
                  <Text fontSize={"14px"}>
                    Learn more about initiatives <br />
                    proposed by community <br /> members
                  </Text>
                }
              />

              {/* <Flex mx={5}> */}
              <DaoCard
                title='Propose'
                text={
                  <Text fontSize={"14px"}>
                    Publish your own suggestions
                    <br /> or improvements for the <br /> protocol
                  </Text>
                }
              />
              {/* </Flex> */}

              <DaoCard
                title='Vote'
                text={
                  <Text fontSize={"14px"}>
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
          // border='1px solid red'
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
              <Text textAlign={"center"} fontSize={"44px"} fontWeight='700'>
                Treasury balance
              </Text>

              <Text px={isMobileDevice ? 5 : 0} textAlign={"center"}>
                Multichainz has a robust ecosystem treasury reserve composed by
                foundation tokens and protocol fees and interests
              </Text>
            </>
          )}
          <Img
            w={isMobileDevice ? undefined : "50%"}
            src={isMobileDevice ? blurelipsemobile.src : blurelipse.src}
          />

          <RadialMenu />

          <Flex pb={10} alignItems={"center"} flexDirection={"column"}>
            <Text fontSize={"24px"} fontWeight='700'>
              $X
            </Text>
            <Text>Total Ecosystem Reserve</Text>
          </Flex>
        </Flex>
        <Flex
          background={
            "linear-gradient(90deg, rgba(73,168,252,1) 0%, rgba(12,86,219,1) 100%)"
          }
          position='relative'
        >
          <Flex h={isMobileDevice ? "130vh" : "100vh"}>
            <Text
              // backgroundClip={"text"}
              // fill='transparent'

              className={styles.text}
              fontSize={"120px"}
              fontWeight='bold'
              textAlign={"center"}
            >
              WEB3 CRYPTO WALLET <br /> LENDING STAKING <br /> NFT CONTRACT
              TOKENS SECURITY
            </Text>
          </Flex>
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
              w={isMobileDevice ? "80vw" : "70vw"}
              backdropFilter={"blur(20px)"}
              flexDirection={isMobileDevice ? "column" : undefined}
              alignItems='center'
              border='1px solid rgba(255, 255, 255, 0.12)'
              px={5}
            >
              <Text fontSize={"30px"} fontWeight='bold' color='white'>
                Audited and <br /> Verified by
              </Text>
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
                >
                  <Img w='150px' h='30px' src={quillhash.src} />
                </Flex>
                {/* <Img src={peckshield.src} />
                <Img src={quillhash.src} /> */}
              </Flex>
            </Flex>

            <Flex
              py={10}
              // position='absolute'
              flexDirection='column'
              justifyContent={"space-between"}
              w={isMobileDevice ? "80vw" : "70vw"}
              mt={isMobileDevice ? 5 : 0}
              my={isMobileDevice ? 0 : 10}
              backdropFilter={"blur(20px)"}
              alignItems='center'
              border='1px solid rgba(255, 255, 255, 0.12)'
              px={5}
            >
              <Text fontSize={"30px"} fontWeight='bold' color='white'>
                Ecosystem Integration partners
              </Text>
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
            <Flex
              // mt={60}
              // background={
              //   "linear-gradient(90deg, rgba(73,168,252,1) 0%, rgba(12,86,219,1) 100%)"
              // }
              flexDirection={"column"}
              w='100vw'
              px={5}
              // zIndex={200}
              // position='absolute'
            >
              <Text
                fontWeight={"500"}
                textAlign='center'
                mt={isMobileDevice ? 5 : 0}
                mb={10}
                fontSize='30px'
                color='white'
              >
                Backed by
              </Text>

              <Flex justifyContent={"space-between"}>
                <Img src={binancebacked.src} />
                <Img src={polygonbacked.src} />
                <Img src={okxbacked.src} />
                <Img src={fantombacked.src} />
                <Img src={ethereumbacked.src} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Footer */}
        <Flex
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
        </Flex>
      </Box>
    </Box>
  );
};

export default Landing1;
