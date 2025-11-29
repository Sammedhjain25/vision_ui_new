import React from 'react';
import { Card, Stack } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import { FaEllipsisH } from 'react-icons/fa';
import linearGradient from 'assets/theme/functions/linearGradient';
import CircularProgress from '@mui/material/CircularProgress';

import { useVisionUIController } from "context";

function ReferralTracking() {
	const [controller] = useVisionUIController();
	const { darkMode } = controller;
	const { info, gradients } = colors;
	const { cardContent } = gradients;

	return (
		<Card
			sx={{
				height: '100%',
				background: darkMode ? linearGradient(gradients.cardDark.main, gradients.cardDark.state, gradients.cardDark.deg) : "#ffffff"
			}}>
			<VuiBox sx={{ width: '100%' }}>
				<VuiBox
					display='flex'
					alignItems='center'
					justifyContent='space-beetween'
					sx={{ width: '100%' }}
					mb='40px'>
					<VuiTypography 
						variant='lg' 
						color={darkMode ? 'white' : 'text'} 
						mr='auto' 
						fontWeight='bold'
						sx={{
							fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
						}}
					>
						Attendance
					</VuiTypography>
					<VuiBox
						display='flex'
						justifyContent='center'
						alignItems='center'
						bgColor={darkMode ? '#22234B' : 'grey-100'}
						sx={{ width: '37px', height: '37px', cursor: 'pointer', borderRadius: '12px' }}>
						<FaEllipsisH color={info.main} size='18px' />
					</VuiBox>
				</VuiBox>
				<VuiBox
					display='flex'
					sx={({ breakpoints }) => ({
						[breakpoints.up('xs')]: {
							flexDirection: 'column',
							gap: '16px',
							justifyContent: 'center',
							alignItems: 'center'
						},
						[breakpoints.up('md')]: {
							flexDirection: 'row',
							justifyContent: 'flex-start',
							alignItems: 'center'
						}
					})}>
					<Stack
						direction='column'
						spacing='20px'
						width='500px'
						maxWidth='50%'
						className="referral-tracking-box"
						sx={({ breakpoints }) => ({
							mr: 'auto',
							[breakpoints.only('md')]: {
								mr: '75px'
							},
							[breakpoints.only('xl')]: {
								width: '500px',
								maxWidth: '40%'
							}
						})}>
						<VuiBox
							display='flex'
							width='220px'
							p='20px 22px'
							flexDirection='column'
							className="referral-tracking-item"
							sx={({ breakpoints }) => ({
								background: darkMode ? linearGradient(cardContent.main, cardContent.state, cardContent.deg) : "transparent",
								borderRadius: '20px',
								[breakpoints.up('xl')]: {
									maxWidth: '110px !important'
								},
								[breakpoints.up('xxl')]: {
									minWidth: '180px',
									maxWidth: '100% !important'
								}
							})}>
							<VuiTypography 
								color='text' 
								variant='button' 
								fontWeight='regular' 
								mb='5px'
								sx={{
									fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
								}}
							>
								Present
							</VuiTypography>
							<VuiTypography 
								color={darkMode ? 'white' : 'text'} 
								variant='lg' 
								fontWeight='bold'
								sx={{
									fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
								}}
							>
								145
							</VuiTypography>
						</VuiBox>
						<VuiBox
							display='flex'
							width='220px'
							p='20px 22px'
							flexDirection='column'
							className="referral-tracking-item"
							sx={({ breakpoints }) => ({
								background: darkMode ? linearGradient(cardContent.main, cardContent.state, cardContent.deg) : "transparent",
								borderRadius: '20px',
								[breakpoints.up('xl')]: {
									maxWidth: '110px !important'
								},
								[breakpoints.up('xxl')]: {
									minWidth: '180px',
									maxWidth: '100% !important'
								}
							})}>
							<VuiTypography 
								color='text' 
								variant='button' 
								fontWeight='regular' 
								mb='5px'
								sx={{
									fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
								}}
							>
								Absent
							</VuiTypography>
							<VuiTypography 
								color={darkMode ? 'white' : 'text'} 
								variant='lg' 
								fontWeight='bold'
								sx={{
									fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
								}}
							>
								1,465
							</VuiTypography>
						</VuiBox>
					</Stack>
					<VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
						<CircularProgress
							variant='determinate'
							value={70}
							size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
							color='success'
							sx={{
								"& .MuiCircularProgress-circle": {
									stroke: darkMode ? undefined : "#1A73E8",
								}
							}}
						/>
						<VuiBox
							sx={{
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								position: 'absolute',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
							<VuiBox display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
								<VuiTypography 
									color='text' 
									variant='button' 
									mb='4px'
									sx={{
										fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
									}}
								>
									Safety
								</VuiTypography>
								<VuiTypography
									color={darkMode ? 'white' : 'text'}
									variant='d5'
									fontWeight='bold'
									mb='4px'
									sx={({ breakpoints }) => ({
										[breakpoints.only('xl')]: {
											fontSize: '32px'
										},
										fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
									})}>
									9.8
								</VuiTypography>
								<VuiTypography 
									color='text' 
									variant='button'
									sx={{
										fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
									}}
								>
									Total Score
								</VuiTypography>
							</VuiBox>
						</VuiBox>
					</VuiBox>
				</VuiBox>
			</VuiBox>
		</Card>
	);
}

export default ReferralTracking;
