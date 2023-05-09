import Navbar from "@/components/Landing1/Navbar";
import { Box, Img, Flex, Text, Button } from "@chakra-ui/react";
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

const Landing1 = () => {
  return (
    <Box>
      <Flex
        background={
          "linear-gradient(90deg, rgba(204,220,247,1) 0%, rgba(225,238,252,1) 100%)"
        }
        justifyContent='center'
      >
        <Navbar />
      </Flex>

      <Box
        background={
          "linear-gradient(90deg, rgba(195,215,247,1) 0%, rgba(221,235,251,1) 100%)"
        }
        pb={10}
      >
        <Flex position={"relative"} justifyContent={"center"}>
          <Img w='50%' src={eclipsebg.src} />
          <Flex
            w='100%'
            top={"30%"}
            position={"absolute"}
            flexDirection='column'
            alignItems={"center"}
          >
            <Text fontSize={"70px"} fontWeight='bold'>
              MultichainZ Protocol
            </Text>
            <Text my={5} fontSize={"30px"} fontWeight='400'>
              Lend, borrow, and stake crypto, NFT, and
              <br /> tokenized real-world assets in any chain
            </Text>

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
              mt={40}
              w='70vw'
              fontWeight={"bold"}
              fontSize={"14px"}
              justifyContent='space-between'
            >
              <Flex alignItems={"center"}>
                <Img mr={2} src={wallet.src} />
                <Text fontWeight={"bold"} fontSize={"14px"}>
                  NFT/RWA Lending
                </Text>
              </Flex>

              <Flex alignItems={"center"}>
                <Img mr={2} src={crosschain.src} />
                <Text fontWeight={"bold"} fontSize={"14px"}>
                  Cross-chain infrastructure
                </Text>
              </Flex>

              <Flex alignItems={"center"}>
                <Img mr={2} src={institution.src} />
                <Text fontWeight={"bold"} fontSize={"14px"}>
                  Institutional Compliance
                </Text>
              </Flex>

              <Flex alignItems={"center"}>
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
        py={20}
        // px={36}

        background={
          "linear-gradient(90deg, rgba(235,242,248,1) 0%, rgba(182,217,245,1) 100%)"
        }
      >
        <Flex
          alignItems={"center"}
          flexDirection={"column"}
          border='1px solid red'
        >
          <Flex w='70vw'>
            <Text fontSize={"30px"} fontWeight='500'>
              $X locked in collateral to back the loans
            </Text>
          </Flex>

          <Flex
            w='70vw'
            mt={5}
            border='1px solid red'
            justifyContent={"space-between"}
          >
            <Flex
              textAlign={"center"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Text fontWeight={"700"} fontSize={"40px"}>
                $xx Million+
              </Text>
              <Text>Processed Loans</Text>
            </Flex>

            <Flex flexDirection={"column"} justifyContent={"center"}>
              <Text fontWeight={"700"} fontSize={"40px"}>
                $M+
              </Text>
              <Text>World Users</Text>
            </Flex>

            <Flex flexDirection={"column"} justifyContent={"center"}>
              <Text fontWeight={"700"} fontSize={"40px"}>
                20+
              </Text>
              <Text>Reached Countries</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex border='1px solid red' justifyContent={"center"}>
          <Flex w='70vw' mt={10} flexDirection={"column"}>
            <Text fontWeight={"700"} color='#8F979C' fontSize={"40px"}>
              Explore MultichainZ
            </Text>
            <Text lineHeight={"1.2"} fontWeight={"700"} fontSize='38px'>
              Community Pools <br /> across Multiple Chains
            </Text>
          </Flex>
        </Flex>

        <Flex justifyContent={"center"} border='1px solid red'>
          <Flex w='70vw' mt={10} justifyContent='space-between'>
            <Cards
              img={ethereum.src}
              text={
                <Text mb={5} fontSize={"14px"}>
                  Access 450k+ tokens through the <br /> largest chain for dApps
                </Text>
              }
            />
            <Cards
              img={fantom.src}
              text={
                <Text mb={5} fontSize={"14px"}>
                  Access speed and security in your <br /> loan transactions.
                </Text>
              }
            />

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

        <Flex justifyContent={"center"} border='1px solid red'>
          <Flex w='70vw' mt={10} justifyContent='space-between'>
            <Cards
              img={polygon.src}
              text={
                <Text mb={5} fontSize={"14px"}>
                  Unlock lower fees and higher <br /> scalability with this
                  scaling technology
                </Text>
              }
            />
            <Cards
              img={avalanche.src}
              text={
                <Text mb={5} fontSize={"14px"}>
                  Enjoy efficiency and security <br /> robustness in your loans
                </Text>
              }
            />
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

        <Flex mt={12} alignItems={"center"} flexDirection={"column"}>
          <Text fontSize={"18px"} fontWeight={"bold"}>
            Enabling Institutional Lending
          </Text>
          <Text>
            Institutional features to enhance on-chain lending security and
            trust
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Landing1;
