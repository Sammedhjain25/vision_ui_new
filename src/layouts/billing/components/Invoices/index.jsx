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

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import { useVisionUIController } from "context";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account" sx={{ height: "100%" }}>
      <VuiBox mb="28px" display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="h6" fontWeight="medium" color={darkMode ? "white" : "text"}>
          Fee Receipts
        </VuiTypography>
        <VuiButton variant="contained" color="info" size="small">
          VIEW ALL
        </VuiButton>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2024" id="#TUI-415646" price="$1200" />
          <Invoice date="February, 10, 2024" id="#LAB-126749" price="$250" />
          <Invoice date="April, 05, 2024" id="#BUS-103578" price="$120" />
          <Invoice date="June, 25, 2023" id="#LIB-415646" price="$50" />
          <Invoice date="March, 01, 2023" id="#TUI-803481" price="$1100" noGutter />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default Invoices;
