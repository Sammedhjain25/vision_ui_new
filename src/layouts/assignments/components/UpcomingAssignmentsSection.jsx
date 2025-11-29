/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import Card from "@mui/material/Card";
import { motion } from "framer-motion";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import { useVisionUIController } from "context";

// React Icons
import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";
import { Calculator, Settings, BookOpen, Building2, Palette } from "lucide-react";

function UpcomingAssignmentsSection() {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  const upcomingAssignments = [
    {
      id: 1,
      title: "Multiplication Practice",
      subject: "Mathematics",
      dueDate: "Tomorrow",
      dueTime: "11:59 PM",
      icon: Calculator,
      iconColor: "#ef4444",
      iconBg: "#fef2f2",
      priority: "high",
    },
    {
      id: 2,
      title: "Solar System Project",
      subject: "Science",
      dueDate: "3 days",
      dueTime: "3:00 PM",
      icon: Settings,
      iconColor: "#a855f7",
      iconBg: "#faf5ff",
      priority: "medium",
    },
    {
      id: 3,
      title: "Story Writing",
      subject: "English",
      dueDate: "5 days",
      dueTime: "5:00 PM",
      icon: BookOpen,
      iconColor: "#3b82f6",
      iconBg: "#eff6ff",
      priority: "low",
    },
  ];

  const getPriorityColor = (priority) => {
    const colors = {
      high: "#ef4444",
      medium: "#f59e0b",
      low: "#22c55e",
    };
    return colors[priority] || colors.medium;
  };

  return (
    <Card
      sx={{
        height: "100%",
        background: darkMode ? "rgba(255, 255, 255, 0.05)" : "#FFFFFF",
        backdropFilter: darkMode ? "blur(20px)" : "none",
        border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #E5E7EB",
        boxShadow: darkMode ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)" : "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <VuiBox p={3}>
        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <VuiTypography variant="h4" color={darkMode ? "white" : "text"} fontWeight="bold">
            Upcoming
          </VuiTypography>
          <VuiButton
            variant="text"
            color="text"
            size="small"
            sx={{
              color: darkMode ? "#3b82f6" : "#1A73E8",
              "&:hover": {
                backgroundColor: darkMode ? "rgba(59, 130, 246, 0.1)" : "rgba(26, 115, 232, 0.1)",
              },
            }}
          >
            View All
          </VuiButton>
        </VuiBox>

        <VuiBox display="flex" flexDirection="column" gap={3} position="relative">
          {/* Timeline Line */}
          <VuiBox
            sx={{
              position: "absolute",
              left: "24px",
              top: "20px",
              bottom: "20px",
              width: "2px",
              background: darkMode 
                ? "linear-gradient(to bottom, #3b82f6, rgba(59, 130, 246, 0.1))"
                : "linear-gradient(to bottom, #1A73E8, rgba(26, 115, 232, 0.2))",
              zIndex: 0,
            }}
          />

          {upcomingAssignments.map((assignment, index) => {
            const IconComponent = assignment.icon;
            return (
              <motion.div
                key={assignment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <VuiBox
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* Icon */}
                  <VuiBox
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: darkMode ? "#0f172a" : "#F3F4F6",
                      border: `2px solid ${getPriorityColor(assignment.priority)}`,
                      boxShadow: assignment.priority === "high" ? `0 0 15px ${getPriorityColor(assignment.priority)}` : "none",
                      animation: assignment.priority === "high" ? "pulse 2s infinite" : "none",
                      "@keyframes pulse": {
                        "0%": { boxShadow: `0 0 0 0 rgba(239, 68, 68, 0.4)` },
                        "70%": { boxShadow: `0 0 0 10px rgba(239, 68, 68, 0)` },
                        "100%": { boxShadow: `0 0 0 0 rgba(239, 68, 68, 0)` },
                      },
                    }}
                  >
                    <IconComponent size={20} color={getPriorityColor(assignment.priority)} />
                  </VuiBox>

                  {/* Content Card */}
                  <VuiBox
                    sx={{
                      flex: 1,
                      p: 2,
                      borderRadius: "16px",
                      background: darkMode ? "rgba(255, 255, 255, 0.03)" : "#F9FAFB",
                      border: darkMode ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid #E5E7EB",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: darkMode ? "rgba(255, 255, 255, 0.08)" : "#F3F4F6",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    <VuiBox display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
                      <VuiBox>
                        <VuiTypography variant="button" color={darkMode ? "white" : "text"} fontWeight="bold" display="block">
                          {assignment.title}
                        </VuiTypography>
                        <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontWeight="medium" sx={{ color: darkMode ? undefined : "#374151" }}>
                          {assignment.subject}
                        </VuiTypography>
                      </VuiBox>
                      <VuiBox
                        sx={{
                          px: 1,
                          py: 0.5,
                          borderRadius: "6px",
                          backgroundColor: `${getPriorityColor(assignment.priority)}20`,
                        }}
                      >
                        <VuiTypography
                          variant="caption"
                          color={getPriorityColor(assignment.priority)}
                          fontWeight="bold"
                          fontSize="10px"
                          textTransform="uppercase"
                        >
                          {assignment.priority}
                        </VuiTypography>
                      </VuiBox>
                    </VuiBox>

                    <VuiBox display="flex" gap={2} alignItems="center" mt={2}>
                      <VuiBox display="flex" alignItems="center" gap={0.5}>
                        <IoCalendarOutline size={14} color={darkMode ? "#9ca3af" : "#6B7280"} />
                        <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#374151" }}>
                          {assignment.dueDate}
                        </VuiTypography>
                      </VuiBox>
                      <VuiBox display="flex" alignItems="center" gap={0.5}>
                        <IoTimeOutline size={14} color={darkMode ? "#9ca3af" : "#6B7280"} />
                        <VuiTypography variant="caption" color={darkMode ? "text" : "text"} fontSize="12px" sx={{ color: darkMode ? undefined : "#374151" }}>
                          {assignment.dueTime}
                        </VuiTypography>
                      </VuiBox>
                    </VuiBox>
                  </VuiBox>
                </VuiBox>
              </motion.div>
            );
          })}
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default UpcomingAssignmentsSection;


