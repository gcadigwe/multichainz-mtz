import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Img, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import gradient1 from "../assets/svg/backgroundgradient1.svg";
import multichainz from "../assets/svg/multichainz.svg";
import telegram from "../assets/svg/telegram.svg";
import instagram from "../assets/svg/instagram.svg";
import twitter from "../assets/svg/twitter.svg";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <>
      <Head>
        <title>Multichainz</title>
        <meta name='description' content='Multichainz Protocol' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <Box h={"100vh"} position={"relative"} bgColor={"#070525"}>
        <Navbar />
        <Box
          zIndex={4}
          h='100vh'
          w='100vw'
          opacity={"0.4"}
          position={"absolute"}
          backgroundImage='url(http://www.transparenttextures.com/patterns/worn-dots.png);'
        ></Box>

        <Flex w='100%' bgColor={"#070525"} position={"absolute"}>
          <Img
            w='100vw'
            h={isMobileDevice ? "70vh" : "100vh"}
            src={gradient1.src}
          />
        </Flex>
        <Flex
          w='100%'
          top={"52"}
          position={"absolute"}
          alignItems='center'
          flexDirection='column'
          zIndex={6}
        >
          <Img w='80%' src={multichainz.src} />

          <Text
            // w='100%'
            textAlign={"center"}
            color='white'
            fontSize={"18px"}
            mt={10}
          >
            Something is coming...
          </Text>

          <Flex
            mt={isMobileDevice ? 5 : 10}
            px={32}
            w='100%'
            justifyContent={isMobileDevice ? "center" : "flex-start"}
            flexDirection={isMobileDevice ? "row" : "column"}
            alignItems={isMobileDevice ? "center" : undefined}
          >
            <a href='https://t.me/Multi_ChainZ' target='_blank'>
              <Img
                my={isMobileDevice ? 0 : 4}
                mx={isMobileDevice ? 4 : 0}
                w='24px'
                src={telegram.src}
              />
            </a>

            <a
              href='https://twitter.com/multi_chainz?s=21&t=h89coWYDemiUYPvlyYfi9Q'
              target='_blank'
            >
              <Img w='24px' src={twitter.src} />
            </a>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
