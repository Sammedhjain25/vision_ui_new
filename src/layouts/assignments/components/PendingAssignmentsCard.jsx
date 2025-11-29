import React, { useState } from 'react';
import { Box, Card, Avatar, AvatarGroup, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { IoEllipsisHorizontal, IoLink, IoChatbubble, IoChevronUp, IoChevronDown } from 'react-icons/io5';
import { useVisionUIController } from "context";

const PendingAssignmentsCard = () => {
    const [controller] = useVisionUIController();
    const { darkMode } = controller;
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(1);

    const allTasks = [
        {
            id: 1,
            priority: 'High',
            priorityColor: '#ef4444',
            title: 'Mobile App Redesign',
            description: 'Redesign the UI for the e-commerce app based on new branding guidelines',
            progress: 30,
            avatars: [
                'https://i.pravatar.cc/150?img=1',
                'https://i.pravatar.cc/150?img=2',
            ],
            links: 3,
            comments: 1,
        },
        {
            id: 2,
            priority: 'Medium',
            priorityColor: '#f59e0b',
            title: 'API Integration',
            description: 'Connect the backend API to the mobile app and test all endpoints',
            progress: 60,
            avatars: [
                'https://i.pravatar.cc/150?img=3',
                'https://i.pravatar.cc/150?img=4',
                'https://i.pravatar.cc/150?img=5',
            ],
            links: 4,
            comments: 2,
        },
        {
            id: 3,
            priority: 'Low',
            priorityColor: '#22c55e',
            title: 'Documentation Update',
            description: 'Update the API documentation with new endpoints and examples',
            progress: 80,
            avatars: [
                'https://i.pravatar.cc/150?img=6',
                'https://i.pravatar.cc/150?img=7',
            ],
            links: 2,
            comments: 3,
        },
        {
            id: 4,
            priority: 'High',
            priorityColor: '#ef4444',
            title: 'Database Optimization',
            description: 'Optimize database queries for better performance',
            progress: 45,
            avatars: [
                'https://i.pravatar.cc/150?img=8',
            ],
            links: 5,
            comments: 4,
        },
        {
            id: 5,
            priority: 'Medium',
            priorityColor: '#f59e0b',
            title: 'User Testing',
            description: 'Conduct user testing sessions and gather feedback',
            progress: 25,
            avatars: [
                'https://i.pravatar.cc/150?img=9',
                'https://i.pravatar.cc/150?img=10',
            ],
            links: 3,
            comments: 5,
        },
        {
            id: 6,
            priority: 'Low',
            priorityColor: '#22c55e',
            title: 'Code Review',
            description: 'Review pull requests and provide feedback',
            progress: 90,
            avatars: [
                'https://i.pravatar.cc/150?img=11',
            ],
            links: 1,
            comments: 2,
        },
    ];

    const tasksPerPage = 3;
    const totalPages = Math.ceil(allTasks.length / tasksPerPage);
    const currentTasks = allTasks.slice(currentPage * tasksPerPage, (currentPage + 1) * tasksPerPage);

    const scrollPrev = () => {
        if (currentPage > 0) {
            setDirection(-1);
            setCurrentPage(currentPage - 1);
        }
    };

    const scrollNext = () => {
        if (currentPage < totalPages - 1) {
            setDirection(1);
            setCurrentPage(currentPage + 1);
        }
    };

    const variants = {
        enter: (direction) => ({
            y: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            y: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            y: direction > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
    };

    return (
        <Card
            sx={{
                background: darkMode ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
                backdropFilter: darkMode ? 'blur(20px)' : 'none',
                border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E5E7EB',
                borderRadius: '15px',
                padding: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: darkMode ? 'none' : '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Header - Fixed */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
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
                    Pending Assignments
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <IconButton
                        onClick={scrollPrev}
                        disabled={currentPage === 0}
                        sx={{
                            color: darkMode ? 'rgba(255, 255, 255, 0.5)' : '#6B7280',
                            width: '28px',
                            height: '28px',
                            '&:hover': {
                                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                            },
                            '&:disabled': {
                                opacity: 0.3,
                            },
                        }}
                    >
                        <IoChevronUp size={18} />
                    </IconButton>
                    <IconButton
                        onClick={scrollNext}
                        disabled={currentPage === totalPages - 1}
                        sx={{
                            color: darkMode ? 'rgba(255, 255, 255, 0.5)' : '#6B7280',
                            width: '28px',
                            height: '28px',
                            '&:hover': {
                                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                            },
                            '&:disabled': {
                                opacity: 0.3,
                            },
                        }}
                    >
                        <IoChevronDown size={18} />
                    </IconButton>
                </Box>
            </Box>

            {/* Fixed Height Container with Overflow Hidden */}
            <Box
                sx={{
                    flex: 1,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentPage}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            y: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            paddingRight: '8px',
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {currentTasks.map((task, index) => (
                                <motion.div
                                    key={task.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card
                                        sx={{
                                            background: '#fff',
                                            borderRadius: '12px',
                                            padding: '16px',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                        }}
                                    >
                                        {/* Priority and Menu */}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: '8px',
                                                        height: '8px',
                                                        borderRadius: '50%',
                                                        backgroundColor: task.priorityColor,
                                                    }}
                                                />
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        fontSize: '12px',
                                                        fontWeight: '500',
                                                        fontFamily: 'Poppins, sans-serif',
                                                        color: task.priorityColor,
                                                    }}
                                                >
                                                    {task.priority}
                                                </Box>
                                            </Box>
                                            <IconButton size="small" sx={{ color: '#666' }}>
                                                <IoEllipsisHorizontal size={18} />
                                            </IconButton>
                                        </Box>

                                        {/* Title */}
                                        <Box
                                            component="h4"
                                            sx={{
                                                margin: 0,
                                                marginBottom: '8px',
                                                fontSize: '15px',
                                                fontWeight: '600',
                                                fontFamily: 'Poppins, sans-serif',
                                                color: '#1a1a1a',
                                            }}
                                        >
                                            {task.title}
                                        </Box>

                                        {/* Description */}
                                        <Box
                                            component="p"
                                            sx={{
                                                margin: 0,
                                                marginBottom: '12px',
                                                fontSize: '13px',
                                                fontWeight: '400',
                                                fontFamily: 'Poppins, sans-serif',
                                                color: '#666',
                                                lineHeight: '1.5',
                                            }}
                                        >
                                            {task.description}
                                        </Box>

                                        {/* Progress Bar */}
                                        <Box sx={{ mb: 2 }}>
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    height: '6px',
                                                    backgroundColor: '#e5e7eb',
                                                    borderRadius: '3px',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${task.progress}%` }}
                                                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                                                    style={{
                                                        height: '100%',
                                                        backgroundColor: '#22c55e',
                                                        borderRadius: '3px',
                                                    }}
                                                />
                                            </Box>
                                        </Box>

                                        {/* Footer - Avatars and Actions */}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <AvatarGroup
                                                max={3}
                                                sx={{
                                                    '& .MuiAvatar-root': {
                                                        width: 24,
                                                        height: 24,
                                                        fontSize: '11px',
                                                        border: '2px solid #fff',
                                                    },
                                                }}
                                            >
                                                {task.avatars.map((avatar, idx) => (
                                                    <Avatar key={idx} src={avatar} sx={{ width: 24, height: 24 }} />
                                                ))}
                                            </AvatarGroup>

                                            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#666' }}>
                                                    <IoLink size={14} />
                                                    <Box component="span" sx={{ fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>
                                                        {task.links}
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#666' }}>
                                                    <IoChatbubble size={14} />
                                                    <Box component="span" sx={{ fontSize: '12px', fontFamily: 'Poppins, sans-serif' }}>
                                                        {task.comments}
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Card>
                                </motion.div>
                            ))}
                        </Box>
                    </motion.div>
                </AnimatePresence>
            </Box>

            {/* Page Indicators */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    mt: 2,
                }}
            >
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => {
                            setDirection(index > currentPage ? 1 : -1);
                            setCurrentPage(index);
                        }}
                        sx={{
                            width: currentPage === index ? '24px' : '8px',
                            height: '8px',
                            borderRadius: '4px',
                            backgroundColor: darkMode 
                                ? (currentPage === index ? '#fff' : 'rgba(255, 255, 255, 0.3)')
                                : (currentPage === index ? '#000000' : '#D1D5DB'),
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </Box>
        </Card>
    );
};

export default PendingAssignmentsCard;
