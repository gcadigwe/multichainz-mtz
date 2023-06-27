import { Box, Img, Text, Flex, useMediaQuery, Heading } from "@chakra-ui/react";

interface CardProps {
  title: string;
  text: any;
}

const DaoCard = ({ title, text }: CardProps) => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      w='280px'
      flexDirection={"column"}
      flex={0.3}
      backdropFilter={"blur(10px)"}
      boxShadow={"0px 4px 49px 0px rgba(0, 7, 72, 0.12)"}
      bgColor={"rgba(255, 255, 255, 0.3)"}
      py={8}
      px={8}
      borderRadius='12px'
      h='250px'
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
