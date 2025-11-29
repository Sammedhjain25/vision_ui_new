import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { useVisionUIController } from "context";

// You can replace these with actual course images
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";
import cardImg from "assets/images/cardimgfree.png";

const CourseGallery = () => {
    const [controller] = useVisionUIController();
    const { darkMode } = controller;

    const courses = [
        {
            image: profile1,
            title: "AI in cyber security: Foundational principles",
            university: "Harvard university",
            price: "$Price",
            badge: "HARVARD UNIVERSITY"
        },
        {
            image: profile2,
            title: "AI in cyber security: Foundational principles",
            university: "Harvard university",
            price: "$Price",
            badge: "HARVARD UNIVERSITY"
        },
        {
            image: profile3,
            title: "AI in cyber security: Foundational principles",
            university: "Harvard university",
            price: "$Price",
            badge: "HARVARD UNIVERSITY"
        },
        {
            image: cardImg,
            title: "AI in cyber security: Foundational principles",
            university: "Harvard university",
            price: "$Price",
            badge: "HARVARD UNIVERSITY"
        },
    ];

    return (
        <Box
            sx={{
                width: '100%',
                px: { xs: 2, md: 4 },
                py: 3,
            }}
        >
            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: '32px', md: '48px' },
                        color: darkMode ? '#FFFFFF' : '#000000',
                        mb: 1,
                        lineHeight: 1.2,
                    }}
                >
                    Purchases
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: '16px', md: '18px' },
                        color: darkMode ? 'rgba(255, 255, 255, 0.8)' : '#000000',
                    }}
                >
                    Available courses
                </Typography>
            </Box>

            {/* Horizontal Scrollable Course Cards */}
            <Box
                sx={{
                    display: 'flex',
                    gap: 3,
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    pb: 2,
                    scrollbarWidth: 'thin',
                    scrollbarColor: darkMode ? 'rgba(255, 255, 255, 0.2) transparent' : 'rgba(0, 0, 0, 0.2) transparent',
                    '&::-webkit-scrollbar': {
                        height: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                    },
                }}
            >
                {courses.map((course, index) => (
                    <Card
                        key={index}
                        sx={{
                            minWidth: { xs: '280px', sm: '320px', md: '360px' },
                            maxWidth: { xs: '280px', sm: '320px', md: '360px' },
                            flexShrink: 0,
                            backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E5E7EB',
                            boxShadow: darkMode ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: darkMode ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 8px 16px rgba(0, 0, 0, 0.15)',
                            },
                        }}
                    >
                        {/* Image Section with Badge */}
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: { xs: '180px', md: '200px' },
                                overflow: 'hidden',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={course.image}
                                alt={course.title}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            {/* University Badge Overlay */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 12,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '4px',
                                    padding: '6px 12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                }}
                            >
                                {/* Harvard Logo Placeholder */}
                                <Box
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                        backgroundColor: darkMode ? '#1A73E8' : '#1A73E8',
                                        borderRadius: '2px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#FFFFFF',
                                        fontSize: '10px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    H
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '10px',
                                        fontWeight: 600,
                                        color: '#000000',
                                        letterSpacing: '0.5px',
                                    }}
                                >
                                    {course.badge}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Content Section */}
                        <CardContent
                            sx={{
                                p: 2.5,
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            {/* Title */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    color: darkMode ? '#FFFFFF' : '#000000',
                                    mb: 1,
                                    lineHeight: 1.4,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}
                            >
                                {course.title}
                            </Typography>

                            {/* University */}
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: darkMode ? 'rgba(255, 255, 255, 0.7)' : '#000000',
                                    mb: 2.5,
                                }}
                            >
                                {course.university}
                            </Typography>

                            {/* Price and Buy Now Button */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mt: 'auto',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        color: darkMode ? '#FFFFFF' : '#000000',
                                    }}
                                >
                                    {course.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: darkMode ? '#1A73E8' : '#1A73E8',
                                        color: '#FFFFFF',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        borderRadius: '8px',
                                        padding: '8px 20px',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            backgroundColor: darkMode ? '#1557B0' : '#1557B0',
                                            boxShadow: '0 4px 8px rgba(26, 115, 232, 0.3)',
                                        },
                                        transition: 'all 0.2s ease-in-out',
                                    }}
                                >
                                    Buy Now
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default CourseGallery;
