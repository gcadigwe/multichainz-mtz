import { Flex, Img, Text } from "@chakra-ui/react";
import applicationicon from "../../../assets/svg/applicationicon.svg";
import charticon from "../../../assets/svg/charticon.svg";
import walleticon from "../../../assets/svg/walleticon.svg";
import { useState } from "react";

const FixedMenu = () => {
  const [showWallet, setshowWallet] = useState(false);
  const [showChart, setshowChart] = useState(false);
  const [showApplications, setshowApplications] = useState(false);

  return (
    <Flex
      position={"fixed"}
      background={"rgba(162, 219, 251, 0.86)"}
      flexDirection={"column"}
      alignItems='center'
      borderRadius='20px'
      left={10}
      top={"40%"}
      px={5}
      py={4}
      zIndex={199999}
    >
      <Text fontSize={"14px"} mb={5} color='rgba(36, 34, 32, 0.4)'>
        GO TO
      </Text>

      <Flex
        onMouseEnter={() => setshowApplications(true)}
        onMouseLeave={() => setshowApplications(false)}
        cursor='pointer'
        position={"relative"}
        alignItems='center'
      >
        <Img w='24px' h='24px' src={applicationicon.src} />
        <Flex
          display={showApplications ? "block" : "none"}
          onMouseEnter={() => setshowApplications(true)}
          onMouseLeave={() => setshowApplications(false)}
          left={6}
          background={"rgba(162, 219, 251, 0.86)"}
          border='0.5px solid white'
          position={"absolute"}
          borderRadius='16px'
          px={6}
          py={3}
          cursor={"pointer"}
          _hover={{ background: "#A0CEEA" }}
        >
          <Text fontSize={"14px"} fontWeight={"500"}>
            Apps
          </Text>
        </Flex>
      </Flex>

      <Flex
        onMouseEnter={() => setshowChart(true)}
        onMouseLeave={() => setshowChart(false)}
        cursor='pointer'
        position={"relative"}
        alignItems='center'
      >
        <Img w='24px' my={10} h='24px' src={charticon.src} />
        <Flex
          display={showChart ? "block" : "none"}
          onMouseEnter={() => setshowChart(true)}
          onMouseLeave={() => setshowChart(false)}
          left={6}
          background={"rgba(162, 219, 251, 0.86)"}
          border='0.5px solid white'
          position={"absolute"}
          borderRadius='16px'
          px={6}
          py={3}
          cursor={"pointer"}
          _hover={{ background: "#A0CEEA" }}
        >
          <Text fontSize={"14px"} fontWeight={"500"}>
            Chart
          </Text>
        </Flex>
      </Flex>

      <Flex
        onMouseEnter={() => setshowWallet(true)}
        onMouseLeave={() => setshowWallet(false)}
        cursor='pointer'
        position={"relative"}
        alignItems='center'
      >
        <Img w='30px' h='30px' src={walleticon.src} />
        <Flex
          display={showWallet ? "block" : "none"}
          onMouseEnter={() => setshowWallet(true)}
          onMouseLeave={() => setshowWallet(false)}
          left={6}
          background={"rgba(162, 219, 251, 0.86)"}
          border='0.5px solid white'
          position={"absolute"}
          borderRadius='16px'
          px={6}
          py={3}
          cursor={"pointer"}
          _hover={{ background: "#A0CEEA" }}
        >
          <Text fontSize={"14px"} fontWeight={"500"}>
            Wallet
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FixedMenu;
