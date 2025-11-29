/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Vision UI Dashboard React Base Styles
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Vision UI Dashboard React Helper Function
import rgba from "assets/theme/functions/rgba";

const { black, gradients } = colors;
const { card } = gradients;
const { borderWidth, borderRadius } = borders;
const { xxl } = boxShadows;

// Function to get card styles based on theme
const getCardStyles = (themeOrProps) => {
  // Handle both direct theme object and props object with theme property
  const theme = themeOrProps?.theme || themeOrProps;
  
  // Safely check if we're using light theme by checking if palette has light theme colors
  // Default to dark mode if theme is not available
  let isLightMode = false;
  try {
    if (theme && theme.palette && theme.palette.text && theme.palette.text.main) {
      isLightMode = theme.palette.text.main === "#000000";
    }
  } catch (e) {
    // If there's any error, default to dark mode
    isLightMode = false;
  }
  
  return {
    display: "flex",
    flexDirection: "column",
    background: isLightMode ? "#FFFFFF" : linearGradient(card.main, card.state, card.deg),
    backgroundColor: isLightMode ? "#FFFFFF" : undefined,
    backdropFilter: isLightMode ? "none" : "blur(120px)",
    position: "relative",
    minWidth: 0,
    padding: "22px",
    wordWrap: "break-word",
    backgroundClip: "border-box",
    border: isLightMode 
      ? `${borderWidth[0]} solid #E5E7EB` 
      : `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
    borderRadius: borderRadius.xl,
    boxShadow: isLightMode ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : xxl,
  };
};

export default {
  styleOverrides: {
    root: getCardStyles,
  },
};
