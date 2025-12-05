/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import { useVisionUIController } from "context";

// React Icons
import { IoBookOutline, IoCheckmarkCircle, IoCloseCircle, IoCalendarOutline } from "react-icons/io5";

// Data
import { studentData, attendanceMetrics } from "../data/mockData";
import StatChip from "./StatChip";

function ProfileHeader() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <Card>
      <VuiBox p={3}>
        <VuiTypography variant="h6" color={darkMode ? "white" : "text"} fontWeight="bold" mb={4}>
          Student Details
        </VuiTypography>

        {/* Student Info Section */}
        <VuiBox display="flex" alignItems="flex-start" gap={3} mb={4}>
          {/* Avatar */}
          <VuiAvatar
            src={studentData.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(studentData.name)}&background=1678FF&color=fff&size=72`}
            alt={studentData.name}
            sx={{
              width: '72px',
              height: '72px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
            }}
          />

          {/* Student Details */}
          <VuiBox flex={1}>
            <VuiTypography variant="h5" color={darkMode ? "white" : "text"} fontWeight="bold" mb={2}>
              {studentData.name}
            </VuiTypography>
            <VuiBox display="flex" flexWrap="wrap" gap={2} alignItems="center">
              <VuiBox display="flex" alignItems="center" gap={1}>
                <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                  ID:
                </VuiTypography>
                <VuiTypography variant="caption" color={darkMode ? "white" : "text"} fontWeight="medium" fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                  {studentData.id}
                </VuiTypography>
              </VuiBox>
              <VuiBox
                sx={{
                  width: '1px',
                  height: '16px',
                  backgroundColor: darkMode ? 'rgba(226, 232, 240, 0.3)' : '#E5E7EB',
                }}
              />
              <VuiBox display="flex" alignItems="center" gap={1}>
                <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                  Number:
                </VuiTypography>
                <VuiTypography variant="caption" color={darkMode ? "white" : "text"} fontWeight="medium" fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                  {studentData.number}
                </VuiTypography>
              </VuiBox>
              <VuiBox
                sx={{
                  width: '1px',
                  height: '16px',
                  backgroundColor: darkMode ? 'rgba(226, 232, 240, 0.3)' : '#E5E7EB',
                }}
              />
              <VuiBox display="flex" alignItems="center" gap={1}>
                <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                  Email:
                </VuiTypography>
                <VuiTypography variant="caption" color={darkMode ? "white" : "text"} fontWeight="medium" fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                  {studentData.email}
                </VuiTypography>
              </VuiBox>
              <VuiBox
                sx={{
                  width: '1px',
                  height: '16px',
                  backgroundColor: darkMode ? 'rgba(226, 232, 240, 0.3)' : '#E5E7EB',
                }}
              />
              <VuiBox display="flex" alignItems="center" gap={1}>
                <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                  Address:
                </VuiTypography>
                <VuiTypography variant="caption" color={darkMode ? "white" : "text"} fontWeight="medium" fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                  {studentData.address}
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </VuiBox>
        </VuiBox>

        {/* Stat Chips */}
        <Grid
          container
          spacing={2}
          sx={{
            '@media (max-width: 450px)': {
              '& .MuiGrid-item': {
                maxWidth: '100%',
                flexBasis: '100%',
              }
            }
          }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <StatChip
              icon={<IoBookOutline size={12} />}
              value={attendanceMetrics.totalClasses}
              label="Total Classes"
              percentage={100}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatChip
              icon={<IoCheckmarkCircle size={12} />}
              value={attendanceMetrics.totalPresent}
              label="Attended"
              totalClasses={attendanceMetrics.totalClasses}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatChip
              icon={<IoCloseCircle size={12} />}
              value={attendanceMetrics.totalAbsent}
              label="Absent"
              totalClasses={attendanceMetrics.totalClasses}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatChip
              icon={<IoCalendarOutline size={12} />}
              value={attendanceMetrics.totalLeaves}
              label="Leaves"
              totalClasses={attendanceMetrics.totalClasses}
            />
          </Grid>
        </Grid>
      </VuiBox>
    </Card>
  );
}

export default ProfileHeader;
