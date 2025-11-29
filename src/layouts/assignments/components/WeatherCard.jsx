import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { useVisionUIController } from "context";

const WeatherCard = ({
    title = "12",
    label = "Total Assignments",
    icon,
    gradientStart = "#0f1535",
    gradientEnd = "#1a1f3a"
}) => {
    const [controller] = useVisionUIController();
    const { darkMode } = controller;

    return (
        <Card
            sx={{
                background: darkMode 
                    ? `linear-gradient(127.09deg, ${gradientStart} 19.41%, ${gradientEnd} 76.65%)`
                    : '#FFFFFF',
                backdropFilter: darkMode ? 'blur(20px)' : 'none',
                borderRadius: '20px',
                padding: '18px',
                height: '110px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: darkMode ? '0 20px 27px 0 rgba(0, 0, 0, 0.05)' : '0px 4px 6px rgba(0, 0, 0, 0.1)',
                border: darkMode ? 'none' : '1px solid #E5E7EB',
            }}
        >
            <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Box display="flex" flexDirection="column">
                    <Typography
                        variant="caption"
                        fontWeight="medium"
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            color: darkMode ? '#FFFFFF' : '#000000',
                            opacity: darkMode ? 0.9 : 1,
                            fontSize: '12px',
                            mb: 0.5
                        }}
                    >
                        {label}
                    </Typography>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '24px',
                            color: darkMode ? '#FFFFFF' : '#000000',
                            opacity: 1
                        }}
                    >
                        {title}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: darkMode ? '#0075FF' : '#1A73E8',
                        boxShadow: darkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        color: '#FFFFFF',
                        '& svg': {
                            fill: '#FFFFFF',
                            stroke: '#FFFFFF',
                            color: '#FFFFFF'
                        }
                    }}
                >
                    {icon}
                </Box>
            </Box>
        </Card>
    );
};

export default WeatherCard;
