import { Box, Img, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import roundpolygon from "../../../assets/svg/roundpolygon.svg";

interface CardProps {
  img: any;
  text: any;
}

const BorrowLend = () => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Box
      minW='300px'
      boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
      //   bgColor={"rgba(255, 255, 255, 0.62)"}
      py={4}
      px={4}
      borderRadius='12px'
      bgColor={"#D3E7F7"}
      mt={isMobileDevice ? 5 : undefined}
    >
      <Img h='24px' w='24px' src={roundpolygon.src} />

      <Flex justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Img src={roundpolygon.src} />
          <Flex ml={2} flexDirection={"column"}>
            <Text>Polygon</Text>
            <Text>Matic</Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"}>
          <Text>Borrowing APY</Text>
          <Text fontWeight={"700"} fontSize='20px'>
            %X
          </Text>
          <Text mt={4}>Lending APY</Text>
          <Text fontWeight={"700"} fontSize='20px'>
            %X
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default BorrowLend;
