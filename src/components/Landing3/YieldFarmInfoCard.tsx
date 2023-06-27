import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";

const YieldFarmInfoCard = ({
  number,
  title,
  info,
}: {
  number: number;
  title: string;
  info: any;
}) => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      flexDirection={"column"}
      borderRadius={"20px"}
      bgColor={"white"}
      position={"relative"}
      flex={0.24}
      mt={isMobileDevice ? 10 : undefined}
    >
      <Flex
        w='100%'
        justifyContent={"center"}
        position={"absolute"}
        top={{ sm: -6, lg: -6, xl: -14 }}
      >
        <Flex
          boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
          fontSize={{ sm: "32px", lg: "32px", xl: "45px" }}
          fontWeight='700'
          p={4}
          w={{ sm: "50px", lg: "50px", xl: "80px" }}
          h={{ sm: "50px", lg: "50px", xl: "80px" }}
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

      <Heading
        pt={{ sm: 6, lg: 6, xl: 10 }}
        textAlign={"center"}
        fontSize={{ sm: "24px", lg: "24px", xl: "28px" }}
        fontWeight='700'
      >
        {title}
      </Heading>
      <Flex
        pt={4}
        pb={6}
        px={4}
        fontSize={{ sm: "14px", lg: "16px", xl: "18px" }}
        justifyContent={"center"}
      >
        {info}
      </Flex>
    </Flex>
  );
};

export default YieldFarmInfoCard;
