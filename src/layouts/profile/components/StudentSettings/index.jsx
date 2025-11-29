import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiSwitch from "components/VuiSwitch";

function StudentSettings() {
    const [darkMode, setDarkMode] = useState(true);
    const [profileVisibility, setProfileVisibility] = useState(true);
    const [showGrades, setShowGrades] = useState(true);
    const [usageAnalytics, setUsageAnalytics] = useState(false);

    return (
        <Card sx={{ minHeight: "490px", height: "100%" }}>
            <VuiBox mb="26px">
                <VuiTypography variant="lg" fontWeight="bold" color="white" textTransform="capitalize">
                    Settings
                </VuiTypography>
            </VuiBox>
            <VuiBox lineHeight={1.25}>
                {/* Language & Region Section */}
                <VuiTypography
                    variant="xxs"
                    fontWeight="medium"
                    mb="20px"
                    color="text"
                    textTransform="uppercase"
                >
                    Language & Region
                </VuiTypography>
                <VuiBox display="flex" mb="24px">
                    <VuiBox width="100%">
                        <VuiTypography variant="button" fontWeight="medium" color="white" mb="4px">
                            Language
                        </VuiTypography>
                        <VuiTypography variant="button" fontWeight="regular" color="text">
                            English (US)
                        </VuiTypography>
                    </VuiBox>
                </VuiBox>

                {/* Appearance Section */}
                <VuiTypography
                    variant="xxs"
                    fontWeight="medium"
                    mb="20px"
                    color="text"
                    textTransform="uppercase"
                >
                    Appearance
                </VuiTypography>
                <VuiBox display="flex" mb="24px">
                    <VuiBox mt={0.25}>
                        <VuiSwitch color="info" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                    </VuiBox>
                    <VuiBox width="80%" ml={2}>
                        <VuiTypography variant="button" fontWeight="regular" color="text">
                            Dark Mode
                        </VuiTypography>
                    </VuiBox>
                </VuiBox>

                {/* Privacy Section */}
                <VuiTypography
                    variant="xxs"
                    fontWeight="medium"
                    mb="20px"
                    color="text"
                    textTransform="uppercase"
                >
                    Privacy
                </VuiTypography>
                <VuiBox display="flex" mb="14px">
                    <VuiBox mt={0.25}>
                        <VuiSwitch
                            color="info"
                            checked={profileVisibility}
                            onChange={() => setProfileVisibility(!profileVisibility)}
                        />
                    </VuiBox>
                    <VuiBox width="80%" ml={2}>
                        <VuiTypography variant="button" fontWeight="regular" color="text">
                            Profile Visibility
                        </VuiTypography>
                    </VuiBox>
                </VuiBox>
                <VuiBox display="flex" mb="14px">
                    <VuiBox mt={0.25}>
                        <VuiSwitch
                            color="info"
                            checked={showGrades}
                            onChange={() => setShowGrades(!showGrades)}
                        />
                    </VuiBox>
                    <VuiBox width="80%" ml={2}>
                        <VuiTypography variant="button" fontWeight="regular" color="text">
                            Show Grades
                        </VuiTypography>
                    </VuiBox>
                </VuiBox>
                <VuiBox display="flex">
                    <VuiBox mt={0.25}>
                        <VuiSwitch
                            color="info"
                            checked={usageAnalytics}
                            onChange={() => setUsageAnalytics(!usageAnalytics)}
                        />
                    </VuiBox>
                    <VuiBox width="80%" ml={2}>
                        <VuiTypography variant="button" fontWeight="regular" color="text">
                            Usage Analytics
                        </VuiTypography>
                    </VuiBox>
                </VuiBox>
            </VuiBox>
        </Card>
    );
}

export default StudentSettings;
