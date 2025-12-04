/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";

function TodayScheduleSection() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  const timeSlots = ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

  const scheduleItems = [
    {
      id: 'ux-research',
      title: 'UX Research',
      subtitle: 'A/B Testing',
      variant: 'error',
      lightModeColor: '#FF3B30', // red
      top: '24px',
      height: '96px',
      left: '0%',
      width: '70%',
    },
    {
      id: 'ui-design-beginner',
      title: 'UI Design Beginner',
      subtitle: 'Wireframe',
      variant: 'success',
      lightModeColor: '#1DD75B', // green
      top: '168px',
      height: '96px',
      left: '15%',
      width: '75%',
    },
    {
      id: 'fullstack',
      title: 'Fullstack Developer',
      subtitle: 'FormRequest',
      variant: 'warning',
      lightModeColor: '#F4A100', // orange
      top: '408px',
      height: '96px',
      left: '0%',
      width: '70%',
    },
  ];

  const getBorderColor = (item) => {
    if (darkMode) {
      // Dark mode colors (unchanged)
      const colors = {
        error: '#e31a1a',
        success: '#01b574',
        warning: '#ffb547',
      };
      return colors[item.variant] || colors.error;
    } else {
      // Light mode colors - use specific color from item
      return item.lightModeColor || '#FF3B30';
    }
  };

  return (
    <Card>
      <VuiBox p={3}>
        <VuiTypography variant="h6" color={darkMode ? "white" : "text"} fontWeight="bold" mb={2}>
          Today Schedule
        </VuiTypography>
        <VuiBox sx={{ overflowX: "hidden" }}>
          <VuiBox
            sx={{
              position: 'relative',
              display: 'flex',
              gap: 3,
              minHeight: '480px',
              overflow: 'visible',
            }}
          >
            {/* Time Labels */}
            <VuiBox
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                minWidth: '50px',
                paddingTop: '12px',
              }}
            >
              {timeSlots.map((slot) => (
                <VuiBox
                  key={slot}
                  sx={{
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                    {slot}
                  </VuiTypography>
                  <VuiBox
                    sx={{
                      content: '""',
                      position: 'absolute',
                      left: 'calc(100% + 24px)',
                      top: '50%',
                      height: 0,
                      width: '1000px',
                      borderTop: darkMode
                        ? '1px dashed rgba(226, 232, 240, 0.3)'
                        : '1px dashed #000000',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                    className="schedule-dashed-line"
                  />
                </VuiBox>
              ))}
            </VuiBox>

            {/* Schedule Items */}
            <VuiBox
              sx={{
                position: 'relative',
                flex: 1,
                minHeight: '480px',
                zIndex: 2,
              }}
            >
              {scheduleItems.map((item) => (
                <Card
                  key={item.id}
                  sx={{
                    position: 'absolute',
                    top: item.top,
                    left: item.left,
                    width: item.width,
                    height: item.height,
                    borderLeft: darkMode ? `8px solid ${getBorderColor(item)}` : `6px solid ${getBorderColor(item)}`,
                    borderTopLeftRadius: darkMode ? '0' : '8px',
                    borderBottomLeftRadius: darkMode ? '0' : '8px',
                    borderTopRightRadius: '0',
                    borderBottomRightRadius: '0',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                  }}
                >
                  <VuiBox display="flex" justifyContent="space-between" alignItems="center">
                    <VuiTypography variant="button" color={darkMode ? "white" : "text"} fontWeight="bold">
                      {item.title}
                    </VuiTypography>
                    <VuiTypography
                      variant="button"
                      color="text"
                      sx={{
                        cursor: 'pointer',
                        fontSize: '20px',
                        color: darkMode ? undefined : "#374151", // gray-700 in light mode
                      }}
                    >
                      ⋯
                    </VuiTypography>
                  </VuiBox>
                  <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#000000" }}>
                    {item.subtitle}
                  </VuiTypography>
                </Card>
              ))}
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default TodayScheduleSection;
