import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

export default function GovernanceCard({
  title,
  text,
  bottomText,
}: {
  title: string;
  text: any;
  bottomText: string;
}) {
  return (
    <Box
      cursor={"pointer"}
      _hover={{
        boxShadow: "0px 0px 40px -14px rgba(0,0,0,0.4)",
      }}
    >
      <Flex
        position={"relative"}
        border='1px solid rgba(255, 255, 255, 0.2)'
        color='white'
        px={4}
        py={4}
        h='220px'
        backdropFilter={"blur(120px)"}
        background='linear-gradient(360deg, rgba(255,255,255,0.14) 0%, rgba(75,115,255,0.15) 100%)'
        // background='linear-gradient(180deg, rgba(32,114,230,1) 50%, rgba(85,155,240,1) 100%)'
        flexDirection={"column"}
        borderRadius='10px'
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
