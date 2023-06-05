import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Img, Text } from "@chakra-ui/react";

export default function GovernanceCard({
  title,
  text,
}: {
  title: string;
  text: any;
}) {
  return (
    <Box>
      <Flex
        position={"relative"}
        border='1px solid rgba(255, 255, 255, 0.2)'
        color='white'
        px={4}
        py={4}
        h='220px'
        background='linear-gradient(180deg, rgba(32,114,230,1) 50%, rgba(85,155,240,1) 100%)'
        flexDirection={"column"}
        borderRadius='10px'
      >
        <Text mb={5} fontWeight='700' fontSize={"30px"}>
          {title}
        </Text>
        {text}
        <Flex position={"absolute"} bottom={4} mt={5} alignItems={"center"}>
          <Text fontSize={"14px"}>Go to Forum</Text>
          <ArrowForwardIcon />
        </Flex>
      </Flex>
    </Box>
  );
}
