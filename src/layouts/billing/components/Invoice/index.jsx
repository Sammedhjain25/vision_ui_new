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

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";
import { IoDocumentText } from "react-icons/io5";

function Invoice({ date, id, price }) {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <VuiBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="32px"
    >
      <VuiBox lineHeight={1}>
        <VuiTypography display="block" variant="button" fontWeight="medium" color={darkMode ? "white" : "text"} sx={{ color: darkMode ? undefined : "#000000" }}>
          {date}
        </VuiTypography>
        <VuiTypography variant="caption" fontWeight="regular" color={darkMode ? "text" : "text"} sx={{ color: darkMode ? undefined : "#000000" }}>
          {id}
        </VuiTypography>
      </VuiBox>
      <VuiBox display="flex" alignItems="center">
        <VuiTypography variant="button" fontWeight="regular" color={darkMode ? "text" : "text"} sx={{ color: darkMode ? undefined : "#000000" }}>
          {price}
        </VuiTypography>
        <VuiBox display="flex" alignItems="center" lineHeight={0} ml={3} sx={{ cursor: "poiner" }}>
          <IoDocumentText color={darkMode ? "#fff" : "#000000"} size="15px" />
          <VuiTypography variant="button" fontWeight="medium" color={darkMode ? "text" : "text"} sx={{ color: darkMode ? undefined : "#000000" }}>
            &nbsp;PDF
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

// Setting default values for the props of Invoice
Invoice.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Invoice
Invoice.propTypes = {
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Invoice;
