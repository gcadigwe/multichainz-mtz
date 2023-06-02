import {
  Flex,
  Img,
  Input,
  InputRightAddon,
  Icon,
  Text,
  Button,
  InputGroup,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaDiscord, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import multichainz from "../../assets/svg/multichainzlogo.svg";

export default function Footer() {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");

  return (
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
        <Img w={isMobileDevice ? "250px" : undefined} src={multichainz.src} />
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
                  <Button color='white' borderRadius={"0"} bgColor={"#61ACFD"}>
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
                <Button color='white' borderRadius={"0"} bgColor={"#61ACFD"}>
                  subscribe
                </Button>
              </InputRightAddon>
            </InputGroup>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
