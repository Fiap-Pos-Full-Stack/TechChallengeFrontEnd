// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
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
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
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
input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 13px;
    width: 13px;

    background: url("data:image/svg+xml;charset=UTF-8,%3csvg viewPort='0 0 12 12' version='1.1' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='1' y1='11' x2='11' y2='1' stroke='white' stroke-width='2'/%3e%3cline x1='1' y1='1' x2='11' y2='11' stroke='white' stroke-width='2'/%3e%3c/svg%3e");
}
    body {
        background-color: rgb(${props => props.theme.colors.bgColor});
        font-family: ${props => props.theme.fontFamily.primary};
        font-optical-sizing: auto;
        font-style: normal;
        font-variation-settings:"wdth" 100;
        font-size: 1.6rem;
    }
    .w100{
        width: 100%;
    }
    .d-flex
    {
        display:flex;
    }
    .space-between
    {
        display:flex;
        justify-content: space-between;
       
    }
    .mtb1
    {
        margin-top: 20px;
        margin-bottom: 20px;
       
    }
    .flex-center-space-between
    {
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .flex-end
    {
        display:flex;
        justify-content: flex-end;
    }
`;

export default GlobalStyle;