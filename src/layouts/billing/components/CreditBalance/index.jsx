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

import React from "react";

// @mui components
import { Card, Stack } from "@mui/material";

// Vision UI Dashboard assets
import balance from "assets/images/billing-background-balance.png";
import Graph from "assets/images/shapes/graph-billing.svg";

import palette from "assets/theme/base/colors";

// Vision UI Dashboard components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";

// React icons
import { FaEllipsisH } from "react-icons/fa";
import { MdOutlineDomain } from "react-icons/md";

const CreditBalance = () => {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <Card sx={{ padding: "30px" }}>
      <VuiBox display="flex" flexDirection="column">
        <VuiBox
          mb="32px"
          p="20px"
          display="flex"
          flexDirection="column"
          sx={{ backgroundImage: `url(${balance})`, backgroundSize: "cover", borderRadius: "18px" }}
        >
          <VuiBox display="flex" justifyContent="space-beetween" alignItems="center">
            <VuiTypography variant="caption" color={darkMode ? "white" : "#000000"} fontWeight="medium" mr="auto">
              Pending Fees
            </VuiTypography>
            <FaEllipsisH color={darkMode ? "white" : "#000000"} size="18px" sx={{ cursor: "pointer" }} />
          </VuiBox>
          <VuiBox display="flex" justifyContent="space-beetween" alignItems="center">
            <VuiTypography variant="h2" color={darkMode ? "white" : "#000000"} fontWeight="bold" mr="auto">
              $1,250
            </VuiTypography>
            <VuiBox component="img" src={Graph} sx={{ width: "58px", height: "20px" }} />
          </VuiBox>
        </VuiBox>
        <VuiTypography color={darkMode ? "text" : "text"} variant="xxs" fontWeight="medium" mb="8px" sx={{ color: darkMode ? undefined : "#000000" }}>
          NEWEST
        </VuiTypography>
        <VuiBox display="flex" justifyContent="space-beetween" alignItems="center">
          <Stack direction="row" spacing="10px" mr="auto">
            <VuiBox
              display="flex"
              mr="10px"
              justifyContent="center"
              alignItems="center"
              sx={{
                background: darkMode ? "rgba(34, 41, 78, 0.7)" : "#F3F4F6",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
              }}
            >
              <MdOutlineDomain color={palette.success.main} size="20px" />
            </VuiBox>
            <VuiBox display="flex" flexDirection="column">
              <VuiTypography color={darkMode ? "white" : "text"} variant="button" fontWeight="medium" sx={{ color: darkMode ? undefined : "#000000" }}>
                Tuition Fee
              </VuiTypography>
              <VuiTypography color={darkMode ? "text" : "text"} variant="button" fontWeight="medium" sx={{ color: darkMode ? undefined : "#000000" }}>
                Today, 16:36
              </VuiTypography>
            </VuiBox>
          </Stack>
          <VuiTypography variant="button" color={darkMode ? "white" : "text"} fontWeight="bold" sx={{ color: darkMode ? undefined : "#000000" }}>
            $1,250
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default CreditBalance;
