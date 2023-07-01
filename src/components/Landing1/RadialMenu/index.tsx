import React, { useState } from "react";

import { Text, Flex, Img, useMediaQuery, Circle } from "@chakra-ui/react";
import usdc from "../../../assets/svg/usdcelipse.svg";
import busd from "../../../assets/svg/busdelipse.svg";
import usdt from "../../../assets/svg/usdtelipse.svg";
import chainz from "../../../assets/svg/chainzelipse.svg";
import usdclogo from "../../../assets/svg/usdclogo.svg";
import busdlogo from "../../../assets/svg/busdlogo.svg";
import chainzlogo from "../../../assets/svg/chainzlogo.svg";
import usdtlogo from "../../../assets/svg/usdtlogo.svg";
import activeusdc from "../../../assets/svg/activeusdcelipse.svg";
import activebusd from "../../../assets/svg/activebusdelipse.svg";
import activeusdt from "../../../assets/svg/activeusdtelipse.svg";
import activechainz from "../../../assets/svg/activechainzelipse.svg";
import menuoutline from "../../../assets/svg/menuoutline.svg";
import styles from "./styles.module.css";

enum Tiles {
  "NONE" = 0,
  "FIRST" = 1,
  "SECOND" = 2,
  "THIRD" = 3,
  "FOURTH" = 4,
}
export default function RadialMenu() {
  const [activeTile, setactiveTile] = useState(Tiles["NONE"]);
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      position={"absolute"}
      w={isMobileDevice ? "400px" : "600px"}
      h='600px'
      mt={{ sm: 6, lg: 0, xl: 0 }}
      ml={{ sm: 14, lg: 0, xl: 0 }}
      alignItems='center'
    >
      <Flex flexDirection={"column"}>
        <Flex
          cursor={"pointer"}
          onMouseEnter={() => setactiveTile(Tiles["FIRST"])}
          onMouseLeave={() => setactiveTile(Tiles["NONE"])}
          position={"relative"}
        >
          <Img
            mb={isMobileDevice ? -16 : -20}
            src={activeTile === Tiles["FIRST"] ? activeusdc.src : usdc.src}
          />
          <Flex
            left='35%'
            top='40%'
            position={"absolute"}
            flexDirection='column'
            // alignItems={"center"}
          >
            <Img
              src={usdclogo.src}
              w={{ sm: "30px", lg: "50px", xl: "50px" }}
              h={{ sm: "30px", lg: "50px", xl: "50px" }}
            />
            <Text
              fontWeight={"bold"}
              fontSize={{ sm: "16px", lg: "16px", xl: "18px" }}
              color='white'
              textAlign={"center"}
            >
              {activeTile === Tiles["FIRST"] ? "$300k" : "USDC"}
            </Text>
          </Flex>
        </Flex>

        <Flex
          position={"relative"}
          cursor={"pointer"}
          onMouseEnter={() => setactiveTile(Tiles["SECOND"])}
          onMouseLeave={() => setactiveTile(Tiles["NONE"])}
        >
          <Img
            src={activeTile === Tiles["SECOND"] ? activechainz.src : chainz.src}
          />
          <Flex
            left='35%'
            top='30%'
            position={"absolute"}
            flexDirection='column'
            // alignItems={"center"}
          >
            <Img
              src={chainzlogo.src}
              w={{ sm: "30px", lg: "50px", xl: "50px" }}
              h={{ sm: "30px", lg: "50px", xl: "50px" }}
            />
            <Text
              fontWeight={"bold"}
              fontSize={{ sm: "16px", lg: "16px", xl: "18px" }}
              color='white'
              textAlign={"center"}
            >
              {activeTile === Tiles["SECOND"] ? "$100k" : "ChainZ"}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex ml={isMobileDevice ? -16 : -20} flexDirection={"column"}>
        <Flex
          cursor={"pointer"}
          onMouseEnter={() => setactiveTile(Tiles["THIRD"])}
          onMouseLeave={() => setactiveTile(Tiles["NONE"])}
          position={"relative"}
        >
          <Img
            mb={isMobileDevice ? -16 : -20}
            src={activeTile === Tiles["THIRD"] ? activebusd.src : busd.src}
          />
          <Flex
            left='35%'
            top='40%'
            position={"absolute"}
            flexDirection='column'
            // alignItems={"center"}
          >
            <Img
              src={busdlogo.src}
              w={{ sm: "30px", lg: "50px", xl: "50px" }}
              h={{ sm: "30px", lg: "50px", xl: "50px" }}
            />
            <Text
              fontWeight={"bold"}
              fontSize={{ sm: "16px", lg: "16px", xl: "18px" }}
              color='white'
              textAlign={"center"}
            >
              {activeTile === Tiles["THIRD"] ? "$150k" : "BUSD"}
            </Text>
          </Flex>
        </Flex>

        <Flex
          cursor={"pointer"}
          position={"relative"}
          onMouseEnter={() => setactiveTile(Tiles["FOURTH"])}
          onMouseLeave={() => setactiveTile(Tiles["NONE"])}
        >
          <Img
            src={activeTile === Tiles["FOURTH"] ? activeusdt.src : usdt.src}
          />
          <Flex
            left='30%'
            top='30%'
            position={"absolute"}
            flexDirection='column'
            // alignItems={"center"}
          >
            <Img
              src={usdtlogo.src}
              w={{ sm: "30px", lg: "50px", xl: "50px" }}
              h={{ sm: "30px", lg: "50px", xl: "50px" }}
            />
            <Text
              fontSize={{ sm: "16px", lg: "16px", xl: "18px" }}
              fontWeight={"bold"}
              color='white'
              textAlign={"center"}
            >
              {activeTile === Tiles["FOURTH"] ? "$130k" : "USDT"}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
