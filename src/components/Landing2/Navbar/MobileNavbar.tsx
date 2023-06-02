import { Box, Flex, Slide, Img, Text, Button } from "@chakra-ui/react";
import logo from "../../../assets/svg/multichainzlogo.svg";
import { CloseIcon } from "@chakra-ui/icons";

const MobileNavbar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <Slide direction='left' style={{ zIndex: 10 }} in={isOpen}>
      <Box
        h='100vh'
        background={
          "linear-gradient(90deg, rgba(204,220,247,1) 0%, rgba(225,238,252,1) 100%)"
        }
        py={4}
        px={5}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Img src={logo.src} />
          <CloseIcon onClick={toggle} />
        </Flex>

        <Flex mt={10} flexDirection={"column"}>
          <Text>Products</Text>
          <Text my={5}>Markets</Text>
          <Text>Governance</Text>
          <Text my={5}>Documentation</Text>

          <Button mt={10} fontSize={"14px"} bgColor='#49A8FC' color='white'>
            Launch App
          </Button>
        </Flex>
      </Box>
    </Slide>
  );
};

export default MobileNavbar;
