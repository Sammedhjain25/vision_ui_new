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

// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="18px"
        sx={({ breakpoints }) => ({
          [breakpoints.down("lg")]: {
            flexDirection: "column",
          },
        })}
      >
        <VuiTypography
          variant="lg"
          fontWeight="bold"
          textTransform="capitalize"
          color={darkMode ? "white" : "text"}
          sx={({ breakpoints }) => ({
            [breakpoints.only("sm")]: {
              mb: "6px",
            },
            color: darkMode ? undefined : "#000000",
          })}
        >
          Payment History
        </VuiTypography>
        <VuiBox display="flex" alignItems="flex-start">
          <VuiBox color={darkMode ? "white" : "#000000"} mr="6px" lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </VuiBox>
          <VuiTypography variant="button" color={darkMode ? "text" : "text"} fontWeight="regular" sx={{ color: darkMode ? undefined : "#000000" }}>
            01 - 30 March 2024
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        <VuiBox mb={2}>
          <VuiTypography
            variant="caption"
            color={darkMode ? "text" : "text"}
            fontWeight="medium"
            textTransform="uppercase"
            sx={{ color: darkMode ? undefined : "#000000" }}
          >
            newest
          </VuiTypography>
        </VuiBox>
        <VuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="arrow_downward"
            name="Tuition Fee"
            description="27 March 2024, at 12:30 PM"
            value="- $ 1,200"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Scholarship"
            description="27 March 2024, at 04:30 AM"
            value="+ $ 500"
          />
        </VuiBox>
        <VuiBox mt={1} mb={2}>
          <VuiTypography
            variant="caption"
            color={darkMode ? "text" : "text"}
            fontWeight="medium"
            textTransform="uppercase"
            sx={{ color: darkMode ? undefined : "#000000" }}
          >
            yesterday
          </VuiTypography>
        </VuiBox>
        <VuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Bus Fee Refund"
            description="26 March 2024, at 13:45 PM"
            value="+ $ 50"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Lab Deposit Return"
            description="26 March 2024, at 12:30 PM"
            value="+ $ 100"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Library Deposit"
            description="26 March 2024, at 08:30 AM"
            value="+ $ 50"
          />
          <Transaction
            color="text"
            icon="priority_high"
            name="Exam Fee"
            description="26 March 2024, at 05:00 AM"
            value="Pending"
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Transactions;
