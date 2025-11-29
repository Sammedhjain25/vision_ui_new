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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { cloneElement } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import colors from "assets/theme/base/colors";

import { useVisionUIController } from "context";

function MiniStatisticsCard({ 
  bgColor = "white", 
  title = { fontWeight: "medium", text: "" }, 
  count, 
  percentage = { color: "success", text: "" }, 
  icon, 
  direction = "right" 
}) {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  const { info, grey } = colors;

  return (
    <Card sx={{ padding: "17px", ...(darkMode ? {} : { backgroundColor: "#FFFFFF", background: "#FFFFFF" }) }}>
      <VuiBox>
        <VuiBox>
          <Grid container alignItems="center">
            {direction === "left" ? (
              <Grid item>
                <VuiBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    backgroundColor: darkMode ? "#0075FF" : "#1A73E8",
                    border: darkMode ? "1px solid #0075FF" : "none",
                    borderRadius: darkMode ? "lg" : "12px",
                    width: darkMode ? "3rem" : "40px",
                    height: darkMode ? "3rem" : "40px",
                    padding: "0",
                    minWidth: darkMode ? "3rem" : "40px",
                    minHeight: darkMode ? "3rem" : "40px",
                    boxShadow: darkMode ? "md" : "none",
                    "& *": {
                      color: "#FFFFFF !important",
                    },
                    "& svg": {
                      color: "#FFFFFF !important",
                      fill: "#FFFFFF !important",
                      width: darkMode ? "22px" : "20px !important",
                      height: darkMode ? "22px" : "20px !important",
                      fontSize: darkMode ? "22px" : "20px !important",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#FFFFFF !important",
                      fill: "#FFFFFF !important",
                      width: darkMode ? "22px" : "20px !important",
                      height: darkMode ? "22px" : "20px !important",
                      fontSize: darkMode ? "22px" : "20px !important",
                    },
                  }}
                >
                  {icon && icon.component && cloneElement(icon.component, {
                    sx: {
                      ...(icon.component.props?.sx || {}),
                      color: "#FFFFFF !important",
                      fill: "#FFFFFF !important",
                      width: darkMode ? "22px" : "20px !important",
                      height: darkMode ? "22px" : "20px !important",
                      fontSize: darkMode ? "22px" : "20px !important",
                    }
                  })}
                </VuiBox>
              </Grid>
            ) : null}
            <Grid item xs={8}>
              <VuiBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                <VuiTypography
                  variant="caption"
                  color={darkMode ? (bgColor === "white" ? "text" : "white") : "text"}
                  opacity={darkMode ? (bgColor === "white" ? 1 : 0.7) : 1}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                  sx={{ fontFamily: darkMode ? undefined : "Poppins, sans-serif" }}
                >
                  {title.text}
                </VuiTypography>
                <VuiTypography 
                  variant="subtitle1" 
                  fontWeight="bold" 
                  color={darkMode ? "white" : "text"} 
                  sx={{ fontFamily: darkMode ? undefined : "Poppins, sans-serif" }}
                >
                  {count}{" "}
                  <VuiTypography variant="button" color={percentage.color} fontWeight="bold" sx={{ fontFamily: darkMode ? undefined : "Poppins, sans-serif" }}>
                    {percentage.text}
                  </VuiTypography>
                </VuiTypography>
              </VuiBox>
            </Grid>
            {direction === "right" ? (
              <Grid item xs={4}>
                <VuiBox
                  marginLeft="auto"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    backgroundColor: darkMode ? "#0075FF" : "#1A73E8",
                    border: darkMode ? "1px solid #0075FF" : "none",
                    borderRadius: darkMode ? "lg" : "12px",
                    width: darkMode ? "3rem" : "40px",
                    height: darkMode ? "3rem" : "40px",
                    padding: "0",
                    minWidth: darkMode ? "3rem" : "40px",
                    minHeight: darkMode ? "3rem" : "40px",
                    boxShadow: darkMode ? "md" : "none",
                    "& *": {
                      color: "#FFFFFF !important",
                    },
                    "& svg": {
                      color: "#FFFFFF !important",
                      fill: "#FFFFFF !important",
                      width: darkMode ? "22px" : "20px !important",
                      height: darkMode ? "22px" : "20px !important",
                      fontSize: darkMode ? "22px" : "20px !important",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#FFFFFF !important",
                      fill: "#FFFFFF !important",
                      width: darkMode ? "22px" : "20px !important",
                      height: darkMode ? "22px" : "20px !important",
                      fontSize: darkMode ? "22px" : "20px !important",
                    },
                  }}
                >
                  {icon && icon.component && cloneElement(icon.component, {
                    sx: {
                      ...(icon.component.props?.sx || {}),
                      color: "#FFFFFF !important",
                      fill: "#FFFFFF !important",
                      width: darkMode ? "22px" : "20px !important",
                      height: darkMode ? "22px" : "20px !important",
                      fontSize: darkMode ? "22px" : "20px !important",
                    }
                  })}
                </VuiBox>
              </Grid>
            ) : null}
          </Grid>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

// Typechecking props for the MiniStatisticsCard
MiniStatisticsCard.propTypes = {
  bgColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
  ]),
  title: PropTypes.PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

export default MiniStatisticsCard;
