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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Vision UI Dashboard React context
import { useVisionUIController } from "context";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";
import UpcomingWebinarCard from "layouts/dashboard/components/UpcomingWebinarCard";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Material-UI icons
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Active Subjects", fontWeight: "regular" }}
                count="6"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: <MenuBookIcon sx={{ fontSize: "22px", color: "white" }} /> }}
                direction="left"
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Pending Assignments" }}
                count="3"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: <AssignmentIcon sx={{ fontSize: "22px", color: "white" }} /> }}
                direction="left"
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Attendance" }}
                count="92%"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: <BarChartIcon sx={{ fontSize: "22px", color: "white" }} /> }}
                direction="left"
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Overall Grade" }}
                count="A+"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "info", component: <SchoolIcon sx={{ fontSize: "22px", color: "white" }} /> }}
                direction="left"
              />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} md={12} lg={12} xl={5}>
              <WelcomeMark />
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={3}>
              <SatisfactionRate />
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={4}>
              <ReferralTracking />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6} xl={7}>
              <Card sx={{ ...(darkMode ? {} : { backgroundColor: '#FFFFFF', background: '#FFFFFF' }) }}>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color={darkMode ? "white" : "text"} fontWeight="bold" mb="5px">
                    Marks Overview
                  </VuiTypography>
                  <VuiBox sx={{ height: "310px" }} mt="40px">
                    <LineChart
                      lineChartData={lineChartDataDashboard}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6} xl={5}>
              <UpcomingWebinarCard />
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Dashboard;
