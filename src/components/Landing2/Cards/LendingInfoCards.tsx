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
      // position={"absolute"}
      // border='1px solid red'
      boxShadow={
        isMobileDevice ? undefined : "0px 9px 50px -15px rgba(0, 7, 72, 0.12)"
      }
      flexDirection={"column"}
      minW={isMobileDevice ? "300px" : undefined}
      borderTopRadius='10px'
      borderBottomRadius='10px'
      bgColor='rgba(255, 255, 255, 0.26)'
    >
      <Img borderTopRadius='10px' src={img} />
      <Flex
        px={6}
        pt={4}
        h='100%'
        flexDirection={"column"}
        borderBottomRadius='10px'
      >
        {text}
      </Flex>

      <Text pb={4} px={6} mt={4} fontSize={"14px"}>
        Learn More
      </Text>
    </Flex>
  );
}
