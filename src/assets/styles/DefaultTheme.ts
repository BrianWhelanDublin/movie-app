import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    background: "#000000",
    grey1: "#cacaca",
    grey2: "#a9a9a9",
    grey3: "#626262",
    grey4: "#4a4a4a",
    brand1: "#f7c533",
  },
  font: "switzer , HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial,Lucida Grande sans-serif",
  fontWeights: {
    light: 200,
    medium: 300,
    regular: 400,
    bold: 600,
    extra: 800,
  },
  fontSizes: {
    h1Mobile: 40,
    h1Desktop: 60,
    h2Mobile: 24,
    h2Desktop: 40,
    h3Mobile: 24,
    h3Desktop: 30,
    h4Mobile: 20,
    h4Desktop: 26,
    bodyFontSize: 16,
    bodyFontSizeSmall: 14,
  },
  gradient:
    "linear-gradient(0deg,rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 0.978) 4.4%,rgba(0, 0, 0, 0.925) 8.55%,rgba(0, 0, 0, 0.857) 12.1%,rgba(0, 0, 0, 0.781) 15.25%,rgba(0, 0, 0, 0.701) 18.15%,rgba(0, 0, 0, 0.62) 20.9%,rgba(0, 0, 0, 0.4) 50%,rgba(0, 0, 0, 0.62) 84.75%,rgba(0, 0, 0, 0.701) 87.9%,rgba(0, 0, 0, 0.781) 91.45%,rgba(0, 0, 0, 0.857) 95.6%,rgba(0, 0, 0, 1) 100%)",
};

export default myTheme;
