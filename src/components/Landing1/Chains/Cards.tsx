import { Box, Img, Text, Flex, useMediaQuery } from "@chakra-ui/react";

interface CardProps {
  img: any;
  text: any;
}

const Cards = ({ img, text }: CardProps) => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Box
      minW='300px'
      boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
      bgColor={"rgba(255, 255, 255, 0.62)"}
      py={8}
      px={8}
      borderRadius='12px'
      mt={isMobileDevice ? 5 : undefined}
    >
      <Img h='50px' w='150px' src={img} />
      {text}
      <Flex>
        <Text fontSize={"12px"}>LEARN MORE</Text>
      </Flex>
    </Box>
  );
};

export default Cards;
