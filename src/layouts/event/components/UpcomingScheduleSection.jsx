/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";

// React Icons
import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";

function UpcomingScheduleSection() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  const upcomingItems = [
    {
      id: 'up-ux',
      title: 'UX Research',
      teacher: 'Ms. Samantha William',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
      date: 'January 5, 2021',
      time: '07.00 - 08.00 AM',
      variant: 'error',
      lightModeColor: '#FF3B30', // red
    },
    {
      id: 'up-backend',
      title: 'Back-End Developer',
      teacher: 'Ms. Samantha William',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
      date: 'January 5, 2021',
      time: '07.00 - 08.00 AM',
      variant: 'warning',
      lightModeColor: '#FFBE0B', // yellow
    },
    {
      id: 'up-icon',
      title: 'Icon Design',
      teacher: 'Ms. Samantha William',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
      date: 'January 5, 2021',
      time: '07.00 - 08.00 AM',
      variant: 'error',
      lightModeColor: '#FF3B30', // red (fallback)
    },
    {
      id: 'up-frontend',
      title: 'Front-End Development',
      teacher: 'Mr. John Smith',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
      date: 'January 6, 2021',
      time: '09.00 - 10.00 AM',
      variant: 'success',
      lightModeColor: '#3EC8FF', // cyan
    },
    {
      id: 'up-mobile',
      title: 'Mobile App Design',
      teacher: 'Ms. Emily Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
      date: 'January 7, 2021',
      time: '02.00 - 03.00 PM',
      variant: 'warning',
      lightModeColor: '#8F54FF', // purple
    },
    {
      id: 'up-database',
      title: 'Database Management',
      teacher: 'Mr. David Brown',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
      date: 'January 8, 2021',
      time: '11.00 - 12.00 PM',
      variant: 'error',
      lightModeColor: '#FF3B30', // red (fallback)
    },
  ];

  const getMarkerColor = (item) => {
    if (darkMode) {
      // Dark mode colors (unchanged)
      const colors = {
        success: '#01b574',
        warning: '#f6ad55',
        error: '#e31a1a',
      };
      return colors[item.variant] || colors.success;
    } else {
      // Light mode colors - use specific color from item
      return item.lightModeColor || '#FF3B30';
    }
  };

  return (
    <VuiBox>
      <VuiBox mb={2}>
        <VuiTypography variant="h6" color={darkMode ? "white" : "text"} fontWeight="bold">
          Upcoming Schedule
        </VuiTypography>
      </VuiBox>
      <VuiBox display="flex" flexDirection="column" gap={2}>
        {upcomingItems.map((item) => (
          <Card
            key={item.id}
            sx={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            {!darkMode && (
              <VuiBox
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '6px',
                  backgroundColor: getMarkerColor(item),
                  borderTopLeftRadius: '8px',
                  borderBottomLeftRadius: '8px',
                  zIndex: 1,
                }}
              />
            )}
            <Grid container spacing={2} alignItems="center" sx={{ p: 2, pl: darkMode ? 2 : 3 }}>
              {darkMode && (
                <Grid item xs="auto">
                  <VuiBox
                    sx={{
                      width: '6px',
                      height: '48px',
                      borderRadius: '999px',
                      backgroundColor: getMarkerColor(item),
                    }}
                  />
                </Grid>
              )}
              <Grid item xs>
                <VuiBox display="flex" flexDirection="column" gap={1}>
                  <VuiTypography variant="button" color={darkMode ? "white" : "text"} fontWeight="bold">
                    {item.title}
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" gap={1.25}>
                    <VuiBox
                      component="img"
                      src={item.avatar}
                      alt={item.teacher}
                      sx={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                      {item.teacher}
                    </VuiTypography>
                  </VuiBox>
                </VuiBox>
              </Grid>
              <Grid item xs="auto">
                <VuiBox display="flex" flexDirection="column" gap={1.25}>
                  <VuiBox display="flex" alignItems="center" gap={1}>
                    <IoCalendarOutline
                      size={16}
                      color={darkMode ? "#a0aec0" : "#000000"}
                    />
                    <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                      {item.date}
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox display="flex" alignItems="center" gap={1}>
                    <IoTimeOutline
                      size={16}
                      color={darkMode ? "#a0aec0" : "#000000"}
                    />
                    <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                      {item.time}
                    </VuiTypography>
                  </VuiBox>
                </VuiBox>
              </Grid>
              <Grid item xs="auto">
                <VuiTypography
                  variant="button"
                  color="text"
                  sx={{
                    cursor: 'pointer',
                    fontSize: '20px',
                    color: darkMode ? undefined : "#4B5563", // gray-600 in light mode
                  }}
                >
                  ›
                </VuiTypography>
              </Grid>
            </Grid>
          </Card>
        ))}
      </VuiBox>
    </VuiBox>
  );
}

export default UpcomingScheduleSection;


