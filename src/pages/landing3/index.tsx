import Navbar from "@/components/Landing2/Navbar";
import PoolCard from "@/components/Landing3/PoolCard";
import YieldFarmInfoCard from "@/components/Landing3/YieldFarmInfoCard";
import { Flex, Img, Box, Text, Button, Input, Select } from "@chakra-ui/react";
import flowerbg from "../../assets/flowerbg.png";
import underline from "../../assets/svg/underline.svg";
import security from "../../assets/svg/security.svg";
import efficiency from "../../assets/svg/landing3efficiency.svg";
import flexibility from "../../assets/svg/flexibility.svg";
import diversification from "../../assets/svg/diversification.svg";
import colorbar from "../../assets/svg/colorbar.svg";
import calculator from "../../assets/calculator.png";
import activebinance from "../../assets/svg/activebinance.svg";
import inactiveethereum from "../../assets/svg/inactiveethereum.svg";
import inactivefantom from "../../assets/svg/inactivefantom.svg";
import inactivepolygon from "../../assets/svg/inactivepolygon.svg";
import inactiveavalanche from "../../assets/svg/inactiveavalance.svg";
import inactiveoptimism from "../../assets/svg/inactiveoptimism.svg";
import quillhash from "../../assets/svg/quickshill.svg";
import halborn from "../../assets/svg/halborn.svg";
import peckshield from "../../assets/svg/peckshield.svg";
import Footer from "@/components/Footer";

export default function Landing3() {
  return (
    <Box bgColor={"#CDE6FA"}>
      <Box bgColor={"#CDE6FA"} position={"relative"}>
        <Flex justifyContent={"center"}>
          <Navbar />
        </Flex>

        <Flex justifyContent={"space-between"}>
          <Flex position={"absolute"} justifyContent={"center"} w='100vw'>
            <Box w='70vw' mt={20}>
              <Text fontSize={"60px"} fontWeight='700'>
                Earn <br /> In Multiple Chains
              </Text>

              <Text my={10}>
                The protocol that allows you to earn interest
                <br />
                in an easy and interoperable way
              </Text>

              <Flex mt={20} justifyContent={"flex-start"}>
                <Flex flexDirection={"column"} alignItems='center'>
                  <Flex>
                    <Box>
                      <Flex
                        justifyContent={"center"}
                        bgColor={"#8CDFD9"}
                        borderRadius='12px'
                      >
                        <Text
                          textAlign={"center"}
                          color={"white"}
                          fontSize={"30px"}
                          fontWeight='700'
                        >
                          $X
                        </Text>
                      </Flex>

                      <Text>Total Liquidity</Text>
                    </Box>

                    <Box ml={5}>
                      <Flex
                        justifyContent={"center"}
                        borderRadius='12px'
                        bgColor='#95ADF5'
                      >
                        <Text
                          color={"white"}
                          fontSize={"30px"}
                          fontWeight='700'
                        >
                          $X
                        </Text>
                      </Flex>

                      <Text>Total Rewards</Text>
                    </Box>
                  </Flex>
                  <Button
                    mt={10}
                    fontSize={"14px"}
                    bgColor='#49A8FC'
                    color='white'
                  >
                    Launch App
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </Flex>
          <Flex w='100%' justifyContent={"flex-end"}>
            <Img w='60%' src={flowerbg.src} />
          </Flex>
        </Flex>
      </Box>

      <Flex justifyContent={"center"}>
        <Box w='70vw'>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Flex alignItems={"center"} flexDirection={"column"}>
              <Text fontSize={"40px"} fontWeight='700'>
                Our Pools
              </Text>
              <Img w='200px' src={underline.src} />
              <Text textAlign={"center"}>
                Provide liquidity and earn interests in Multichainz yield pools
              </Text>
            </Flex>
          </Flex>

          <Flex mt={20} mb={10} justifyContent={"space-between"}>
            <PoolCard />

            <Flex mx={5}>
              <PoolCard />
            </Flex>

            <PoolCard />
          </Flex>

          <Flex justifyContent={"space-between"}>
            <PoolCard />

            <Flex mx={5}>
              <PoolCard />
            </Flex>

            <PoolCard />
          </Flex>

          <Flex mt={40} justifyContent='center'>
            <Text fontSize={"40px"} fontWeight='700'>
              Yield Farming Made Safer and Easier
            </Text>
          </Flex>

          <Flex mt={10} justifyContent='space-between'>
            <YieldFarmInfoCard
              number={1}
              title={"Get Verified"}
              info={
                <Text textAlign={"center"} fontSize='14px'>
                  Submit Your KYC verification <br /> and get it approved
                </Text>
              }
            />

            <Flex mx={2}>
              <YieldFarmInfoCard
                number={2}
                title={"Add Liquidity"}
                info={
                  <Text textAlign={"center"} fontSize='14px'>
                    Add any amount of liquidity <br /> into any of our yield
                    pools
                  </Text>
                }
              />
            </Flex>

            <Flex mr={2}>
              <YieldFarmInfoCard
                number={3}
                title={"Choose Terms"}
                info={
                  <Text textAlign={"center"} fontSize='14px'>
                    Select the time you want to <br /> lock your liquidity for
                  </Text>
                }
              />
            </Flex>

            <YieldFarmInfoCard
              number={4}
              title={"Earn Rewards"}
              info={
                <Text textAlign={"center"} fontSize='14px'>
                  Redeem your interest rewards <br /> once the locked time ends
                </Text>
              }
            />
          </Flex>

          <Flex mt={10} justifyContent={"center"}>
            <Button fontSize={"14px"} bgColor='#49A8FC' color='white'>
              Start Now
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Flex mt={40} justifyContent={"center"}>
        <Box w='70vw'>
          <Text fontSize={"40px"} fontWeight='700'>
            Why Farm <br />
            With Multichainz:
          </Text>
          <Flex flex={1} mt={10} justifyContent={"space-between"}>
            <Flex flex={0.4}>
              <Box w='100%' px={8} py={6} bgColor={"white"}>
                <Img w='50px' h='50px' src={security.src} />
                <Text my={3} fontWeight={"700"} fontSize={"24px"}>
                  Security
                </Text>
                <Img src={colorbar.src} />

                <Text mt={3}>
                  MultichainZ has institutional-grade <br /> asset custody
                  ensuring high funds <br /> security at all times
                </Text>
              </Box>
            </Flex>

            <Flex flex={0.4}>
              <Box w='100%' px={8} py={6} bgColor={"white"}>
                <Img w='50px' h='50px' src={efficiency.src} />
                <Text my={3} fontWeight={"700"} fontSize={"24px"}>
                  Efficiency
                </Text>
                <Img src={colorbar.src} />

                <Text mt={3}>
                  MultichainZ has embedded risk/liquidity <br /> efficiency
                  mechanisms to <br /> maximize returns
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Flex flex={1} mt={10} justifyContent={"space-between"}>
            <Flex flex={0.4}>
              <Box w='100%' px={8} py={6} bgColor={"white"}>
                <Img w='50px' h='50px' src={flexibility.src} />
                <Text my={3} fontWeight={"700"} fontSize={"24px"}>
                  Flexibility
                </Text>
                <Img src={colorbar.src} />

                <Text mt={3}>
                  MultichainZ Gives flexible terms to <br /> every type of
                  investors without fixed <br /> locking commitments
                </Text>
              </Box>
            </Flex>

            <Flex flex={0.4}>
              <Box w='100%' px={8} py={6} bgColor={"white"}>
                <Img w='50px' h='50px' src={diversification.src} />
                <Text my={3} fontWeight={"700"} fontSize={"24px"}>
                  Diversification
                </Text>
                <Img src={colorbar.src} />

                <Text mt={3}>
                  MultichainZ provides pools in <br /> diffferent chains to
                  ensure liquidity <br /> diversification and returns
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Flex mt={40} justifyContent={"center"}>
        <Box w='70vw'>
          <Text fontSize={"40px"} fontWeight='700'>
            Calculate Your Potential Rewards
          </Text>

          <Flex mt={10} justifyContent={"space-between"}>
            <Img src={calculator.src} />
            <Flex pt={5} flexDirection={"column"}>
              <Flex flexDirection={"column"}>
                <Text>Amount to lock, USD</Text>
                <Input bgColor='white' />
              </Flex>

              <Flex mt={5} flexDirection={"column"}>
                <Text>Your Return</Text>
                <Input bgColor='white' />
              </Flex>

              <Button mt={5} color='white' fontSize={"14px"} bgColor='#49A8FC'>
                Earn Now
              </Button>
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
          </Flex>
        </Box>
      </Flex>

      <Flex
        background='radial-gradient(circle, rgba(73,168,252,1) 0%, rgba(12,86,219,1) 100%)'
        alignItems={"center"}
        flexDirection='column'
        py={10}
      >
        <Text
          textAlign={"center"}
          fontSize={"40px"}
          fontWeight='700'
          color='white'
        >
          Diversify the Capital of Your Company
        </Text>

        <Text
          color='white'
          mt={10}
          textAlign={"center"}
          fontSize='20px'
          fontWeight={"700"}
        >
          Multichainz Yield Farming solution is the perfect alternative to
          low-risk <br /> capital investments for companies. Contact us to get
          support for adding <br /> liquidity to our pools with or without a
          wallet.
        </Text>

        <Flex my={10} justifyContent={"center"}>
          <Button
            background={
              "linear-gradient(90deg, rgba(225,241,255,1) 0%, rgba(208,230,255,1) 100%)"
            }
            color='#125EDF'
          >
            Get Support
          </Button>
        </Flex>

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
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
}
