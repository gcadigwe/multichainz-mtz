import { Box, Img, Text, Flex, useMediaQuery } from "@chakra-ui/react";

interface CardProps {
  title: string;
  text: any;
}

const DaoCard = ({ title, text }: CardProps) => {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Box
      w='280px'
      backdropFilter={"blur(10px)"}
      boxShadow={"0px 0px 40px -14px rgba(0,0,0,0.75)"}
      bgColor={"transparent"}
      py={8}
      px={8}
      borderRadius='12px'
      mt={isMobileDevice ? 5 : 0}
    >
      <Text fontWeight={"bold"} fontSize='30px' mb={5}>
        {title}
      </Text>
      {text}
    </Box>
  );
};

export default DaoCard;
