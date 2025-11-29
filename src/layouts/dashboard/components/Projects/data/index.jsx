// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";

export default function data(darkMode = true) {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "course", align: "left" },
      { name: "teacher", align: "left" },
      { name: "progress", align: "center" },
      { name: "completion", align: "center" },
    ],

    rows: [
      {
        course: (
          <VuiBox display="flex" alignItems="center">
            <AdobeXD size="20px" />
            <VuiTypography 
              pl="16px" 
              color={darkMode ? "white" : "text"} 
              variant="button" 
              fontWeight="medium"
              sx={{
                fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
              }}
            >
              Mathematics
            </VuiTypography>
          </VuiBox>
        ),
        teacher: (
          <VuiBox display="flex" py={1}>
            {avatars([[avatar1, "Mrs. Anjali"]])}
          </VuiBox>
        ),
        progress: (
          <VuiTypography 
            variant="button" 
            color={darkMode ? "white" : "text"} 
            fontWeight="bold"
            sx={{
              fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
            }}
          >
            60%
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography 
              color={darkMode ? "white" : "text"} 
              variant="button" 
              fontWeight="bold"
              sx={{
                fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
              }}
            >
              In Progress
            </VuiTypography>
            <VuiProgress value={60} color="info" label={false} sx={{ background: darkMode ? "#2D2E5F" : "#E5E7EB" }} />
          </VuiBox>
        ),
      },
      {
        course: (
          <VuiBox display="flex" alignItems="center">
            <Atlassian size="20px" />
            <VuiTypography 
              pl="16px" 
              color={darkMode ? "white" : "text"} 
              variant="button" 
              fontWeight="medium"
              sx={{
                fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
              }}
            >
              Science
            </VuiTypography>
          </VuiBox>
        ),
        teacher: (
          <VuiBox display="flex" py={1}>
            {avatars([[avatar2, "Mr. Kumar"]])}
          </VuiBox>
        ),
        progress: (
          <VuiTypography 
            variant="button" 
            color={darkMode ? "white" : "text"} 
            fontWeight="bold"
            sx={{
              fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
            }}
          >
            80%
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography 
              color={darkMode ? "white" : "text"} 
              variant="button" 
              fontWeight="bold"
              sx={{
                fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
              }}
            >
              On Track
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: darkMode ? "#2D2E5F" : "#E5E7EB" }} />
          </VuiBox>
        ),
      },
      {
        course: (
          <VuiBox display="flex" alignItems="center">
            <Slack size="20px" />
            <VuiTypography 
              pl="16px" 
              color={darkMode ? "white" : "text"} 
              variant="button" 
              fontWeight="medium"
              sx={{
                fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
              }}
            >
              English
            </VuiTypography>
          </VuiBox>
        ),
        teacher: (
          <VuiBox display="flex" py={1}>
            {avatars([[avatar3, "Ms. Priya"]])}
          </VuiBox>
        ),
        progress: (
          <VuiTypography 
            variant="button" 
            color={darkMode ? "white" : "text"} 
            fontWeight="bold"
            sx={{
              fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
            }}
          >
            100%
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography 
              color={darkMode ? "white" : "text"} 
              variant="button" 
              fontWeight="bold"
              sx={{
                fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
              }}
            >
              Completed
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: darkMode ? "#2D2E5F" : "#E5E7EB" }} />
          </VuiBox>
        ),
      },
      {
        course: (
          <VuiBox display="flex" alignItems="center">
            <Spotify size="20px" />
            <VuiTypography 
              pl="16px" 
              color={darkMode ? "white" : "text"} 
              variant="button" 
              fontWeight="medium"
              sx={{
                fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
              }}
            >
              Social Studies
            </VuiTypography>
          </VuiBox>
        ),
        teacher: (
          <VuiBox display="flex" py={1}>
            {avatars([[avatar4, "Mr. Rajesh"]])}
          </VuiBox>
        ),
        progress: (
          <VuiTypography 
            variant="button" 
            color={darkMode ? "white" : "text"} 
            fontWeight="bold"
            sx={{
              fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
            }}
          >
            45%
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography 
              color={darkMode ? "white" : "text"} 
              variant="button" 
              fontWeight="bold"
              sx={{
                fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
              }}
            >
              Needs Improvement
            </VuiTypography>
            <VuiProgress value={45} color="info" label={false} sx={{ background: darkMode ? "#2D2E5F" : "#E5E7EB" }} />
          </VuiBox>
        ),
      },
      {
        course: (
          <VuiBox display="flex" alignItems="center">
            <Jira size="20px" />
            <VuiTypography 
              pl="16px" 
              color={darkMode ? "white" : "text"} 
              variant="button" 
              fontWeight="medium"
              sx={{
                fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
              }}
            >
              Computer Science
            </VuiTypography>
          </VuiBox>
        ),
        teacher: (
          <VuiBox display="flex" py={1}>
            {avatars([[avatar1, "Mrs. Kavya"]])}
          </VuiBox>
        ),
        progress: (
          <VuiTypography 
            variant="button" 
            color={darkMode ? "white" : "text"} 
            fontWeight="bold"
            sx={{
              fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
            }}
          >
            30%
          </VuiTypography>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography 
              color={darkMode ? "white" : "text"} 
              variant="button" 
              fontWeight="bold"
              sx={{
                fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
              }}
            >
              Started
            </VuiTypography>
            <VuiProgress value={30} color="info" label={false} sx={{ background: darkMode ? "#2D2E5F" : "#E5E7EB" }} />
          </VuiBox>
        ),
      },
    ],
  };
}
