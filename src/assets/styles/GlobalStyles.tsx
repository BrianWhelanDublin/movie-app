import { createGlobalStyle } from "styled-components";

import SwitzerWoff2 from "../fonts/Switzer-Variable.woff2";
import SwitzerWoff from "../fonts/Switzer-Variable.woff";
import SwitzerTtf from "../fonts/Switzer-Variable.ttf";
import { device } from "./breakpoints";

const GlobalStyles = createGlobalStyle`
/**
* Reset
*/
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: inherit;
    }


    html {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        tap-highlight-color: rgba(0, 0, 0, 0);
        font-size: 62.5%;
        /* BETTER FONT SMOOTHING - https://gist.github.com/hsleonis/55712b0eafc9b25f1944 */
        font-variant-ligatures: none;
        -webkit-font-variant-ligatures: none;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        font-smoothing: antialiased;
        -webkit-font-smoothing: antialiased;
        text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;

    }

    body {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
        text-size-adjust: none;
        line-height: 120%;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.white};
        font-family: ${(props) => props.theme.font};
        font-weight: ${(props) => props.theme.fontWeights.regular};
        font-size: ${(props) => props.theme.fontSizes.bodyFontSize}px;
    }

    img,
    iframe,
    video,
    audio,
    object {
        max-width: 100%;
    }

    img,
    iframe {
        border: 0 none;
    }

    img {
        height: auto;
        display: inline-block;
        vertical-align: middle;
    }

    b,
    strong {
        font-weight: 800;
    }

    svg:not(:root) {
        overflow: hidden;
    }

    a,
    button,
    input[type="submit"],
    input[type="button"],
    input[type="reset"],
    input[type="file"],
    input[type="image"],
    label[for] {
        cursor: pointer;
    }

    a[href^="tel"],
    button[disabled],
    input[disabled],
    textarea[disabled],
    select[disabled] {
        cursor: default;
    }

    button::-moz-focus-inner,
    input::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    input[type="text"],
    input[type="password"],
    input[type="date"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="month"],
    input[type="week"],
    input[type="email"],
    input[type="number"],
    input[type="search"],
    input[type="tel"],
    input[type="time"],
    input[type="url"],
    input[type="color"],
    textarea,
    a[href^="tel"] {
        appearance: none;
    }

    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
        appearance: none;
    }

    textarea {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }

    button,
    select {
        text-transform: none;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }

    nav ul,
    nav ol {
        list-style: none outside none;
    }

    input::placeholder {
        color: inherit;
        opacity: 1;
    }
    textarea::placeholder {
        color: inherit;
        opacity: 1;
    }

    input[type="text"],
    input[type="button"],
    input[type="tel"],
    input[type="email"],
    input[type="submit"],
    input[type="date"],
    input[type="search"],
    textarea {
        appearance: none;
    }

    p:last-child {
        margin-bottom: 0;
    }

/**
* Fonts
*/
    @font-face {
        font-family: 'switzer';
        src: 
        url(${SwitzerWoff2}) format('woff2'),
        url(${SwitzerWoff}) format('woff'),
        url(${SwitzerTtf}) format('truetype');
        font-weight: 100 900;
       font-display: swap;
    }


    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${(props) => props.theme.font};
        font-weight: ${(props) => props.theme.fontWeights.bold};
        font-style: normal;
        line-height: 120%;
    }

    h1 {
        font-size : ${(props) => props.theme.fontSizes.h1Mobile}px;
        line-height: 1.2;
        @media (${device.sm}){
            font-size : ${(props) => props.theme.fontSizes.h1Desktop}px;
       }
    }

    h2 {
        font-size : ${(props) => props.theme.fontSizes.h2Mobile}px;
        line-height: 1.2;
        @media (${device.sm}){
            font-size : ${(props) => props.theme.fontSizes.h2Desktop}px;
       }
    }

    h3 {
        font-size : ${(props) => props.theme.fontSizes.h3Mobile}px;
        line-height: 1.2;
        @media (${device.sm}){
            font-size : ${(props) => props.theme.fontSizes.h3Desktop}px;
       }
    }

    h4.h5,h6 {
        font-size : ${(props) => props.theme.fontSizes.h4Mobile}px;
        line-height: 1.2;
        @media (${device.sm}){
            font-size : ${(props) => props.theme.fontSizes.h4Desktop}px;
       }
    }

    p {
        font-size: ${(props) => props.theme.fontSizes.bodyFontSize}px;
        font-weight: ${(props) => props.theme.fontWeights.regular};
    }

    p,
    ul,
    ol,
    dl,
    hr,
    table,
    blockquote {
        margin-bottom: 20px;
    }
    a{
        color: ${(props) => props.theme.colors.white};
        text-decoration: none;

    }

    /**
    * Helpers
    */

    .visually-hidden {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
   
`;

export default GlobalStyles;
