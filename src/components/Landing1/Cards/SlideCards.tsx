import { Flex, Box, Text } from "@chakra-ui/react";

interface CardProps {
  title: any;
  text: any;
}

const SlideCard = ({ title, text }: CardProps) => {
  return (
    <Box
      w='300px'
      boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
      bgColor={"rgba(255, 255, 255, 0.62)"}
      py={8}
      px={8}
      borderRadius='12px'
    >
      {text}
      <Flex>
        <Text fontSize={"12px"}>LEARN MORE</Text>
      </Flex>
    </Box>
  );
};
