import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --primary-light: #E8E8E8;
        --primary-light-hover: #DDDDDD;
        --primary-light-active: #B9B9B9;
        --primary-normal: #1D1D1C;
        --primary-normal-hover: #191919;
        --primary-normal-active: #161616;
        --primary-dark: #151515;
        --primary-dark-hover: #111111;
        --primary-dark-active: #0D0D0D;

        --secondary-light: #FCF2EA;
        --secondary-light-hover: #FAECDF;
        --secondary-light-active: #F4D7BD;
        --secondary-normal: #DD7D2B;
        --secondary-normal-hover: #C77127;
        --secondary-normal-active: #B16422;
        --secondary-dark: #A65E20;
        --secondary-dark-hover: #854B1A;
        --secondary-dark-active: #633813;

        --btn-add: #24FF0070;
        --btn-edit: #bdbd23d6;
        --btn-delete: #a53333;

        --alert-1: #CD2B31;
        --alert-2: #FDD8D8;
        --success-1: #18794E;
        --success-2: #CCEBD7;

        --message-error: #e12525;

        --title-font: 'Brolia';
        --font: 'Roboto';
    }

    html, body, div, span, applet, object, iframe,
    h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-family: var(--font);
        vertical-align: baseline;
        list-style: none;
        color: var(--primary-light);
    }

    h1, h2 {
        font-family: var(--title-font);
    }

    h3 {
        font-size: 10px;
        font-family: var(--font);
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
	    display: block;
    }

    body {
	    line-height: 1;
        height: 100vh;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    blockquote, q {
	    quotes: none;
    }

    button {
        cursor: pointer;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
	    content: '';
	    content: none;
    }

    table {
	    border-collapse: collapse;
	    border-spacing: 0;
    }

    * {
      list-style: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    // width
    ::-webkit-scrollbar {
        width: 10px;
    }

    // Track
    ::-webkit-scrollbar-track {
        background: var(--primary-normal);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--secondary-normal-active);
        border-radius: 1.6rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--secondary-normal);
    }
`;

export default GlobalStyle;
