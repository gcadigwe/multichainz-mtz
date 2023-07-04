import React from "react";
import { motion } from "framer-motion";
import polygon1 from "../../../assets/svg/polygon1.svg";
import circle from "../../../assets/animation/circle.svg";
import smallcircle from "../../../assets/animation/smallcircle.svg";
import { Circle, Flex, Img, useMediaQuery } from "@chakra-ui/react";
import styles from "./styles.module.css";

export default function AnimatedPolygon({ earn }: { earn?: boolean }) {
  const [isMobileDevice] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      display={isMobileDevice ? "none" : undefined}
      w='100%'
      h='100%'
      position={"absolute"}
    >
      <Flex>
        {/* <Flex
          position={"absolute"}
          top={40}
          left={20}
          className={styles.secondrotatingangle}
        >
          <Img src={polygon1.src} />
        </Flex> */}

        <Circle position={"absolute"} top={40} left={20} size='200px'>
          <motion.div
            transition={{ duration: 32, repeat: Infinity }}
            initial={{ rotateZ: -360 }}
            animate={{ rotateZ: 0 }}
          >
            <Img src={polygon1.src} />
            <Circle size={"200px"}>
              <Flex visibility={"hidden"}>asfsdfsdf</Flex>
            </Circle>
          </motion.div>
        </Circle>

        <Circle position={"absolute"} top={40} left={"30%"} size='300px'>
          <motion.div
            transition={{ duration: 40, repeat: Infinity }}
            initial={{ rotateZ: -360 }}
            animate={{ rotateZ: 0 }}
          >
            <Img src={smallcircle.src} />
            <Circle size={"300px"}>
              <Flex visibility={"hidden"}>asfsdfsdf</Flex>
            </Circle>
          </motion.div>
        </Circle>

        <Circle position={"absolute"} top={"40%"} left={"50%"} size='300px'>
          <motion.div
            transition={{ duration: 50, repeat: Infinity }}
            initial={{ rotateZ: -360 }}
            animate={{ rotateZ: 0 }}
          >
            <Img src={circle.src} />
            <Circle size={"300px"}>
              <Flex visibility={"hidden"}>asfsdfsdf</Flex>
            </Circle>
          </motion.div>
        </Circle>

        {/* <Flex
          position={"absolute"}
          top={earn ? "40%" : 40}
          left={earn ? "95%" : "80%"}
          className={styles.rotatingangle}
        >
          <Img w='50px' h='50px' src={polygon1.src} />
        </Flex> */}

        <Circle position={"absolute"} top={40} left={"60%"} size='300px'>
          <motion.div
            transition={{ duration: 60, repeat: Infinity }}
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: -360 }}
          >
            <Img w='50px' h='50px' src={polygon1.src} />
            <Circle size={"300px"}>
              <Flex visibility={"hidden"}>asfsdfsdf</Flex>
            </Circle>
          </motion.div>
        </Circle>

        {/* <Flex
          position={"absolute"}
          top={"50%"}
          left={20}
          className={styles.rotatingcircle}
        >
          <Img src={smallcircle.src} />
        </Flex> */}

        <Circle position={"absolute"} top={"50%"} left={"20%"} size='200px'>
          <motion.div
            transition={{ duration: 40, repeat: Infinity }}
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: -360 }}
          >
            <Img src={smallcircle.src} />
            <Circle size={"200px"}>
              <Flex visibility={"hidden"}>asfsdfsdf</Flex>
            </Circle>
          </motion.div>
        </Circle>

        {/* <motion.div
          transition={{ duration: 10, repeat: Infinity }}
          initial={{ rotateZ: -360 }}
          animate={{ rotateZ: 0 }}
        >
          <Img src={circle.src} />
        </motion.div> */}

        {/* <Flex position={"absolute"} top={"80%"} left={30}>
          <motion.div
            transition={{ duration: 10, repeat: Infinity }}
            initial={{ rotateZ: -360 }}
            animate={{ rotateZ: 0 }}
          >
            <Img src={polygon1.src} />
          </motion.div>
        </Flex> */}

        {/* <Flex position={"absolute"} top={"60%"} left={"90%"}>
          <motion.div
            transition={{ duration: 10, repeat: Infinity }}
            initial={{ rotateZ: -360 }}
            animate={{ rotateZ: 0 }}
          >
            <Img src={smallcircle.src} />
          </motion.div>
        </Flex> */}
      </Flex>
    </Flex>
  );
}
