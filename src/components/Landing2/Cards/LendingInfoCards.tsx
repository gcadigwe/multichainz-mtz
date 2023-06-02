import { Box, Flex, Img, Text } from "@chakra-ui/react";

export default function LendingInfoCards({
  img,
  text,
}: {
  img: any;
  text: any;
}) {
  return (
    <Box minW='300px'>
      <Img borderTopRadius='10px' w='300px' h='150px' src={img} />
      <Flex
        w='300px'
        px={4}
        py={4}
        bgColor={"#D3E7F7"}
        flexDirection={"column"}
        borderBottomRadius='10px'
      >
        {text}
        <Text mt={4} fontSize={"14px"}>
          Learn More
        </Text>
      </Flex>
    </Box>
  );
}
