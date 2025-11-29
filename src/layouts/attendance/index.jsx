/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Attendance components
import ProfileHeader from "./components/ProfileHeader";
import AttendanceRate from "./components/AttendanceRate";
import SummarySection from "./components/SummarySection";
import AuthorsTableCard from "./components/AuthorsTableCard";

function Attendance() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <VuiTypography variant="h4" color={darkMode ? "white" : "text"} fontWeight="bold" mb={2}>
            Attendance
          </VuiTypography>
        </VuiBox>
        
        {/* Profile Header */}
        <VuiBox mb={3}>
          <ProfileHeader />
        </VuiBox>

        {/* Main Content Grid */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {/* Left Column - Attendance Rate */}
          <Grid item xs={12} lg={4}>
            <AttendanceRate />
          </Grid>

          {/* Right Column - Summary Section */}
          <Grid item xs={12} lg={8}>
            <SummarySection />
          </Grid>
        </Grid>

        <VuiBox>
          <AuthorsTableCard />
        </VuiBox>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Attendance;


