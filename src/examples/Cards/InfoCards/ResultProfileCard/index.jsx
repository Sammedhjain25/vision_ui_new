// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Context
import { useVisionUIController } from "context";

function ResultProfileCard({ title, description, info, social, avatar }) {
    const [controller] = useVisionUIController();
    const { darkMode } = controller;
    const labels = [];
    const values = [];
    const { size } = typography;

    // Convert this form `objectKey` of the object key in to this `object key`
    Object.keys(info).forEach((el) => {
        if (el.match(/[A-Z\s]+/)) {
            const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
            const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

            labels.push(newElement);
        } else {
            labels.push(el);
        }
    });

    // Push the object values into the values array
    Object.values(info).forEach((el) => values.push(el));

    // Render the card social media icons
    const renderSocial = social ? social.map(({ link, icon, color }) => (
        <VuiBox
            key={color}
            component="a"
            href={link}
            target="_blank"
            rel="noreferrer"
            fontSize={size.lg}
            color="white"
            pr={1}
            pl={0.5}
            lineHeight={1}
        >
            {icon}
        </VuiBox>
    )) : null;

    return (
        <Card
            sx={{
                height: "100%",
                padding: '8px',
            }}
        >
            <VuiBox display="flex" mb="20px" justifyContent="space-between" alignItems="center">
                <VuiTypography variant="lg" fontWeight="bold" color={darkMode ? "white" : "dark"} textTransform="capitalize">
                    {title}
                </VuiTypography>
            </VuiBox>
            {avatar && (
                <VuiBox mb={3} display="flex" justifyContent="center">
                    <VuiAvatar
                        src={avatar}
                        alt="profile-image"
                        variant="rounded"
                        size="xl"
                        shadow="sm"
                    />
                </VuiBox>
            )}
            <VuiBox>
                {description && (
                    <>
                        <VuiBox mb={3} lineHeight={1.6}>
                            <VuiTypography variant="button" color="text" fontWeight="regular" fontSize="14px">
                                {description}
                            </VuiTypography>
                        </VuiBox>
                        <VuiBox opacity={0.3} mb={3}>
                            <Divider />
                        </VuiBox>
                    </>
                )}
                <VuiBox>
                    {labels.map((label, key) => (
                        <VuiBox
                            key={label}
                            mb={2.5}
                            sx={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '12px',
                                padding: '14px 16px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <VuiTypography
                                variant="caption"
                                color="text"
                                fontWeight="medium"
                                textTransform="capitalize"
                                sx={{ fontSize: '11px', marginBottom: '4px', display: 'block' }}
                            >
                                {label}
                            </VuiTypography>
                            <VuiTypography
                                variant="button"
                                fontWeight="medium"
                                color={darkMode ? "white" : "dark"}
                                sx={{ fontSize: '14px' }}
                            >
                                {values[key]}
                            </VuiTypography>
                        </VuiBox>
                    ))}
                    {social && social.length > 0 && (
                        <VuiBox
                            display="flex"
                            alignItems="center"
                            gap={1.5}
                            mt={3}
                            sx={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '12px',
                                padding: '14px 16px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                        >
                            <VuiTypography
                                variant="caption"
                                fontWeight="medium"
                                color="text"
                                textTransform="capitalize"
                                sx={{ fontSize: '11px' }}
                            >
                                Social:
                            </VuiTypography>
                            <VuiBox display="flex" gap={1}>
                                {renderSocial}
                            </VuiBox>
                        </VuiBox>
                    )}
                </VuiBox>
            </VuiBox>
        </Card>
    );
}

// Typechecking props for the ResultProfileCard
ResultProfileCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    info: PropTypes.objectOf(PropTypes.string).isRequired,
    social: PropTypes.arrayOf(PropTypes.object),
    avatar: PropTypes.string,
};

export default ResultProfileCard;
