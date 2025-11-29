/*!
 *
 * Schedule and Scores Component
 *
 */

import { useState } from "react";
import { Card, Select, MenuItem, FormControl } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function ScheduleScores() {
  const [selectedDay, setSelectedDay] = useState(22);
  const [selectedWeek, setSelectedWeek] = useState("This week");

  const days = [
    { label: "S", date: 19, hasEvent: true },
    { label: "M", date: 20, hasEvent: false },
    { label: "T", date: 21, hasEvent: false },
    { label: "W", date: 22, hasEvent: false },
    { label: "T", date: 23, hasEvent: false },
    { label: "F", date: 24, hasEvent: false },
    { label: "S", date: 25, hasEvent: true },
  ];

  const schedule = [
    { time: "8:00 - 8:45 am", subject: "Physical activity", scores: [] },
    { time: "8:45 - 9:45 am", subject: "English", scores: [{ value: "5", color: "success" }, { value: "4", color: "warning" }] },
    { time: "9:45 - 10:45 am", subject: "Mathematics", scores: [] },
    { time: "11:00 - 11:45 am", subject: "Literacy", scores: [{ value: "5", color: "success" }] },
    { time: "12:15 - 1:00 pm", subject: "Science", scores: [{ value: "3", color: "error" }] },
    { time: "2:15 - 3:10 pm", subject: "Elective choice", scores: [] },
  ];

  const getScoreColor = (color) => {
    const colors = {
      success: "#01b574",
      warning: "#ffb547",
      error: "#e31a1a",
    };
    return colors[color] || colors.success;
  };

  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox p={3} height="100%" display="flex" flexDirection="column">
        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <VuiTypography variant="lg" color="white" fontWeight="bold">
            Schedule and scores
          </VuiTypography>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              sx={{
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#56577A",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#56577A",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#56577A",
                },
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              }}
            >
              <MenuItem value="This week">This week</MenuItem>
              <MenuItem value="Next week">Next week</MenuItem>
            </Select>
          </FormControl>
        </VuiBox>

        <VuiBox display="flex" justifyContent="space-between" mb={3} gap={1}>
          {days.map((day, index) => (
            <VuiBox
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                cursor: "pointer",
                px: 1.5,
                py: 1,
                borderRadius: "8px",
                backgroundColor: selectedDay === day.date ? "#4318FF" : "transparent",
                transition: "all 0.3s",
                minWidth: "40px",
              }}
              onClick={() => setSelectedDay(day.date)}
            >
              <VuiTypography variant="button" color={selectedDay === day.date ? "white" : "text"} fontWeight="medium" sx={{ fontSize: "12px" }}>
                {day.label}
              </VuiTypography>
              <VuiTypography variant="button" color={selectedDay === day.date ? "white" : "white"} fontWeight="bold" mt={0.5} sx={{ fontSize: "14px" }}>
                {day.date}
              </VuiTypography>
              {day.hasEvent && (
                <VuiBox
                  sx={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#4318FF",
                    mt: 0.5,
                  }}
                />
              )}
            </VuiBox>
          ))}
        </VuiBox>

        <VuiBox sx={{ flex: 1, overflowY: "auto" }}>
          {schedule.map((item, index) => (
            <VuiBox key={index} mb={2.5}>
              <VuiBox display="flex" alignItems="center" mb={0.5} flexWrap="wrap">
                <VuiTypography variant="caption" color="text" fontWeight="regular" mr={2} sx={{ fontSize: "11px" }}>
                  {item.time}
                </VuiTypography>
                {item.scores.map((score, scoreIndex) => (
                  <VuiBox
                    key={scoreIndex}
                    sx={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: getScoreColor(score.color),
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mr: 0.5,
                    }}
                  >
                    <VuiTypography variant="caption" color="white" fontWeight="bold" sx={{ fontSize: "10px" }}>
                      {score.value}
                    </VuiTypography>
                  </VuiBox>
                ))}
              </VuiBox>
              <VuiTypography variant="button" color="white" fontWeight="medium" sx={{ fontSize: "13px" }}>
                {item.subject}
              </VuiTypography>
            </VuiBox>
          ))}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default ScheduleScores;

