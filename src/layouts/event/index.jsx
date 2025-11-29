/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)
* Design and Coded by Simmmple & Creative Tim
=========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Event page components
import OngoingClassSection from "./components/OngoingClassSection";
import TodayScheduleSection from "./components/TodayScheduleSection";
import CalendarSection from "./components/CalendarSection";
import UpcomingScheduleSection from "./components/UpcomingScheduleSection";

function Event() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <VuiTypography variant="h4" color={darkMode ? "white" : "text"} fontWeight="bold" mb={2}>
            Events
          </VuiTypography>
        </VuiBox>
        <VuiBox>
          <Grid container spacing={3}>
            {/* Left Column */}
            <Grid item xs={12} lg={7}>
              <VuiBox display="flex" flexDirection="column" gap={3}>
                <OngoingClassSection />
                <TodayScheduleSection />
              </VuiBox>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} lg={5}>
              <VuiBox display="flex" flexDirection="column" gap={3}>
                <CalendarSection />
                <UpcomingScheduleSection />
              </VuiBox>
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Event;


