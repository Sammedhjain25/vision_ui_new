/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { motion, AnimatePresence } from "framer-motion";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import { useVisionUIController } from "context";

// React Icons
import { IoDownloadOutline, IoCloudUploadOutline, IoCheckmarkCircle, IoTimeOutline } from "react-icons/io5";

function AllAssignmentsSection({ assignments, searchTerm = "", filter = "all" }) {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  // Filter assignments based on search and filter
  const filteredAssignments = assignments.filter((assignment) => {
    const matchesSearch =
      searchTerm === "" ||
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.subject.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "pending" && !assignment.isSubmitted) ||
      (filter === "submitted" && assignment.isSubmitted) ||
      (filter === "overdue" && assignment.status.toLowerCase().includes("overdue"));

    return matchesSearch && matchesFilter;
  });

  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <VuiBox mb={3}>
        <VuiTypography variant="h4" color={darkMode ? "white" : "text"} fontWeight="bold">
          All Assignments
        </VuiTypography>
      </VuiBox>

      <VuiBox>
        <AnimatePresence mode="popLayout">
          {filteredAssignments.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <VuiBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 10,
                  background: darkMode ? "rgba(255, 255, 255, 0.05)" : "#F9FAFB",
                  backdropFilter: darkMode ? "blur(20px)" : "none",
                  borderRadius: "20px",
                  border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #E5E7EB",
                }}
              >
                <VuiTypography variant="h5" color={darkMode ? "white" : "text"} fontWeight="bold" mb={1}>
                  No assignments found
                </VuiTypography>
                <VuiTypography variant="body2" color={darkMode ? "text" : "text"} fontWeight="regular" sx={{ color: darkMode ? undefined : "#374151" }}>
                  Try adjusting your search or filters
                </VuiTypography>
              </VuiBox>
            </motion.div>
          ) : (
            <Grid container spacing={3}>
              {filteredAssignments.map((assignment, index) => {
                const IconComponent = assignment.icon;
                return (
                  <Grid item xs={12} md={6} key={assignment.id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <VuiBox
                        sx={{
                          p: { xs: 2, md: 3 },
                          borderRadius: "20px",
                          background: darkMode ? "rgba(255, 255, 255, 0.05)" : "#FFFFFF",
                          backdropFilter: darkMode ? "blur(20px)" : "none",
                          border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #E5E7EB",
                          transition: "all 0.3s ease",
                          position: "relative",
                          overflow: "hidden",
                          boxShadow: darkMode ? "none" : "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            background: darkMode ? "rgba(255, 255, 255, 0.08)" : "#F9FAFB",
                            boxShadow: darkMode ? "0 20px 40px rgba(0, 0, 0, 0.2)" : "0px 8px 12px rgba(0, 0, 0, 0.15)",
                            border: darkMode ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid #D1D5DB",
                          },
                        }}
                      >
                        {/* Status Indicator */}
                        <VuiBox
                          sx={{
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: "8px",
                            backgroundColor: assignment.isSubmitted
                              ? "rgba(34, 197, 94, 0.2)"
                              : assignment.status.includes("Overdue")
                                ? "rgba(239, 68, 68, 0.2)"
                                : "rgba(59, 130, 246, 0.2)",
                            border: `1px solid ${assignment.isSubmitted
                              ? "rgba(34, 197, 94, 0.4)"
                              : assignment.status.includes("Overdue")
                                ? "rgba(239, 68, 68, 0.4)"
                                : "rgba(59, 130, 246, 0.4)"
                              }`,
                          }}
                        >
                          <VuiTypography
                            variant="caption"
                            color={
                              assignment.isSubmitted
                                ? "#22c55e"
                                : assignment.status.includes("Overdue")
                                  ? "#ef4444"
                                  : "#3b82f6"
                            }
                            fontWeight="bold"
                            textTransform="uppercase"
                          >
                            {assignment.status}
                          </VuiTypography>
                        </VuiBox>

                        <VuiBox display="flex" alignItems="center" gap={2} mb={3}>
                          <VuiBox
                            sx={{
                              width: "56px",
                              height: "56px",
                              borderRadius: "16px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: assignment.iconBg,
                              boxShadow: `0 8px 16px ${assignment.iconBg}40`,
                            }}
                          >
                            <IconComponent size={28} color={assignment.iconColor} strokeWidth={1.5} />
                          </VuiBox>
                          <VuiBox>
                            <VuiTypography variant="h5" color={darkMode ? "white" : "text"} fontWeight="bold" mb={0.5}>
                              {assignment.title}
                            </VuiTypography>
                            <VuiTypography variant="button" color={darkMode ? "text" : "text"} fontWeight="regular" sx={{ color: darkMode ? undefined : "#374151" }}>
                              {assignment.subject}
                            </VuiTypography>
                          </VuiBox>
                        </VuiBox>

                        <VuiBox display="flex" justifyContent="space-between" alignItems="center">
                          <VuiBox display="flex" gap={1}>
                            {assignment.isSubmitted ? (
                              <VuiButton
                                variant="contained"
                                color="success"
                                size="small"
                                sx={{
                                  minWidth: "100px",
                                  background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                                }}
                              >
                                <IoCheckmarkCircle size={16} style={{ marginRight: "8px" }} />
                                Done
                              </VuiButton>
                            ) : (
                              <>
                                <VuiButton
                                  variant="outlined"
                                  color="white"
                                  size="small"
                                  sx={{
                                    minWidth: "40px",
                                    px: 1,
                                  }}
                                >
                                  <IoDownloadOutline size={18} />
                                </VuiButton>
                                <VuiButton
                                  variant="contained"
                                  color="info"
                                  size="small"
                                  sx={{
                                    minWidth: "100px",
                                    background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                                  }}
                                >
                                  <IoCloudUploadOutline size={16} style={{ marginRight: "8px" }} />
                                  Upload
                                </VuiButton>
                              </>
                            )}
                          </VuiBox>
                        </VuiBox>
                      </VuiBox>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </AnimatePresence>
      </VuiBox>
    </Card>
  );
}

export default AllAssignmentsSection;

