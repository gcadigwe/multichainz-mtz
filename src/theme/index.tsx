import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "300px",
  md: "800px",
  lg: "1100px",
  xl: "1600px",
  //   "2xl": "1536px",
};

const theme = extendTheme({
  fonts: {
    heading: `'Roboto-Bold', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  breakpoints,
});

export default theme;
