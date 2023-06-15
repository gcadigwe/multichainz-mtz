import { Flex, Box, Text, useMediaQuery, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface CardProps {
  title: any;
  text: any;
}

const SlideCard = ({ title, text }: CardProps) => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      // flex={0.3}
      position={"relative"}
      flexDirection={"column"}
      justifyContent='center'
      minW={{ sm: "300px", lg: "300px", xl: "350px" }}
      mr={isMobileDevice ? 0 : 5}
      bgColor={"white"}
      py={8}
      px={8}
      borderRadius='12px'
      h={{ lg: "250px", xl: "280px" }}
    >
      <Heading mb={5} fontWeight={"bold"} fontSize={{ lg: "18px", xl: "20px" }}>
        {title}
      </Heading>
      {text}
      <Flex
        mt={4}
        alignItems={"center"}
        fontWeight={"bold"}
        fontSize='14px'
        color='#437EF7'
        position={"absolute"}
        bottom={5}
      >
        <Text fontSize={"12px"}>READ MORE</Text>
        <ArrowForwardIcon />
      </Flex>
    </Flex>
  );
};

export default SlideCard;
