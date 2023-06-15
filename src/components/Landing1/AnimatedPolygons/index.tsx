import React from "react";
import { motion } from "framer-motion";
import polygon1 from "../../../assets/svg/polygon1.svg";
import { Flex, Img } from "@chakra-ui/react";

export default function AnimatedPolygon() {
  return (
    <Flex position={"absolute"} left={20} top={40}>
      <motion.div
        transition={{ duration: 10, repeat: Infinity }}
        initial={{ rotateZ: -360 }}
        animate={{ rotateZ: 0 }}
      >
        <Img src={polygon1.src} />
      </motion.div>
    </Flex>
  );
}
