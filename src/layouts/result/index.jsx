/*!\r

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
      <VuiBox
        py={{ xs: 1, sm: 1 }}
        px={{ xs: 1.5, sm: 1 }}
        sx={{
          '@media (max-width: 450px)': {
            px: 1.5,
            py: 1,
          }
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, sm: 3 }}
          sx={{
            '@media (max-width: 450px)': {
              '& .MuiGrid-item': {
                paddingTop: '8px !important',
                paddingLeft: '8px !important',
              }
            }
          }}
        >
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
            />
          </Grid>

          {/* Right Column - Top Performers and Activity Cards */}
          <Grid item xs={12} md={8}>
            <Grid
              container
              spacing={{ xs: 1, sm: 4 }}
              alignItems="stretch"
              sx={{
                '@media (max-width: 400px)': {
                  '& .MuiGrid-item': {
                    paddingTop: '8px !important',
                    paddingLeft: '8px !important',
                  }
                }
              }}
            >
              <Grid item xs={12} md={6}>
                <TopPerformersCard />
              </Grid>
              <Grid item xs={12} md={6} sx={{ pl: { md: 3 } }}>
                <RoundedPieChart />
              </Grid>
              <Grid item xs={12} md={12}>
                <VuiBox
                  display="flex"
                  gap={{ xs: 1, sm: 4 }}
                  justifyContent="flex-start"
                  flexWrap="wrap"
                  mt={{ xs: 1, sm: 3 }}
                >
                  <ActivityCard index={0} />
                  <ActivityCard index={1} />
                  <ActivityCard index={2} />
                </VuiBox>
              </Grid>
            </Grid>
          </Grid>

          {/* Course Performance Section - Below Mini Cards */}
          <Grid item xs={12} md={12}>
            <VuiBox mt={{ xs: 1, sm: 3 }}>
              <CoursePerformance />
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
    </DashboardLayout>
  );
}

export default Result;
