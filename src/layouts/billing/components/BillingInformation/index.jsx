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
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiBadge from "components/VuiBadge";
import { useVisionUIController } from "context";

// Billing page components
// import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account" sx={{ height: "100%" }}>
      <VuiBox mb="28px">
        <VuiTypography variant="lg" color={darkMode ? "white" : "text"} fontWeight="bold">
          Fee Breakdown
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <TableContainer>
          <MuiTable>
            <VuiBox component="thead">
              <TableRow>
                <VuiBox component="th" color={darkMode ? "text" : "text"} fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom={darkMode ? "1px solid #56577a" : "1px solid #E5E7EB"} py={1.5} pl={1} pr={1} textAlign="left" sx={{ color: darkMode ? undefined : "#000000" }}>CATEGORY</VuiBox>
                <VuiBox component="th" color={darkMode ? "text" : "text"} fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom={darkMode ? "1px solid #56577a" : "1px solid #E5E7EB"} py={1.5} pl={1} pr={1} textAlign="left" sx={{ color: darkMode ? undefined : "#000000" }}>AMOUNT</VuiBox>
                <VuiBox component="th" color={darkMode ? "text" : "text"} fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom={darkMode ? "1px solid #56577a" : "1px solid #E5E7EB"} py={1.5} pl={1} pr={1} textAlign="left" sx={{ color: darkMode ? undefined : "#000000" }}>PAID</VuiBox>
                <VuiBox component="th" color={darkMode ? "text" : "text"} fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom={darkMode ? "1px solid #56577a" : "1px solid #E5E7EB"} py={1.5} pl={1} pr={1} textAlign="left" sx={{ color: darkMode ? undefined : "#000000" }}>PENDING</VuiBox>
                <VuiBox component="th" color={darkMode ? "text" : "text"} fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom={darkMode ? "1px solid #56577a" : "1px solid #E5E7EB"} py={1.5} pl={1} pr={1} textAlign="left" sx={{ color: darkMode ? undefined : "#000000" }}>DUE DATE</VuiBox>
                <VuiBox component="th" color={darkMode ? "text" : "text"} fontSize="10px" fontWeight="bold" opacity={0.7} borderBottom={darkMode ? "1px solid #56577a" : "1px solid #E5E7EB"} py={1.5} pl={1} pr={1} textAlign="left" sx={{ color: darkMode ? undefined : "#000000" }}>STATUS</VuiBox>
              </TableRow>
            </VuiBox>
            <TableBody>
              {[
                { category: "Tuition Fee", amount: "₹15,000", paid: "₹15,000", pending: "₹0", dueDate: "2024-01-15", status: "Paid" },
                { category: "Sports Fee", amount: "₹2,000", paid: "₹2,000", pending: "₹0", dueDate: "2024-01-15", status: "Paid" },
                { category: "Lab Fee", amount: "₹3,000", paid: "₹3,000", pending: "₹0", dueDate: "2024-01-15", status: "Paid" },
                { category: "Library Fee", amount: "₹1,000", paid: "₹1,000", pending: "₹0", dueDate: "2024-01-15", status: "Paid" },
                { category: "Activity Fee", amount: "₹2,000", paid: "₹0", pending: "₹2,000", dueDate: "2024-01-31", status: "Pending" },
                { category: "Examination Fee", amount: "₹3,000", paid: "₹0", pending: "₹3,000", dueDate: "2024-01-31", status: "Pending" },
              ].map((row, index) => (
                <TableRow key={index}>
                  <VuiBox component="td" py={1.5} pl={1} pr={1} borderBottom={darkMode ? "1px solid #56577a" : "1px solid #E5E7EB"}>
                    <VuiTypography variant="button" color={darkMode ? "white" : "text"} fontWeight="medium" sx={{ color: darkMode ? undefined : "#000000" }}>{row.category}</VuiTypography>
                  </VuiBox>
                  <VuiBox component="td" py={1.5} pl={1} pr={1} borderBottom={darkMode ? "1px solid #56577a" : "1px solid #E5E7EB"}>
                    <VuiTypography variant="button" color={darkMode ? "text" : "text"} fontWeight="regular" sx={{ color: darkMode ? undefined : "#000000" }}>{row.amount}</VuiTypography>
                  </VuiBox>
                  <VuiBox component="td" py={1.5} pl={1} pr={1} borderBottom={darkMode ? "1px solid #56577a" : "1px solid #E5E7EB"}>
                    <VuiTypography variant="button" color="success" fontWeight="bold">{row.paid}</VuiTypography>
                  </VuiBox>
                  <VuiBox component="td" py={1.5} pl={1} pr={1} borderBottom={darkMode ? "1px solid #56577a" : "1px solid #E5E7EB"}>
                    <VuiTypography variant="button" color="error" fontWeight="bold">{row.pending}</VuiTypography>
                  </VuiBox>
                  <VuiBox component="td" py={1.5} pl={1} pr={1} borderBottom={darkMode ? "1px solid #56577a" : "1px solid #E5E7EB"}>
                    <VuiTypography variant="button" color={darkMode ? "text" : "text"} fontWeight="regular" sx={{ color: darkMode ? undefined : "#000000" }}>{row.dueDate}</VuiTypography>
                  </VuiBox>
                  <VuiBox component="td" py={1.5} pl={1} pr={1} borderBottom="1px solid #56577a">
                    <VuiBadge
                      variant="standard"
                      badgeContent={row.status}
                      color={row.status === "Paid" ? "success" : "error"}
                      size="xs"
                      container
                      sx={({ palette: { white, success, error } }) => ({
                        background: row.status === "Paid" ? success.main : error.main,
                        color: white.main,
                        borderRadius: "8px",
                        padding: "4px 8px",
                      })}
                    />
                  </VuiBox>
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </VuiBox>
    </Card>
  );
}

export default BillingInformation;
