import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Img, Text, useMediaQuery } from "@chakra-ui/react";

export default function GovernanceCard({
  title,
  text,
  bottomText,
}: {
  title: string;
  text: any;
  bottomText: string;
}) {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Box
      cursor={"pointer"}
      _hover={{
        boxShadow: "0px 4px 49px 0px rgba(0, 7, 72, 0.12)",
      }}
    >
      <Flex
        position={"relative"}
        border='1px solid rgba(255, 255, 255, 0.3)'
        color='white'
        px={4}
        py={4}
        h='220px'
        backdropFilter={"blur(120px)"}
        bgColor='rgba(255, 255, 255, 0.08)'
        // bg='linear-gradient(360deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)'
        // background='linear-gradient(360deg, rgba(255,255,255,0.14) 0%, rgba(75,115,255,0.15) 100%)'
        // background='linear-gradient(180deg, rgba(32,114,230,1) 50%, rgba(85,155,240,1) 100%)'
        flexDirection={"column"}
        borderRadius='10px'
        w={isMobileDevice ? "80vw" : undefined}
      >
        <Heading mb={5} fontWeight='700' fontSize={"30px"}>
          {title}
        </Heading>
        {text}
        <Flex position={"absolute"} bottom={4} mt={5} alignItems={"center"}>
          <Text fontWeight={"700"} fontSize={"14px"}>
            {bottomText}
          </Text>
          <ArrowForwardIcon />
        </Flex>
      </Flex>
    </Box>
  );
}
