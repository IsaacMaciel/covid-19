import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: "San Francisco";
        font-weight: 400;
        src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
    }

    html,body,#root {
        background-color: #dfe6e9;
        font-family: 'San Francisco';

        margin: 0 auto;
    }
`;
