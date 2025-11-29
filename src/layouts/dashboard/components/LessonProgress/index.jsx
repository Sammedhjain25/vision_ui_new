/*!
 *
 * Lesson Progress Component
 *
 */

import { Card } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LineChart from "examples/Charts/LineCharts/LineChart";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";

// Sample line chart data for lesson progress
const lessonProgressData = [
  {
    name: "Progress",
    data: [30, 40, 45, 50, 50],
  },
];

const lessonProgressOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    type: "category",
    categories: ["Sep", "Oct", "Nov", "Dec", "Jan"],
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "10px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "10px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#4318FF"],
  },
  colors: ["#4318FF"],
};

function LessonProgress() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox p={3} height="100%" display="flex" flexDirection="column">
        <VuiBox display="flex" alignItems="flex-start" mb={3}>
          <VuiBox
            bgColor="primary"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              mr: 2,
            }}
          >
            <PsychologyIcon sx={{ fontSize: "24px", color: "white" }} />
          </VuiBox>
          <VuiBox>
            <VuiTypography variant="h2" color="white" fontWeight="bold">
              5/10
            </VuiTypography>
            <VuiTypography variant="button" color="text" fontWeight="regular" mb={1}>
              Lesson progress
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox mb={2}>
          <VuiTypography variant="button" color="warning" fontWeight="medium">
            50% left
          </VuiTypography>
        </VuiBox>
        <VuiBox
          sx={{
            background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
            borderRadius: "20px",
            p: 2,
            height: "200px",
            mt: "auto",
          }}
        >
          <VuiTypography variant="caption" color="text" mb={1} display="block">
            sep-jun 22
          </VuiTypography>
          <VuiBox sx={{ height: "160px" }}>
            <LineChart
              lineChartData={lessonProgressData}
              lineChartOptions={lessonProgressOptions}
            />
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default LessonProgress;

