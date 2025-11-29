/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useVisionUIController } from "context";

// Calendar component
import Calendar from "./Calendar";
import AnimatedRadialChart from "./AnimatedRadialChart";

function CalendarSection() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 5));

  const legendItems = [
    { label: 'Design', color: '#01b574' },
    { label: 'Developer', color: '#ffb547' },
    { label: 'Soft Skill', color: '#f6ad55' },
    { label: 'Science', color: '#e31a1a' },
  ];

  return (
    <Card
      sx={{
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <VuiBox p={{ xs: 3, md: 4 }}>
        {/* Title */}
        <VuiTypography variant="h6" color={darkMode ? "white" : "text"} fontWeight="bold" mb={4}>
          Calendar
        </VuiTypography>

        {/* Calendar */}
        <Grid container spacing={6} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <VuiBox
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
              alignItems="flex-start"
            >
              <Calendar
                mode="single"
                defaultMonth={new Date(2025, 0, 1)}
                selected={selectedDate}
                onSelect={setSelectedDate}
                modifiers={{
                  highlighted: [new Date(2025, 0, 5), new Date(2025, 0, 17)],
                }}
                modifiersClassNames={{
                  highlighted: "event-highlighted-date",
                }}
              />
            </VuiBox>
          </Grid>
        </Grid>

      </VuiBox>
    </Card>
  );
}

export default CalendarSection;

