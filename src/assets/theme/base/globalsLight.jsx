/*!
*
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*
* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master/LICENSE.md)
*
* Design and Coded by Simmmple & Creative Tim
*
=========================================================
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
*/

// Vision UI Dashboard React Base Styles for Light Mode
// Uses solid colors instead of background images
import colorsLight from "assets/theme/base/colorsLight";

const { info, dark } = colorsLight;
export default {
  html: {
    scrollBehavior: "smooth",
    background: dark.body, // Light grey background #f5f6fa
  },
  body: {
    background: dark.body, // Solid color instead of image
    backgroundSize: "auto",
    backgroundImage: "none", // Remove background image
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important",
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`,
  },
};



