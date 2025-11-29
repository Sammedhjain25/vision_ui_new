import React from 'react';
import { Card, Stack, Grid } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import { useVisionUIController } from 'context';
import linearGradient from 'assets/theme/functions/linearGradient';
import colors from 'assets/theme/base/colors';

import CircularProgress from '@mui/material/CircularProgress';
import { IoSchoolOutline, IoBookOutline, IoCheckmarkCircleOutline, IoCalendarOutline } from 'react-icons/io5';

const AcademicInformation = () => {
    const [controller] = useVisionUIController();
    const { darkMode } = controller;
    const { gradients, info } = colors;
    const { cardContent } = gradients;
    return (
        <Card
            sx={({ breakpoints }) => ({
                [breakpoints.up('xxl')]: {
                    maxHeight: '400px'
                }
            })}>
            <VuiBox display='flex' flexDirection='column'>
                <VuiTypography variant='lg' color={darkMode ? 'white' : 'text'} fontWeight='bold' mb='6px'>
                    Academic Information
                </VuiTypography>
                <VuiTypography variant='button' color={darkMode ? 'text' : 'text'} fontWeight='regular' mb='30px' sx={{ color: darkMode ? undefined : '#000000' }}>
                    Hello, Sarah Johnson! Here is your academic overview.
                </VuiTypography>
                <Stack
                    spacing='24px'
                    background='#fff'
                    sx={({ breakpoints }) => ({
                        [breakpoints.up('sm')]: {
                            flexDirection: 'column'
                        },
                        [breakpoints.up('md')]: {
                            flexDirection: 'row'
                        },
                        [breakpoints.only('xl')]: {
                            flexDirection: 'column'
                        }
                    })}>
                    <VuiBox
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        sx={({ breakpoints }) => ({
                            [breakpoints.only('sm')]: {
                                alignItems: 'center'
                            }
                        })}
                        alignItems='center'>
                        <VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
                            <CircularProgress
                                variant='determinate'
                                value={87}
                                size={170}
                                color='info'
                                thickness={4}
                                sx={{
                                    '& .MuiCircularProgress-circle': {
                                        stroke: darkMode ? undefined : '#1A73E8',
                                    }
                                }}
                            />
                            <VuiBox
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                alignItems='center'
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <IoSchoolOutline size={40} color='#0075FF' style={{ marginBottom: '8px' }} />
                                <VuiTypography color={darkMode ? 'white' : 'text'} variant='h2' fontWeight='bold' mb='4px' sx={{ color: darkMode ? undefined : '#000000' }}>
                                    87%
                                </VuiTypography>
                                <VuiTypography color={darkMode ? 'text' : 'text'} variant='caption' sx={{ color: darkMode ? undefined : '#000000' }}>
                                    Attendance
                                </VuiTypography>
                            </VuiBox>
                        </VuiBox>
                        <VuiBox
                            display='flex'
                            justifyContent='center'
                            flexDirection='column'
                            sx={{ textAlign: 'center' }}>
                            <VuiTypography color={darkMode ? 'white' : 'text'} variant='h4' fontWeight='bold' mb='2px' mt='18px' sx={{ color: darkMode ? undefined : '#000000' }}>
                                84 / 120
                            </VuiTypography>
                            <VuiTypography color={darkMode ? 'text' : 'text'} variant='button' fontWeight='regular' sx={{ color: darkMode ? undefined : '#000000' }}>
                                Credits Completed
                            </VuiTypography>
                        </VuiBox>
                    </VuiBox>
                    <Grid
                        container
                        sx={({ breakpoints }) => ({
                            spacing: '24px',
                            [breakpoints.only('sm')]: {
                                columnGap: '0px',
                                rowGap: '24px'
                            },
                            [breakpoints.up('md')]: {
                                gap: '24px',
                                ml: '50px !important'
                            },
                            [breakpoints.only('xl')]: {
                                gap: '12px',
                                mx: 'auto !important'
                            }
                        })}>
                        {/* Attendance Card */}
                        <Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
                            <VuiBox
                                display='flex'
                                p='18px'
                                alignItems='center'
                                sx={{
                                    background: darkMode ? linearGradient(cardContent.main, cardContent.state, cardContent.deg) : '#FFFFFF',
                                    minHeight: '110px',
                                    borderRadius: '20px',
                                    border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid #E5E7EB',
                                    boxShadow: darkMode ? undefined : '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                }}>
                                <VuiBox display='flex' flexDirection='column' mr='auto'>
                                    <VuiTypography color={darkMode ? 'text' : 'text'} variant='caption' fontWeight='medium' mb='8px' sx={{ color: darkMode ? undefined : '#000000' }}>
                                        Attendance
                                    </VuiTypography>
                                    <VuiTypography
                                        color={darkMode ? 'white' : 'text'}
                                        variant='h3'
                                        fontWeight='bold'
                                        sx={({ breakpoints }) => ({
                                            [breakpoints.only('xl')]: {
                                                fontSize: '24px'
                                            },
                                            color: darkMode ? undefined : '#000000',
                                        })}>
                                        87%
                                    </VuiTypography>
                                </VuiBox>
                                <VuiBox
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='center'
                                    sx={{
                                        background: 'linear-gradient(135deg, #0075FF 0%, #00C6FF 100%)',
                                        borderRadius: '16px',
                                        width: '64px',
                                        height: '64px',
                                        boxShadow: '0px 4px 12px rgba(0, 117, 255, 0.3)',
                                    }}>
                                    <IoSchoolOutline size={32} color='#FFFFFF' />
                                </VuiBox>
                            </VuiBox>
                        </Grid>

                        {/* Assignments Card */}
                        <Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
                            <VuiBox
                                display='flex'
                                p='18px'
                                alignItems='center'
                                sx={{
                                    background: darkMode ? linearGradient(cardContent.main, cardContent.state, cardContent.deg) : '#FFFFFF',
                                    borderRadius: '20px',
                                    minHeight: '110px',
                                    border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid #E5E7EB',
                                    boxShadow: darkMode ? undefined : '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                }}>
                                <VuiBox display='flex' flexDirection='column' mr='auto'>
                                    <VuiTypography color={darkMode ? 'text' : 'text'} variant='caption' fontWeight='medium' mb='8px' sx={{ color: darkMode ? undefined : '#000000' }}>
                                        Assignments Submitted
                                    </VuiTypography>
                                    <VuiTypography
                                        color={darkMode ? 'white' : 'text'}
                                        variant='h3'
                                        fontWeight='bold'
                                        sx={({ breakpoints }) => ({
                                            [breakpoints.only('xl')]: {
                                                fontSize: '24px'
                                            },
                                            color: darkMode ? undefined : '#000000',
                                        })}>
                                        22
                                    </VuiTypography>
                                </VuiBox>
                                <VuiBox
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='center'
                                    sx={{
                                        background: 'linear-gradient(135deg, #0075FF 0%, #00C6FF 100%)',
                                        borderRadius: '16px',
                                        width: '64px',
                                        height: '64px',
                                        boxShadow: '0px 4px 12px rgba(0, 117, 255, 0.3)',
                                    }}>
                                    <IoCheckmarkCircleOutline size={32} color='#FFFFFF' />
                                </VuiBox>
                            </VuiBox>
                        </Grid>

                        {/* Courses Card */}
                        <Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
                            <VuiBox
                                display='flex'
                                p='18px'
                                alignItems='center'
                                sx={{
                                    background: darkMode ? linearGradient(cardContent.main, cardContent.state, cardContent.deg) : '#FFFFFF',
                                    borderRadius: '20px',
                                    minHeight: '110px',
                                    border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid #E5E7EB',
                                    boxShadow: darkMode ? undefined : '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                }}>
                                <VuiBox display='flex' flexDirection='column' mr='auto'>
                                    <VuiTypography color={darkMode ? 'text' : 'text'} variant='caption' fontWeight='medium' mb='8px' sx={{ color: darkMode ? undefined : '#000000' }}>
                                        Courses Enrolled
                                    </VuiTypography>
                                    <VuiTypography
                                        color={darkMode ? 'white' : 'text'}
                                        variant='h3'
                                        fontWeight='bold'
                                        sx={({ breakpoints }) => ({
                                            [breakpoints.only('xl')]: {
                                                fontSize: '24px'
                                            },
                                            color: darkMode ? undefined : '#000000',
                                        })}>
                                        6
                                    </VuiTypography>
                                </VuiBox>
                                <VuiBox
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='center'
                                    sx={{
                                        background: 'linear-gradient(135deg, #0075FF 0%, #00C6FF 100%)',
                                        borderRadius: '16px',
                                        width: '64px',
                                        height: '64px',
                                        boxShadow: '0px 4px 12px rgba(0, 117, 255, 0.3)',
                                    }}>
                                    <IoBookOutline size={32} color='#FFFFFF' />
                                </VuiBox>
                            </VuiBox>
                        </Grid>

                        {/* Semester Card */}
                        <Grid item xs={12} md={5.5} xl={5.8} xxl={5.5}>
                            <VuiBox
                                display='flex'
                                p='18px'
                                alignItems='center'
                                sx={{
                                    background: darkMode ? linearGradient(cardContent.main, cardContent.state, cardContent.deg) : '#FFFFFF',
                                    borderRadius: '20px',
                                    minHeight: '110px',
                                    border: darkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid #E5E7EB',
                                    boxShadow: darkMode ? undefined : '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                }}>
                                <VuiBox display='flex' flexDirection='column' mr='auto'>
                                    <VuiTypography color={darkMode ? 'text' : 'text'} variant='caption' fontWeight='medium' mb='8px' sx={{ color: darkMode ? undefined : '#000000' }}>
                                        Current Semester
                                    </VuiTypography>
                                    <VuiTypography
                                        color={darkMode ? 'white' : 'text'}
                                        variant='h3'
                                        fontWeight='bold'
                                        sx={({ breakpoints }) => ({
                                            [breakpoints.only('xl')]: {
                                                fontSize: '24px'
                                            },
                                            color: darkMode ? undefined : '#000000',
                                        })}>
                                        5
                                    </VuiTypography>
                                </VuiBox>
                                <VuiBox
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='center'
                                    sx={{
                                        background: 'linear-gradient(135deg, #0075FF 0%, #00C6FF 100%)',
                                        borderRadius: '16px',
                                        width: '64px',
                                        height: '64px',
                                        boxShadow: '0px 4px 12px rgba(0, 117, 255, 0.3)',
                                    }}>
                                    <IoCalendarOutline size={32} color='#FFFFFF' />
                                </VuiBox>
                            </VuiBox>
                        </Grid>
                    </Grid>
                </Stack>
            </VuiBox>
        </Card>
    );
};

export default AcademicInformation;
