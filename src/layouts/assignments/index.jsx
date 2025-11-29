/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Assignment page components
import AssignmentSummarySection from "./components/AssignmentSummarySection";
import AssignmentCarousel from "./components/AssignmentCarousel";
import AssignmentListCard from "./components/AssignmentListCard";

function Assignments() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <VuiBox mb={3} display="flex" alignItems="center" justifyContent="space-between">
            <VuiBox>
              <VuiTypography
                variant="h2"
                color={darkMode ? "white" : "text"}
                fontWeight="bold"
                sx={{
                  background: darkMode ? "linear-gradient(to right, #fff, #a0aec0)" : "none",
                  WebkitBackgroundClip: darkMode ? "text" : "unset",
                  WebkitTextFillColor: darkMode ? "transparent" : "#000000",
                  letterSpacing: "-1px",
                  fontFamily: 'Poppins, sans-serif',
                  color: darkMode ? undefined : "#000000",
                }}
              >
                Assignments
              </VuiTypography>
              <VuiTypography
                variant="button"
                color={darkMode ? "text" : "text"}
                fontWeight="regular"
                sx={{ fontFamily: 'Poppins, sans-serif', color: darkMode ? undefined : "#000000" }}
              >
                Manage and track your academic tasks with style.
              </VuiTypography>
            </VuiBox>
          </VuiBox>

          {/* Summary Section */}
          <VuiBox mb={3}>
            <AssignmentSummarySection />
          </VuiBox>

          {/* Upcoming Assignments and Assignment List Section */}
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <AssignmentCarousel />
            </Grid>
            <Grid item xs={12} lg={8}>
              <AssignmentListCard />
            </Grid>
          </Grid>
        </motion.div>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Assignments;
