import { Box, Flex, Img, Text, useMediaQuery } from "@chakra-ui/react";

export default function LendingInfoCards({
  img,
  text,
}: {
  img: any;
  text: any;
}) {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      boxShadow={
        isMobileDevice ? undefined : "0px 0px 40px -14px rgba(0,0,0,0.75)"
      }
      flex={0.3}
      flexDirection={"column"}
      // minW={{ sm: "300px", lg: undefined, xl: "350px" }}
      minW={isMobileDevice ? "300px" : undefined}
    >
      <Img borderTopRadius='10px' src={img} />
      <Flex
        // w='300px'
        px={6}
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
    </Flex>
  );
}
