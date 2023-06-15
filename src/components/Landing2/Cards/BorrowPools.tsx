import {
  Box,
  Img,
  Text,
  Flex,
  useMediaQuery,
  Icon,
  Heading,
} from "@chakra-ui/react";
import roundpolygon from "../../../assets/svg/roundpolygon.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";

interface CardProps {
  img: any;
  text: any;
}

const BorrowLend = () => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const [hovered, setHovered] = useState(false);
  return (
    <Flex
      maxW='500px'
      cursor={"pointer"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // boxShadow={}
      _hover={{
        boxShadow: "0px 0px 40px -14px rgba(0,0,0,0.75)",
      }}
      //   bgColor={"rgba(255, 255, 255, 0.62)"}
      py={4}
      px={4}
      borderRadius='12px'
      bg={"rgba(255, 255, 255, 0.4)"}
      mt={isMobileDevice ? 5 : undefined}
      flexDirection='column'
      flex={0.3}
      h='200px'
    >
      <Flex justifyContent={"space-between"}>
        <Img h='24px' w='24px' src={roundpolygon.src} />

        <Flex visibility={hovered ? "visible" : "hidden"} alignItems={"center"}>
          <Text color='#437EF7'>Borrow/Lend</Text>
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
            <Text fontSize={"14px"}>Matic</Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} alignItems='center'>
          <Text fontSize={"14px"}>Borrowing APY</Text>
          <Text fontWeight={"700"} fontSize='20px'>
            %X
          </Text>
          <Text fontSize={"14px"} mt={4}>
            Lending APY
          </Text>
          <Text fontWeight={"700"} fontSize='20px'>
            %X
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BorrowLend;
