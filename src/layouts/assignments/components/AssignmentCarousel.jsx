import React, { useState, useRef } from 'react';
import { Box, Card, Button, Snackbar, Alert } from '@mui/material';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { useVisionUIController } from "context";

const AssignmentCarousel = () => {
    const [controller] = useVisionUIController();
    const { darkMode } = controller;
    const [uploadStatus, setUploadStatus] = useState({ open: false, message: '', severity: 'success' });
    const fileInputRefs = useRef({});
    const slides = [
        {
            id: 1,
            title: 'Mathematics Assignment',
            description: 'Complete chapters 5-7 exercises and solve all practice problems',
            dueDate: 'Due: Tomorrow',
            subject: 'Mathematics',
            color: '#ef4444',
            bgGradient: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)', // Light Red
            textColor: '#7f1d1d',
            descColor: '#991b1b'
        },
        {
            id: 2,
            title: 'Science Project',
            description: 'Create a solar system presentation with detailed planet information',
            dueDate: 'Due: 3 days',
            subject: 'Science',
            color: '#8b5cf6',
            bgGradient: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)', // Light Purple
            textColor: '#4c1d95',
            descColor: '#5b21b6'
        },
        {
            id: 3,
            title: 'English Essay',
            description: 'Write a 500-word essay about climate change and its effects',
            dueDate: 'Due: 5 days',
            subject: 'English',
            color: '#3b82f6',
            bgGradient: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', // Light Blue
            textColor: '#1e3a8a',
            descColor: '#1e40af'
        },
        {
            id: 4,
            title: 'History Report',
            description: 'Research and present about World War II major events',
            dueDate: 'Due: 1 week',
            subject: 'History',
            color: '#f59e0b',
            bgGradient: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', // Light Orange
            textColor: '#78350f',
            descColor: '#92400e'
        },
        {
            id: 5,
            title: 'Computer Science',
            description: 'Implement a binary search tree in Python',
            dueDate: 'Due: 2 weeks',
            subject: 'CS',
            color: '#10b981',
            bgGradient: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)', // Light Green
            textColor: '#064e3b',
            descColor: '#065f46'
        },
        {
            id: 6,
            title: 'Art Project',
            description: 'Create a digital painting using perspective techniques',
            dueDate: 'Due: 3 weeks',
            subject: 'Art',
            color: '#ec4899',
            bgGradient: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)', // Light Pink
            textColor: '#831843',
            descColor: '#9d174d'
        },
    ];

    const handleFileUpload = (assignmentId, event) => {
        const file = event.target.files[0];
        if (!file) return;

        const validTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        const validExtensions = ['.pdf', '.doc', '.docx'];
        const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

        if (!validTypes.includes(file.type) && !validExtensions.includes(fileExtension)) {
            setUploadStatus({
                open: true,
                message: 'Invalid file format! Please upload only PDF or DOC/DOCX files.',
                severity: 'error'
            });
            event.target.value = ''; // Reset input
            return;
        }

        // File is valid - show success message
        setUploadStatus({
            open: true,
            message: `Assignment submitted successfully! File: ${file.name}`,
            severity: 'success'
        });

        // Reset the file input
        event.target.value = '';

        // Here you can add logic to upload the file to your server
        console.log('Uploading file:', file.name, 'for assignment:', assignmentId);
    };

    const handleSubmitClick = (assignmentId) => {
        // Trigger the hidden file input
        if (fileInputRefs.current[assignmentId]) {
            fileInputRefs.current[assignmentId].click();
        }
    };

    const handleCloseSnackbar = () => {
        setUploadStatus({ ...uploadStatus, open: false });
    };


    return (
        <Card
            sx={{
                background: darkMode 
                    ? 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
                    : '#FFFFFF',
                backdropFilter: darkMode ? 'blur(20px)' : 'none',
                borderRadius: '20px',
                padding: { xs: '16px', md: '24px' },
                height: '100%',
                minHeight: { xs: '400px', md: '500px' },
                maxHeight: { xs: '400px', md: '500px' },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: darkMode ? 'none' : '0px 4px 6px rgba(0, 0, 0, 0.1)',
                border: darkMode ? 'none' : '1px solid #E5E7EB',
            }}
        >
            {/* Header */}
            <Box sx={{ mb: 3 }}>
                <Box
                    component="h3"
                    sx={{
                        margin: 0,
                        fontSize: '18px',
                        fontWeight: '600',
                        fontFamily: 'Poppins, sans-serif',
                        color: darkMode ? '#fff' : '#000000',
                    }}
                >
                    Submit Today
                </Box>
            </Box>

            {/* Scrollable Container */}
            <Box
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    scrollBehavior: 'smooth',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    pr: '8px',
                    // Hide scrollbar
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none', // IE and Edge
                    '&::-webkit-scrollbar': {
                        display: 'none', // Chrome, Safari, Opera
                    },
                }}
            >
                {slides.map((item) => (
                    <Card
                        key={item.id}
                        sx={{
                            background: item.bgGradient,
                            borderRadius: '16px',
                            padding: '20px',
                            position: 'relative',
                            overflow: 'hidden',
                            minHeight: '140px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            border: 'none',
                            flexShrink: 0,
                        }}
                    >
                        {/* Subject Badge */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                backgroundColor: '#fff',
                                color: item.color,
                                padding: '4px 12px',
                                borderRadius: '12px',
                                fontSize: '11px',
                                fontWeight: '600',
                                fontFamily: 'Poppins, sans-serif',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                            }}
                        >
                            {item.subject}
                        </Box>

                        {/* Content */}
                        <Box>
                            <Box
                                component="h4"
                                sx={{
                                    margin: 0,
                                    marginBottom: '8px',
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    fontFamily: 'Poppins, sans-serif',
                                    color: item.textColor,
                                    pr: 8,
                                }}
                            >
                                {item.title}
                            </Box>
                            <Box
                                component="p"
                                sx={{
                                    margin: 0,
                                    fontSize: '13px',
                                    fontWeight: '400',
                                    fontFamily: 'Poppins, sans-serif',
                                    color: item.descColor,
                                    lineHeight: '1.5',
                                }}
                            >
                                {item.description}
                            </Box>
                        </Box>

                        {/* Footer */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mt: 2,
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    fontFamily: 'Poppins, sans-serif',
                                    color: item.textColor,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        backgroundColor: item.color,
                                    }}
                                />
                                {item.dueDate}
                            </Box>

                            {/* Submit Button */}
                            <Box>
                                <input
                                    type="file"
                                    ref={(el) => (fileInputRefs.current[item.id] = el)}
                                    onChange={(e) => handleFileUpload(item.id, e)}
                                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    style={{ display: 'none' }}
                                />
                                <Button
                                    onClick={() => handleSubmitClick(item.id)}
                                    startIcon={<IoCloudUploadOutline size={16} />}
                                    sx={{
                                        backgroundColor: item.color,
                                        color: '#fff',
                                        fontSize: '11px',
                                        fontWeight: '600',
                                        fontFamily: 'Poppins, sans-serif',
                                        padding: '6px 14px',
                                        borderRadius: '10px',
                                        textTransform: 'none',
                                        boxShadow: `0 4px 12px ${item.color}40`,
                                        '&:hover': {
                                            backgroundColor: item.color,
                                            opacity: 0.9,
                                            transform: 'translateY(-2px)',
                                            boxShadow: `0 6px 16px ${item.color}60`,
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </Card>
                ))}
            </Box>

            {/* Upload Status Snackbar */}
            <Snackbar
                open={uploadStatus.open}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={uploadStatus.severity}
                    sx={{
                        width: '100%',
                        fontFamily: 'Poppins, sans-serif',
                        borderRadius: '12px',
                    }}
                >
                    {uploadStatus.message}
                </Alert>
            </Snackbar>
        </Card>
    );
};

export default AssignmentCarousel;
