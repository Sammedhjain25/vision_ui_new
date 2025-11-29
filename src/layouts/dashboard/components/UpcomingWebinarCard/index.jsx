import React from 'react';
import { Card, Box, Typography, Button } from '@mui/material';
import { IoCalendarOutline, IoTimeOutline } from 'react-icons/io5';
import { useVisionUIController } from "context";

const UpcomingWebinarCard = () => {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;

  return (
    <Card
      sx={{
        ...(darkMode ? {
          background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        } : {
          background: '#FFFFFF',
          backgroundColor: '#FFFFFF',
          backdropFilter: 'none',
          border: '1px solid #E5E7EB',
        }),
        borderRadius: '20px',
        padding: '24px',
        height: '100%',
        minHeight: '310px',
        boxShadow: '0px 3.5px 5.5px rgba(0, 0, 0, 0.02)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Illustration */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '140px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="/webinar.png"
          alt="Webinar"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            maxHeight: '140px',
          }}
        />
      </Box>

      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          color: darkMode ? '#FFFFFF' : '#344767',
          fontWeight: 'bold',
          marginBottom: '8px',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '18px',
        }}
      >
        Upcoming Webinar
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          color: darkMode ? 'rgba(255, 255, 255, 0.7)' : '#6c757d',
          marginBottom: '16px',
          lineHeight: '1.5',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '13px',
        }}
      >
        Next Generation Frontend Architecture Using Layout Engine And React Native Web.
      </Typography>

      {/* Date and Duration */}
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          marginBottom: '16px',
        }}
      >
        {/* Date */}
        <Box
          sx={{
            flex: 1,
            background: 'rgba(99, 102, 241, 0.1)',
            borderRadius: '12px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              width: '36px',
              height: '36px',
              background: 'rgba(99, 102, 241, 0.2)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IoCalendarOutline size={18} color="#6366F1" />
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: darkMode ? '#FFFFFF' : '#344767',
                fontWeight: 'bold',
                fontSize: '14px',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              17 Nov 23
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: darkMode ? 'rgba(255, 255, 255, 0.6)' : '#6c757d',
                fontSize: '11px',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Date
            </Typography>
          </Box>
        </Box>

        {/* Duration */}
        <Box
          sx={{
            flex: 1,
            background: 'rgba(99, 102, 241, 0.1)',
            borderRadius: '12px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              width: '36px',
              height: '36px',
              background: 'rgba(99, 102, 241, 0.2)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IoTimeOutline size={18} color="#6366F1" />
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: darkMode ? '#FFFFFF' : '#344767',
                fontWeight: 'bold',
                fontSize: '14px',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              32 minutes
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: darkMode ? 'rgba(255, 255, 255, 0.6)' : '#6c757d',
                fontSize: '11px',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Duration
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Join Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
          color: '#FFFFFF',
          padding: '12px',
          borderRadius: '12px',
          textTransform: 'none',
          fontSize: '14px',
          fontWeight: 'bold',
          fontFamily: 'Poppins, sans-serif',
          boxShadow: '0px 4px 12px rgba(99, 102, 241, 0.4)',
          marginTop: 'auto',
          '&:hover': {
            background: 'linear-gradient(135deg, #5558E3 0%, #7C4DE8 100%)',
            boxShadow: '0px 6px 16px rgba(99, 102, 241, 0.5)',
          },
        }}
      >
        Join the event
      </Button>
    </Card>
  );
};

export default UpcomingWebinarCard;
