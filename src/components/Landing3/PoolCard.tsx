import {
  Box,
  Img,
  Text,
  Flex,
  useMediaQuery,
  Heading,
  Icon,
} from "@chakra-ui/react";
import roundpolygon from "../../assets/svg/roundpolygon.svg";
import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface CardProps {
  img: any;
  text: any;
}

const PoolCard = () => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (isMobileDevice) {
      setHovered(true);
    }
  }, [isMobileDevice]);
  return (
    <Flex
      maxW='500px'
      cursor={"pointer"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // boxShadow={}
      boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.12)"}
      _hover={{
        boxShadow: "0px 3px 38px 0px rgba(0, 7, 72, 0.3)",
      }}
      py={4}
      px={4}
      borderRadius='12px'
      bg={"rgba(255, 255, 255, 0.4)"}
      mt={isMobileDevice ? 5 : undefined}
      flexDirection='column'
      flex={0.3}
      h={{ sm: "200px", lg: "200px", xl: "250px" }}
    >
      <Flex justifyContent={"space-between"}>
        <Img h='24px' w='24px' src={roundpolygon.src} />

        <Flex visibility={hovered ? "visible" : "hidden"} alignItems={"center"}>
          <Text
            fontWeight={"600"}
            fontSize={{ sm: "14px", lg: "16px", xl: "18px" }}
            color='#437EF7'
          >
            Add Liquidity
          </Text>
          <Icon color='#437EF7' as={IoIosArrowRoundForward} />
        </Flex>
      </Flex>

      <Flex justifyContent={"space-between"} alignItems='center' h='100%'>
        <Flex alignItems={"center"}>
          <Img
            w={{ sm: "50px", lg: "50px", xl: "80px" }}
            src={roundpolygon.src}
          />
          <Flex ml={2} flexDirection={"column"}>
            <Heading fontSize={{ lg: "16px", xl: "20px" }} fontWeight={"bold"}>
              Polygon
            </Heading>
            <Text fontSize={{ sm: "14px", lg: "14px", xl: "16px" }}>Matic</Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} alignItems='center'>
          <Text fontSize={{ sm: "14px", lg: "14px", xl: "16px" }}>
            Liquidity
          </Text>
          <Text
            fontWeight={"700"}
            fontSize={{ sm: "20px", lg: "20px", xl: "24px" }}
          >
            10%
          </Text>
          <Text fontSize={{ sm: "14px", lg: "14px", xl: "16px" }} mt={4}>
            Vault APY
          </Text>
          <Text
            fontWeight={"700"}
            fontSize={{ sm: "20px", lg: "20px", xl: "24px" }}
          >
            12%
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PoolCard;
