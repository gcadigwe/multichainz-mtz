import { Box, Img, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import linkicon from "../../../assets/svg/linkicon.svg";

interface CardProps {
  img: any;
  text: any;
}

const Cards = ({ img, text }: CardProps) => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      cursor={"pointer"}
      position={"relative"}
      flexDirection='column'
      flex={0.3}
      h='250px'
      maxW={"500px"}
      w={{ sm: "auto", md: "500px", lg: "auto", xl: "auto" }}
      _hover={{
        boxShadow: "0px 4px 49px 0px rgba(0, 7, 72, 0.12)",
      }}
      // boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
      bgColor={"rgba(255, 255, 255, 0.62)"}
      py={8}
      px={8}
      borderRadius='12px'
      mt={{ sm: 5, md: 5, lg: 0, xl: 0 }}
    >
      <Img h='50px' w={{ lg: "150px", xl: "200px" }} src={img} mb={6} />
      {text}
      <Flex alignItems={"center"} position={"absolute"} bottom={4}>
        <Text fontSize={"12px"}>LEARN MORE</Text>
        <Img mb={1} src={linkicon.src} />
      </Flex>
    </Flex>
  );
};

export default Cards;
