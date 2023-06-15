import { Box, Img, Text, Flex, useMediaQuery, Heading } from "@chakra-ui/react";

interface CardProps {
  title: string;
  text: any;
}

const DaoCard = ({ title, text }: CardProps) => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      maxW='500px'
      flexDirection={"column"}
      flex={0.3}
      backdropFilter={"blur(10px)"}
      boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
      bgColor={"transparent"}
      py={8}
      px={8}
      borderRadius='12px'
      mt={isMobileDevice ? 5 : 0}
    >
      <Heading
        fontWeight={"bold"}
        fontSize={{ sm: "20px", lg: "30px", xl: "40px" }}
        mb={5}
      >
        {title}
      </Heading>
      {text}
    </Flex>
  );
};

export default DaoCard;
