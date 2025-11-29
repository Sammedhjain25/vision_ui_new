/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Icon from "@mui/material/Icon";
import { Table, TableBody, TableContainer, TableRow } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiBadge from "components/VuiBadge";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";

// Material-UI icons
import CampaignIcon from "@mui/icons-material/Campaign";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GradeIcon from "@mui/icons-material/Grade";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";

// Vision UI Dashboard theme imports
import palette from "assets/theme/base/colors";
import { useState } from "react";
import { useVisionUIController } from "context";

function OrdersOverview() {
  const [open, setOpen] = useState(false);
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  return (
    <Card className="h-100" sx={{ ...(darkMode ? {} : { backgroundColor: '#FFFFFF', background: '#FFFFFF' }) }}>
      <VuiBox mb="16px" display="flex" justifyContent="space-between" alignItems="center">
        <VuiBox>
          <VuiTypography variant="lg" fontWeight="bold" mb="5px" color={darkMode ? "white" : "text"}>
            Announcement
          </VuiTypography>
          <VuiBox mb={2}>
            <VuiBox display="flex" alignItems="center">
              <BsCheckCircleFill color="green" size="15px" mr="5px" />
              <VuiTypography 
                variant="button" 
                color="text" 
                fontWeight="regular"
                sx={{
                  fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
                }}
              >
                Latest updates for students
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        </VuiBox>
        <VuiTypography
          component="a"
          href="#"
          variant="button"
          color="info"
          fontWeight="bold"
          sx={{ cursor: "pointer" }}
          onClick={() => setOpen(true)}
        >
          View All
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <TimelineItem
          icon={<CampaignIcon sx={{ fontSize: "16px", color: palette.info.main }} />}
          title="Holiday Announcement"
          description="School will be closed on 20 Nov due to festival."
          dateTime="2 hours ago"
        />
        <TimelineItem
          icon={<SchoolIcon sx={{ fontSize: "16px", color: palette.error.main }} />}
          title="Upcoming Exam"
          description="Math Unit Test scheduled on 25 Nov. Syllabus uploaded."
          dateTime="Today 10:00 AM"
        />
        <TimelineItem
          icon={<AssignmentIcon sx={{ fontSize: "16px", color: palette.lightblue.main }} />}
          title="Homework Posted"
          description="Science Worksheet Chapter 4 assigned."
          dateTime="Yesterday 7:30 PM"
        />
        <TimelineItem
          icon={<GradeIcon sx={{ fontSize: "16px", color: palette.warning.main }} />}
          title="Results Released"
          description="English Grammar Test marks uploaded."
          dateTime="Yesterday 4:45 PM"
        />
      </VuiBox>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: darkMode ? "#0f1535" : "#FFFFFF",
            borderRadius: "20px",
            border: darkMode ? "1px solid #2D2E5F" : "1px solid #E5E7EB",
            boxShadow: darkMode ? "0 20px 27px 0 rgba(0,0,0,0.05)" : "0 20px 27px 0 rgba(0,0,0,0.1)",
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: darkMode ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.05)",
          },
        }}
      >
        <VuiBox p={3} display="flex" justifyContent="space-between" alignItems="center">
          <VuiTypography
            variant="h5"
            color={darkMode ? "white" : "text"}
            fontWeight="bold"
            sx={{
              fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
            }}
          >
            All Announcements
          </VuiTypography>
          <Icon
            sx={{
              cursor: "pointer",
              color: darkMode ? "white" : "#344767"
            }}
            onClick={() => setOpen(false)}
          >
            close
          </Icon>
        </VuiBox>
        <DialogContent>
          <TableContainer
            sx={{
              overflowX: "auto",
              backgroundColor: darkMode ? "transparent" : "#FFFFFF",
              borderRadius: darkMode ? "0" : "10px",
            }}
          >
            <Table>
              <VuiBox component="thead">
                <TableRow>
                  <VuiBox
                    component="th"
                    width="50px"
                    fontSize="10px"
                    fontWeight="bold"
                    py={1.5}
                    pl={1}
                    pr={1}
                    textAlign="left"
                    sx={{
                      backgroundColor: darkMode ? "transparent" : "#F5F7FA",
                      color: darkMode ? "text" : "#344767",
                      opacity: darkMode ? 0.7 : 1,
                      borderBottom: darkMode ? "1px solid #56577a" : "1px solid #E5E7EB",
                      fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
                    }}
                  >
                    NO
                  </VuiBox>
                  <VuiBox
                    component="th"
                    fontSize="10px"
                    fontWeight="bold"
                    py={1.5}
                    pl={1}
                    pr={1}
                    textAlign="left"
                    sx={{
                      backgroundColor: darkMode ? "transparent" : "#F5F7FA",
                      color: darkMode ? "text" : "#344767",
                      opacity: darkMode ? 0.7 : 1,
                      borderBottom: darkMode ? "1px solid #56577a" : "1px solid #E5E7EB",
                      fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
                    }}
                  >
                    ANNOUNCEMENT
                  </VuiBox>
                  <VuiBox
                    component="th"
                    fontSize="10px"
                    fontWeight="bold"
                    py={1.5}
                    pl={1}
                    pr={1}
                    textAlign="left"
                    sx={{
                      backgroundColor: darkMode ? "transparent" : "#F5F7FA",
                      color: darkMode ? "text" : "#344767",
                      opacity: darkMode ? 0.7 : 1,
                      borderBottom: darkMode ? "1px solid #56577a" : "1px solid #E5E7EB",
                      fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
                    }}
                  >
                    DATE
                  </VuiBox>
                  <VuiBox
                    component="th"
                    fontSize="10px"
                    fontWeight="bold"
                    py={1.5}
                    pl={1}
                    pr={1}
                    textAlign="left"
                    sx={{
                      backgroundColor: darkMode ? "transparent" : "#F5F7FA",
                      color: darkMode ? "text" : "#344767",
                      opacity: darkMode ? 0.7 : 1,
                      borderBottom: darkMode ? "1px solid #56577a" : "1px solid #E5E7EB",
                      fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
                    }}
                  >
                    STATUS
                  </VuiBox>
                </TableRow>
              </VuiBox>
              <TableBody>
                {[
                  { title: "Holiday Announcement", date: "20 Nov 2023", status: "New" },
                  { title: "Upcoming Exam: Math Unit Test", date: "25 Nov 2023", status: "New" },
                  { title: "Science Worksheet Chapter 4", date: "21 Nov 2023", status: "Archived" },
                  { title: "English Grammar Test Results", date: "21 Nov 2023", status: "Archived" },
                  { title: "Parent–Teacher Meeting", date: "24 Nov 2023", status: "New" },
                  { title: "Annual Sports Day Practice", date: "27 Nov 2023", status: "New" },
                  { title: "Library Books Return Due", date: "30 Nov 2023", status: "Archived" },
                  { title: "Winter Vacation Schedule", date: "15 Dec 2023", status: "New" },
                ].map((row, index) => (
                  <TableRow key={index}>
                    <VuiBox
                      component="td"
                      py={1.5}
                      pl={1}
                      pr={1}
                      sx={{
                        borderBottom: darkMode ? "1px solid #56577a" : "1px solid #E5E7EB",
                        backgroundColor: darkMode ? "transparent" : "#FFFFFF",
                      }}
                    >
                      <VuiTypography
                        variant="button"
                        color={darkMode ? "text" : "#344767"}
                        fontWeight="medium"
                        sx={{
                          fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
                        }}
                      >
                        {index + 1}
                      </VuiTypography>
                    </VuiBox>
                    <VuiBox
                      component="td"
                      py={1.5}
                      pl={1}
                      pr={1}
                      sx={{
                        borderBottom: darkMode ? "1px solid #56577a" : "1px solid #E5E7EB",
                        backgroundColor: darkMode ? "transparent" : "#FFFFFF",
                      }}
                    >
                      <VuiTypography
                        variant="button"
                        color={darkMode ? "white" : "#344767"}
                        fontWeight="medium"
                        sx={{
                          fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
                        }}
                      >
                        {row.title}
                      </VuiTypography>
                    </VuiBox>
                    <VuiBox
                      component="td"
                      py={1.5}
                      pl={1}
                      pr={1}
                      sx={{
                        borderBottom: darkMode ? "1px solid #56577a" : "1px solid #E5E7EB",
                        backgroundColor: darkMode ? "transparent" : "#FFFFFF",
                      }}
                    >
                      <VuiTypography
                        variant="button"
                        color={darkMode ? "text" : "#344767"}
                        fontWeight="regular"
                        sx={{
                          fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
                        }}
                      >
                        {row.date}
                      </VuiTypography>
                    </VuiBox>
                    <VuiBox
                      component="td"
                      py={1.5}
                      pl={1}
                      pr={1}
                      sx={{
                        borderBottom: darkMode ? "1px solid #56577a" : "1px solid #E5E7EB",
                        backgroundColor: darkMode ? "transparent" : "#FFFFFF",
                      }}
                    >
                      <VuiBadge
                        variant="standard"
                        badgeContent={row.status}
                        color={row.status === "New" ? "success" : "secondary"}
                        size="xs"
                        container
                        sx={({ palette: { white, success, secondary } }) => ({
                          background: row.status === "New" ? success.main : secondary.main,
                          color: white.main,
                          borderRadius: "8px",
                          padding: "4px 8px",
                        })}
                      />
                    </VuiBox>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default OrdersOverview;
