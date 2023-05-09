import { Button, Flex, Img, Text, Box } from "@chakra-ui/react";
import logo from "../../../assets/svg/multichainzlogo.svg";

const Navbar = () => {
  return (
    <Flex
      w='70vw'
      //   border='1px solid red'
      alignItems={"center"}
      py={4}
      justifyContent={"space-between"}
    >
      <Img src={logo.src} />

      <Flex>
        <Text>Products</Text>
        <Text mx={3}>Markets</Text>
        <Text>Governance</Text>
        <Text mx={3}>Documentation</Text>
      </Flex>

      <Button fontSize={"14px"} bgColor='#49A8FC' color='white'>
        Launch App
      </Button>
    </Flex>
  );
};

export default Navbar;
