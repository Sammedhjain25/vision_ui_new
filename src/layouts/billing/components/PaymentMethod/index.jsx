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
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAlert from "components/VuiAlert";
import { useVisionUIController } from "context";

function PaymentMethod() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account" sx={{ height: "100%" }}>
      <VuiAlert color="error">
        <VuiBox display="flex" flexDirection="column">
          <VuiBox display="flex" alignItems="center" mb={1}>
            <Icon sx={{ color: darkMode ? "white" : "#000000", mr: 1 }}>error</Icon>
            <VuiTypography variant="h6" color={darkMode ? "white" : "text"} fontWeight="bold" sx={{ color: darkMode ? undefined : "#000000" }}>
              Pending Payment
            </VuiTypography>
          </VuiBox>
          <VuiTypography variant="button" color={darkMode ? "white" : "text"} fontWeight="regular" sx={{ color: darkMode ? undefined : "#000000" }}>
            You have ₹5,000 pending. Please make the payment by January 31, 2024 to avoid late fees.
          </VuiTypography>
        </VuiBox>
      </VuiAlert>
    </Card>
  );
}

export default PaymentMethod;
