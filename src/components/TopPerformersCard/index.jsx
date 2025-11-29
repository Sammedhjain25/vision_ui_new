/*!
=========================================================
* Vision UI Free React - v1.0.0
=========================================================
*/

// @mui material components
import Card from "@mui/material/Card";

// Images
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

function TopPerformersCard() {
  const { secondary, gradients } = colors;

  const performers = [
    {
      name: "Jack Blade",
      achievement: "Best in Marks",
      score: "9.9 GPA",
      avatar: avatar1,
    },
    {
      name: "Ann Kennedy",
      achievement: "Best in Attendance",
      score: "100%",
      avatar: avatar2,
    },
    {
      name: "Marta Lewis",
      achievement: "Best Exam Result",
      score: "10/10",
      avatar: avatar3,
    },
  ];

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "380px",
        flexShrink: 0,
        background: `linear-gradient(${gradients.cardDark.deg}, ${gradients.cardDark.main}, ${gradients.cardDark.state})`,
        borderRadius: "24px",
        padding: "24px",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <VuiBox mb={2}>
        <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
          Top Performers
        </VuiTypography>
      </VuiBox>

      <VuiBox display="flex" flexDirection="column" gap={2} flex={1}>
        {performers.map((performer, index) => (
          <VuiBox
            key={index}
            display="flex"
            alignItems="center"
            gap={2}
            p={1.5}
            sx={{
              borderRadius: "12px",
              background: `linear-gradient(${gradients.cardContent.deg}, ${gradients.cardContent.main}, ${gradients.cardContent.state})`,
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            <VuiAvatar
              src={performer.avatar}
              alt={performer.name}
              variant="circular"
              size="md"
              shadow="md"
            />
            <VuiBox flex={1}>
              <VuiTypography variant="button" fontWeight="bold" color="white">
                {performer.name}
              </VuiTypography>
              <VuiTypography variant="caption" color="text" fontWeight="regular">
                {performer.achievement}
              </VuiTypography>
            </VuiBox>
            <VuiBox
              sx={{
                background: `linear-gradient(${gradients.primary.deg}, ${gradients.primary.main}, ${gradients.primary.state})`,
                borderRadius: "8px",
                padding: "8px 16px",
                minWidth: "60px",
                textAlign: "center",
              }}
            >
              <VuiTypography variant="button" fontWeight="bold" color="white">
                {performer.score}
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        ))}
      </VuiBox>
    </Card>
  );
}

export default TopPerformersCard;

