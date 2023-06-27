import { Flex, Img, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./styles.module.css";

export default function SupportedNetwork({ img }: { img: any }) {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  const [hovered, setHovered] = useState(false);
  return (
    <Flex
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      flexDirection={"column"}
      alignItems='center'
      cursor={"pointer"}
      className={styles.stakeTextParent}
    >
      <Img
        cursor={"pointer"}
        opacity={isMobileDevice ? 1 : hovered ? 1 : 0.6}
        w={{ lg: "150px", xl: "180px" }}
        mr={isMobileDevice ? undefined : 4}
        src={img}
      />
      <Text
        color='white'
        fontSize={"14px"}
        className={styles.stakeText}
        // opacity={0}
      >
        Stake Now
      </Text>
    </Flex>
  );
}
