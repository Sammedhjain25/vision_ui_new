import React, { useState, useEffect } from 'react';
import { Box, Card, Avatar, AvatarGroup, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { IoEllipsisHorizontal, IoLink, IoChatbubble } from 'react-icons/io5';

const ScrollDrivenBottomSheet = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const tasks = [
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
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 300,
                    }}
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        right: '24px',
                        width: '400px',
                        maxWidth: '90vw',
                        height: '70vh',
                        zIndex: 1000,
                        pointerEvents: 'auto',
                    }}
                >
                    <Card
                        sx={{
                            height: '100%',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            borderTopLeftRadius: '24px',
                            borderTopRightRadius: '24px',
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                            boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.15)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Handle Bar */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '12px',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '40px',
                                    height: '4px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: '2px',
                                }}
                            />
                        </Box>

                        {/* Header */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '16px 24px',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                            }}
                        >
                            <Box
                                component="h3"
                                sx={{
                                    margin: 0,
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    fontFamily: 'Poppins, sans-serif',
                                    color: '#1a1a1a',
                                }}
                            >
                                Pending Assignments
                            </Box>
                            <IconButton size="small" sx={{ color: '#666' }}>
                                <IoEllipsisHorizontal size={20} />
                            </IconButton>
                        </Box>

                        {/* Scrollable Content */}
                        <Box
                            sx={{
                                flex: 1,
                                overflowY: 'auto',
                                padding: '16px',
                                '&::-webkit-scrollbar': {
                                    width: '6px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: 'rgba(0, 0, 0, 0.05)',
                                    borderRadius: '3px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: 'rgba(0, 0, 0, 0.2)',
                                    borderRadius: '3px',
                                    '&:hover': {
                                        background: 'rgba(0, 0, 0, 0.3)',
                                    },
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {tasks.map((task) => (
                                    <motion.div
                                        key={task.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: task.id * 0.1 }}
                                    >
                                        <Card
                                            sx={{
                                                background: '#fff',
                                                borderRadius: '12px',
                                                padding: '16px',
                                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                                                border: '1px solid rgba(0, 0, 0, 0.05)',
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
                                                        transition={{ delay: task.id * 0.1 + 0.2, duration: 0.5 }}
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
                                                    {task.avatars.map((avatar, index) => (
                                                        <Avatar key={index} src={avatar} sx={{ width: 24, height: 24 }} />
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
                        </Box>
                    </Card>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollDrivenBottomSheet;
