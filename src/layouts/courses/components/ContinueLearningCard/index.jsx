/*!
 *
 * Continue Learning Card Component
 *
 */

import { Card } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import { Favorite } from "@mui/icons-material";

function ContinueLearningCard({ course, lesson, author, authorAvatar, likes, thumbnail }) {
  return (
    <Card
      sx={{
        minWidth: "320px",
        maxWidth: "380px",
        borderRadius: "16px",
        background: "linear-gradient(135deg, rgba(20, 20, 40, 0.9) 0%, rgba(30, 30, 50, 0.9) 100%)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 48px rgba(102, 126, 234, 0.3)",
        },
        overflow: "hidden",
        border: "1px solid rgba(102, 126, 234, 0.1)",
      }}
    >
      <VuiBox
        sx={{
          width: "100%",
          height: "200px",
          backgroundImage: thumbnail ? `url(${thumbnail})` : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      />
      <VuiBox p={2.5}>
        <VuiTypography 
          variant="h6" 
          color="white" 
          fontWeight="bold" 
          mb={2}
          sx={{
            fontSize: "16px",
            lineHeight: "1.4",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {course}
        </VuiTypography>
        <VuiBox display="flex" alignItems="center" justifyContent="space-between" mb={1.5}>
          <VuiBox display="flex" alignItems="center" gap={1}>
            <VuiAvatar
              src={authorAvatar}
              alt={author}
              size="sm"
              sx={{
                width: "32px",
                height: "32px",
                border: "2px solid rgba(102, 126, 234, 0.3)",
              }}
            />
            <VuiTypography variant="button" color="text" fontWeight="regular" sx={{ fontSize: "13px" }}>
              {author}
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" alignItems="center" gap={0.5}>
            <Favorite sx={{ fontSize: "16px", color: "#667eea" }} />
            <VuiTypography variant="caption" color="text" fontWeight="medium" sx={{ fontSize: "12px" }}>
              {likes}+
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default ContinueLearningCard;

