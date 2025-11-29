import React from 'react';

import { Card } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import { IoHappy } from 'react-icons/io5';
import colors from 'assets/theme/base/colors';
import CircularProgress from '@mui/material/CircularProgress';

import { useVisionUIController } from "context";

const SatisfactionRate = () => {
	const [controller] = useVisionUIController();
	const { darkMode } = controller;
	const { info, gradients } = colors;
	const { cardContent } = gradients;

	return (
		<Card sx={{ height: '340px', ...(darkMode ? {} : { backgroundColor: '#FFFFFF', background: '#FFFFFF' }) }}>
			<VuiBox display='flex' flexDirection='column'>
				<VuiTypography variant='lg' color={darkMode ? 'white' : 'text'} fontWeight='bold' mb='4px'>
					My Progress
				</VuiTypography>
				<VuiTypography variant='button' color='text' fontWeight='regular' mb='20px'>
					From all subject
				</VuiTypography>
				<VuiBox sx={{ alignSelf: 'center', justifySelf: 'center' }}>
					<VuiBox sx={{ position: 'relative', display: 'inline-flex' }}>
						<CircularProgress
							variant='determinate'
							value={95}
							size={170}
							color='info'
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
								justifyContent: 'center',
								flexDirection: 'column'
							}}>
							<VuiTypography
								color={darkMode ? 'white' : 'text'}
								variant='h4'
								fontWeight='bold'
								mb='4px'
								sx={{
									fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
								}}
							>
								95%
							</VuiTypography>
							<VuiTypography
								color='text'
								variant='button'
								sx={{
									fontFamily: darkMode ? undefined : '"Poppins", sans-serif',
								}}
							>
								Total Progress
							</VuiTypography>
						</VuiBox>
					</VuiBox>
				</VuiBox>
			</VuiBox>
		</Card>
	);
};

export default SatisfactionRate;
