import Card from "@mui/material/Card";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";
import { IoCheckmarkCircle, IoCloseCircle, IoCalendarOutline } from "react-icons/io5";
import { attendanceMetrics } from "../data/mockData";
import VerticalMetric from "./VerticalMetric";

function SummarySection() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <Card>
      <VuiBox p={3} sx={{ minHeight: '420px' }}>
        <VuiTypography variant="h6" color={darkMode ? "white" : "text"} fontWeight="bold" mb={4}>
          Summary
        </VuiTypography>
        <VuiBox
          display="flex"
          gap={3}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <VerticalMetric
            value={attendanceMetrics.totalPresent}
            label="Total Present"
            icon={<IoCheckmarkCircle size={16} />}
            bgColor="#1E88FF"
            fillColor="#1E88FF"
            iconBgColor="#1E88FF"
          />
          <VerticalMetric
            value={attendanceMetrics.totalAbsent}
            label="Total Absent"
            icon={<IoCloseCircle size={16} />}
            bgColor="#FF4F6E"
            fillColor="#FF4F6E"
            iconBgColor="#FF4F6E"
          />
          <VerticalMetric
            value={attendanceMetrics.totalLeaves}
            label="Total Leaves"
            icon={<IoCalendarOutline size={16} />}
            bgColor="#FFA834"
            fillColor="#FFA834"
            iconBgColor="#FFA834"
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default SummarySection;
