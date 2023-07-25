import style from "./style.module.css";
import polygonbacked from "../../assets/svg/polygonbacked.svg";
import binancebacked from "../../assets/svg/activebinance.svg";
import avalanchebacked from "../../assets/svg/avalanchebacked.svg";
import optimismbacked from "../../assets/svg/optimismbacked.svg";
import arbitrumbacked from "../../assets/svg/arbitrum.svg";
import ethereumbacked from "../../assets/svg/ethereumbacked.svg";
import { Flex, Img } from "@chakra-ui/react";

export default function MarqueeContent() {
  const imageWidth = { sm: "120px", lg: "160px", xl: "200px" };
  return (
    <div className={style.marquee}>
      <Flex className={style.marquee__content}>
        <Flex>
          <Img w={imageWidth} src={polygonbacked.src} />
        </Flex>
        <Flex>
          <Img w={imageWidth} src={binancebacked.src} />
        </Flex>
        <Flex>
          <Img w={imageWidth} src={avalanchebacked.src} />
        </Flex>
        <Flex>
          <Img
            w={{ sm: "40px", lg: "60px", xl: "80px" }}
            src={optimismbacked.src}
          />
        </Flex>
        <Flex>
          <Img w={imageWidth} src={arbitrumbacked.src} />
        </Flex>
        <Flex>
          <Img w={imageWidth} src={ethereumbacked.src} />
        </Flex>
      </Flex>

      <Flex aria-hidden='true' className={style.marquee__content}>
        <Flex>
          <Img w={imageWidth} src={polygonbacked.src} />
        </Flex>
        <Flex>
          <Img w={imageWidth} src={binancebacked.src} />
        </Flex>
        <Flex>
          <Img w={imageWidth} src={avalanchebacked.src} />
        </Flex>
        <Flex>
          <Img
            w={{ sm: "40px", lg: "60px", xl: "80px" }}
            src={optimismbacked.src}
          />
        </Flex>
        <Flex>
          <Img w={imageWidth} src={arbitrumbacked.src} />
        </Flex>
        <Flex>
          <Img w={imageWidth} src={ethereumbacked.src} />
        </Flex>
      </Flex>
    </div>
  );
}

// ria-hidden="true"
