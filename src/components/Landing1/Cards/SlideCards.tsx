import { Flex, Box, Text, useMediaQuery } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface CardProps {
  title: any;
  text: any;
}

const SlideCard = ({ title, text }: CardProps) => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Box>
      <Flex
        flexDirection={"column"}
        justifyContent='center'
        minW='300px'
        bgColor={"white"}
        py={8}
        px={8}
        mr={isMobileDevice ? 0 : 5}
        borderRadius='12px'
      >
        <Text mb={2} fontWeight={"bold"}>
          {title}
        </Text>
        {text}
        <Flex
          mt={4}
          alignItems={"center"}
          fontWeight={"bold"}
          fontSize='14px'
          color='#437EF7'
        >
          <Text fontSize={"12px"}>READ MORE</Text>
          <ArrowForwardIcon />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SlideCard;
