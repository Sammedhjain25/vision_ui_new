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
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Grid from "@mui/material/Grid";
// Images
import burceMars from "assets/images/avatar-simmmple.png";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import ResultProfileCard from "examples/Cards/InfoCards/ResultProfileCard";
import ActivityCard from "components/ActivityCard";
import TopPerformersCard from "components/TopPerformersCard";
import SimplePieChart from "components/ui/simple-pie-chart";
import RoundedPieChart from "components/ui/rounded-pie-chart";
import CoursePerformance from "components/CoursePerformance";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Vision UI Dashboard React example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Result() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={1} px={1}>
        <Grid container spacing={3}>
          {/* Left Column - Profile Information */}
          <Grid item xs={12} md={4}>
            <ResultProfileCard
              title="profile information"
              description=""
              avatar={burceMars}
              info={{
                fullName: "Mark Johnson",
                mobile: "(44) 123 1234 123",
                email: "mark@simmmple.com",
                location: "United States",
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
            />
          </Grid>

          {/* Right Column - Top Performers and Activity Cards */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4} alignItems="stretch">
              <Grid item xs={12} md={6}>
                <TopPerformersCard />
              </Grid>
              <Grid item xs={12} md={6} sx={{ pl: { md: 3 } }}>
                <RoundedPieChart />
              </Grid>
              <Grid item xs={12} md={12}>
                <VuiBox display="flex" gap={4} justifyContent="flex-start" flexWrap="wrap" mt={3}>
                  <ActivityCard index={0} />
                  <ActivityCard index={1} />
                  <ActivityCard index={2} />
                </VuiBox>
              </Grid>
            </Grid>
          </Grid>

          {/* Course Performance Section - Below Mini Cards */}
          <Grid item xs={12} md={12}>
            <VuiBox mt={3}>
              <CoursePerformance />
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Result;

