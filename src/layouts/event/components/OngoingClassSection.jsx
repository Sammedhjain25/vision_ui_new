/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import LinearProgress from "@mui/material/LinearProgress";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import { useVisionUIController } from "context";

function OngoingClassSection() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  const ongoingClasses = [
    {
      name: "UI Design Basic",
      progress: 75,
      color: "success",
      lightModeColor: "#1DD75B", // green
    },
    {
      name: "Fullstack Developer",
      progress: 50,
      color: "warning",
      lightModeColor: "#F4A100", // orange
    },
  ];

  return (
    <VuiBox>
      <VuiTypography variant="h6" color={darkMode ? "white" : "text"} fontWeight="bold" mb={2}>
        Ongoing Class
      </VuiTypography>
      <Grid container spacing={2} alignItems="stretch">
        {ongoingClasses.map((classItem, index) => (
          <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex' }}>
            <Card sx={{ position: "relative", overflow: "hidden", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
              <VuiBox p={2.5} sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={1.5}>
                  <VuiTypography variant="h6" color={darkMode ? "white" : "text"} fontWeight="bold">
                    {classItem.progress}%
                  </VuiTypography>
                  <VuiTypography
                    variant="button"
                    color="text"
                    sx={{
                      cursor: "pointer",
                      color: darkMode ? undefined : "#4B5563", // gray-600 in light mode
                    }}
                  >
                    ›
                  </VuiTypography>
                </VuiBox>
                <VuiBox>
                  <VuiTypography variant="button" color={darkMode ? "text" : "text"} fontWeight="medium" mb={1.5} sx={{ color: darkMode ? undefined : "#000000" }}>
                    {classItem.name}
                  </VuiTypography>
                  {darkMode && <VuiProgress value={classItem.progress} color={classItem.color} />}
                </VuiBox>
              </VuiBox>
              {!darkMode && (
                <VuiBox
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: "6px",
                    borderRadius: "0 0 6px 6px",
                    overflow: "hidden",
                    backgroundColor: "#E5E7EB"
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={classItem.progress}
                    sx={{
                      height: "100%",
                      borderRadius: "6px",
                      backgroundColor: "transparent",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: classItem.lightModeColor,
                        borderRadius: "6px",
                      },
                    }}
                  />
                </VuiBox>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </VuiBox>
  );
}

export default OngoingClassSection;
