import React from "react";
import { Card, CardContent, CardMedia, Button, Box, Typography } from "@mui/material";

const CourseCard = ({ image, title, university, onOpen }) => {
    return (
        <Card
            sx={{
                background: "#FFFFFF",
                borderRadius: "12px", // rounded-xl
                overflow: "hidden",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Soft shadow
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                },
            }}
        >
            {/* Image Section */}
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
                sx={{
                    objectFit: "cover",
                    width: "100%",
                }}
            />

            {/* Content Section */}
            <CardContent sx={{ p: 2, flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                {/* Title */}
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: "16px",
                        fontWeight: "700", // bold
                        color: "#1a1a1a", // dark
                        lineHeight: "1.4",
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    {title}
                </Typography>

                {/* University / Subtitle */}
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: "14px",
                        fontWeight: "500", // medium
                        color: "#6b6b6b", // gray
                        fontFamily: "Poppins, sans-serif",
                        mb: 2,
                    }}
                >
                    {university}
                </Typography>

                {/* Button */}
                <Box sx={{ mt: "auto", display: "flex", justifyContent: "flex-start" }}>
                    <Button
                        variant="contained"
                        onClick={onOpen}
                        sx={{
                            backgroundColor: "#0F1A40", // Navy blue
                            color: "white",
                            textTransform: "none",
                            borderRadius: "9999px", // rounded-full
                            padding: "4px 16px", // px-4 py-1
                            fontSize: "14px", // text-sm
                            fontWeight: "500",
                            minWidth: "auto",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#1e2a5a",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Open
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CourseCard;
