import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Img, Flex, Text, useMediaQuery, Button } from "@chakra-ui/react";
import gradient1 from "../../assets/svg/backgroundgradient1.svg";
import multichainz from "../../assets/svg/multichainz.svg";
// import telegram from "../assets/svg/telegram.svg";
// import twitter from "../assets/svg/twitter.svg";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <>
      <Head>
        <title>MultichainZ</title>
        <meta name='description' content='Multichainz Protocol' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.ico' />
      </Head>
      <Box
        h={isMobileDevice ? "100vh" : undefined}
        position={"relative"}
        bgColor={"#070525"}
      >
        <Navbar />

        <Flex
          w='100%'
          h={isMobileDevice ? "100vh" : undefined}
          bgColor={"#070525"}
          position={"relative"}
        >
          {!isMobileDevice && <Img w='100%' src={gradient1.src} />}

          <Box
            zIndex={4}
            h='100%'
            w='100%'
            opacity={"0.4"}
            position={"absolute"}
            backgroundImage='url(http://www.transparenttextures.com/patterns/worn-dots.png);'
          ></Box>

          <Flex
            w='100%'
            top={isMobileDevice ? "30%" : "20%"}
            position={"absolute"}
            alignItems='center'
            flexDirection='column'
            // zIndex={6}
            pb={10}
          >
            <Img w='80%' src={multichainz.src} />

            <Text
              // w='100%'
              fontFamily={"summer-dreams"}
              textAlign={"center"}
              color='rgba(255, 203, 99, 1)'
              fontSize={{ sm: "18px", md: "24px", lg: "30px", xl: "30px" }}
              mt={20}
            >
              JOIN THE EARLY TESTNET BETA WHITELIST
            </Text>

            <a href='https://forms.gle/7Pp9k3cdf9sTRtLj6' target={"_blank"}>
              <Button
                cursor={"pointer"}
                py={6}
                px={10}
                mt={10}
                fontFamily={"clash-display"}
                zIndex={8}
              >
                Join here
              </Button>
            </a>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
