import { Box, Flex, Text } from "@chakra-ui/react";

const YieldFarmInfoCard = ({
  number,
  title,
  info,
}: {
  number: number;
  title: string;
  info: any;
}) => {
  return (
    <Box borderRadius={"20px"} bgColor={"white"} position={"relative"}>
      <Flex w='100%' justifyContent={"center"} position={"absolute"} top={-6}>
        <Flex
          boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
          fontSize={"32px"}
          fontWeight='700'
          p={4}
          w='50px'
          h='50px'
          bgColor='white'
          // left='50%'
          // right='50%'
          justifyContent='center'
          borderRadius='50%'
          alignItems={"center"}
        >
          <Text color='#1E6EE5'>{number}</Text>
        </Flex>
      </Flex>

      <Text pt={6} textAlign={"center"} fontSize={"24px"} fontWeight='700'>
        {title}
      </Text>
      <Flex pb={6} px={4}>
        {info}
      </Flex>
    </Box>
  );
};

export default YieldFarmInfoCard;
