import React from "react";

import { Card, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import gif from "assets/images/cardimgfree.png";
import rocket from "assets/images/rocket-white.png";

import { useVisionUIController } from "context";

const WelcomeMark = () => {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <Card sx={() => ({
      height: "340px",
      py: darkMode ? "32px" : "0",
      px: darkMode ? "0" : "0",
      backgroundImage: "none",
      backgroundSize: darkMode ? "contain" : "cover",
      backgroundPosition: darkMode ? "right center" : "50%",
      backgroundRepeat: "no-repeat",
      position: "relative",
      overflow: "hidden"
    })}>
      {darkMode ? (
        <VuiBox height="100%" display="flex" flexDirection="row" justifyContent="space-between" px="32px">
          <VuiBox display="flex" flexDirection="column" justifyContent="center">
            <VuiTypography color="text" variant="button" fontWeight="regular" mb="12px">
              Welcome back,
            </VuiTypography>
            <VuiTypography color="white" variant="h3" fontWeight="bold" mb="18px">
              Rakshitha
            </VuiTypography>
            <VuiTypography color="text" variant="h6" fontWeight="regular" mb="auto">
              Glad to see you again!
              <br /> Ask me anything.
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" alignItems="center" justifyContent="center">
            <img
              src={rocket}
              alt="Rocket"
              style={{
                height: "280px",
                width: "auto",
                maxWidth: "100%",
              }}
            />
          </VuiBox>
        </VuiBox>
      ) : (
        <VuiBox height="100%" display="flex" flexDirection="row" sx={{ padding: "16px" }}>
          <VuiBox
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{ paddingRight: "16px" }}
          >
            <VuiTypography
              color="text"
              variant="button"
              fontWeight="regular"
              mb="12px"
              sx={{ fontFamily: "Poppins, sans-serif" }}
            >
              Welcome back,
            </VuiTypography>
            <VuiTypography
              color="text"
              variant="h3"
              fontWeight="bold"
              mb="18px"
              sx={{ fontFamily: "Poppins, sans-serif" }}
            >
              Rakshitha
            </VuiTypography>
            <VuiTypography
              color="text"
              variant="h6"
              fontWeight="regular"
              sx={{ fontFamily: "Poppins, sans-serif" }}
            >
              Glad to see you again!
              <br /> Ask me anything.
            </VuiTypography>
          </VuiBox>
          <VuiBox
            sx={{
              width: "46%",
              height: "100%",
              background: "linear-gradient(135deg, #3a8dff 0%, #0064ff 100%)",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                  radial-gradient(ellipse at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
                  radial-gradient(ellipse at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
                  linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)
                `,
                opacity: 0.8,
                zIndex: 0,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 3px,
                    rgba(255, 255, 255, 0.12) 3px,
                    rgba(255, 255, 255, 0.12) 6px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 3px,
                    rgba(255, 255, 255, 0.08) 3px,
                    rgba(255, 255, 255, 0.08) 6px
                  ),
                  repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 8px,
                    rgba(255, 255, 255, 0.06) 8px,
                    rgba(255, 255, 255, 0.06) 16px
                  )
                `,
                opacity: 0.6,
                zIndex: 0,
              },
            }}
          >
            <img
              src={rocket}
              alt="Rocket"
              style={{
                height: "140px",
                width: "auto",
                maxWidth: "100%",
                position: "relative",
                zIndex: 1,
              }}
            />
          </VuiBox>
        </VuiBox>
      )}
    </Card>
  );
};

export default WelcomeMark;
