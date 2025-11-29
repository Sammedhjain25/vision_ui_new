import React from 'react';
import { Box, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Avatar } from '@mui/material';
import { IoBookOutline } from 'react-icons/io5';

const courseWiseAttendance = [
    { course: 'Chemistry', attendance: 90, totalClasses: 100, present: 90, absent: 10, status: 'Good' },
    { course: 'Biology', attendance: 94, totalClasses: 100, present: 94, absent: 6, status: 'Good' },
    { course: 'Mathematics', attendance: 88, totalClasses: 100, present: 88, absent: 12, status: 'Good' },
    { course: 'English', attendance: 95, totalClasses: 100, present: 95, absent: 5, status: 'Good' },
    { course: 'History', attendance: 87, totalClasses: 100, present: 87, absent: 13, status: 'Good' },
    { course: 'Geography', attendance: 91, totalClasses: 100, present: 91, absent: 9, status: 'Good' },
];

const SubjectAttendanceCard = () => {
    return (
        <Card
            sx={{
                background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '24px',
                height: '100%',
                boxShadow: 'none',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box mb={3}>
                <Typography
                    variant="h6"
                    color="white"
                    fontWeight="bold"
                    sx={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    Subject wise Attendance
                </Typography>
            </Box>

            <TableContainer sx={{ flex: 1, overflowY: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {['COURSE', 'TOTAL', 'STATUS', 'ABSENT', 'PRESENT'].map((head) => (
                                <TableCell
                                    key={head}
                                    sx={{
                                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: '#a0aec0',
                                        fontWeight: 'bold',
                                        fontSize: '10px',
                                        textTransform: 'uppercase',
                                        fontFamily: 'Poppins, sans-serif',
                                        pl: 0,
                                        py: 2,
                                    }}
                                >
                                    {head}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courseWiseAttendance.map((row) => (
                            <TableRow key={row.course}>
                                {/* Author Column (Subject) */}
                                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', pl: 0, py: 2 }}>
                                    <Box display="flex" alignItems="center" gap={2}>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                width: '36px',
                                                height: '36px',
                                                background: 'transparent',
                                                borderRadius: '12px',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    background: 'linear-gradient(135deg, #0075FF 0%, #00C6FF 100%)',
                                                    borderRadius: '12px',
                                                }}
                                            >
                                                <IoBookOutline size={18} color="#fff" />
                                            </Box>
                                        </Avatar>
                                        <Box>
                                            <Typography
                                                variant="button"
                                                color="white"
                                                fontWeight="bold"
                                                display="block"
                                                sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}
                                            >
                                                {row.course}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text"
                                                sx={{ fontFamily: 'Poppins, sans-serif', color: '#a0aec0' }}
                                            >
                                                Subject
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>

                                {/* Total Column */}
                                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', py: 2 }}>
                                    <Typography
                                        variant="button"
                                        color="white"
                                        fontWeight="bold"
                                        sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}
                                    >
                                        {row.totalClasses}
                                    </Typography>
                                </TableCell>

                                {/* Status Column */}
                                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', py: 2 }}>
                                    <Box
                                        sx={{
                                            background: row.status === 'Good' ? '#01B574' : '#E31A1A',
                                            borderRadius: '8px',
                                            padding: '4px 12px',
                                            display: 'inline-block',
                                            minWidth: '65px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="caption"
                                            color="white"
                                            fontWeight="bold"
                                            sx={{ fontFamily: 'Poppins, sans-serif' }}
                                        >
                                            {row.status}
                                        </Typography>
                                    </Box>
                                </TableCell>

                                {/* Absent Column */}
                                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', py: 2 }}>
                                    <Typography
                                        variant="button"
                                        color="white"
                                        fontWeight="bold"
                                        sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}
                                    >
                                        {row.absent}
                                    </Typography>
                                </TableCell>

                                {/* Present Column */}
                                <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', py: 2 }}>
                                    <Typography
                                        variant="button"
                                        color="white"
                                        fontWeight="bold"
                                        sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}
                                    >
                                        {row.present}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
};

export default SubjectAttendanceCard;
