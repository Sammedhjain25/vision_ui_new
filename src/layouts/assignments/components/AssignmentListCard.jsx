import React, { useState, useRef } from 'react';
import { Box, Card, Table, TableBody, TableCell, TableContainer, TableRow, Typography, IconButton, Button, Snackbar, Alert } from '@mui/material';
import { IoCloudDownloadOutline, IoTimeOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { useVisionUIController } from "context";

const assignments = [
  { id: 1, name: 'Assignment 1: Mathematics Algebra', status: 'Pending', dueDate: '24 Nov 2023' },
  { id: 2, name: 'Assignment 2: Physics Thermodynamics', status: 'Submitted', dueDate: '20 Nov 2023' },
  { id: 3, name: 'Assignment 3: Chemistry Organic', status: 'Pending', dueDate: '25 Nov 2023' },
  { id: 4, name: 'Assignment 4: English Literature', status: 'Submitted', dueDate: '18 Nov 2023' },
  { id: 5, name: 'Assignment 5: Computer Science', status: 'Pending', dueDate: '26 Nov 2023' },
];

const AssignmentListCard = () => {
  const [controller] = useVisionUIController();
  const { darkMode } = controller;
  const [uploadStatus, setUploadStatus] = useState({ open: false, message: '', severity: 'success' });
  const fileInputRefs = useRef({});

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
      event.target.value = '';
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
        boxShadow: darkMode ? 'none' : '0px 4px 6px rgba(0, 0, 0, 0.1)',
        border: darkMode ? 'none' : '1px solid #E5E7EB',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box mb={3}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            color: darkMode ? '#FFFFFF' : '#000000',
            fontWeight: 'bold'
          }}
        >
          Assignment List
        </Typography>
      </Box>

      <TableContainer component={Box} sx={{ flex: 1, overflowY: 'auto', overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' }, background: 'transparent !important', boxShadow: 'none' }}>
        <Table sx={{ background: 'transparent !important', tableLayout: 'fixed', width: '100%', minWidth: '600px' }}>
          <TableBody sx={{ background: 'transparent !important' }}>
            {assignments.map((row) => (
              <TableRow key={row.id} sx={{ background: 'transparent !important' }}>
                {/* NO Column */}
                <TableCell sx={{ borderBottom: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E5E7EB', pl: 2, py: 1.5, width: '50px', background: 'transparent !important', textAlign: 'left' }}>
                  <Box
                    sx={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: darkMode ? '#0f1535' : '#F3F4F6',
                      border: darkMode ? '1px solid #0075FF' : '1px solid #1A73E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: darkMode ? '#FFFFFF' : '#000000',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {row.id}
                  </Box>
                </TableCell>

                {/* TASK Column */}
                <TableCell sx={{ borderBottom: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E5E7EB', pl: 0, py: 1.5, width: 'auto', background: 'transparent !important', textAlign: 'left' }}>
                  <Typography
                    variant="button"
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '14px',
                      textTransform: 'none',
                      color: darkMode ? '#FFFFFF' : '#000000',
                      fontWeight: 'medium'
                    }}
                  >
                    {row.name}
                  </Typography>
                </TableCell>

                {/* STATUS Column */}
                <TableCell sx={{ borderBottom: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E5E7EB', pl: 0, py: 1.5, width: '130px', background: 'transparent !important', textAlign: 'left' }}>
                  <Box
                    sx={{
                      background: darkMode ? 'transparent' : (row.status === 'Submitted' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'),
                      border: `1px solid ${row.status === 'Submitted' ? '#01B574' : '#E31A1A'}`,
                      borderRadius: '12px',
                      padding: '4px 10px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      width: '100px',
                      justifyContent: 'center'
                    }}
                  >
                    {row.status === 'Submitted' ? (
                      <IoCheckmarkCircleOutline size={14} color={darkMode ? "#FFFFFF" : "#01B574"} />
                    ) : (
                      <IoTimeOutline size={14} color={darkMode ? "#FFFFFF" : "#E31A1A"} />
                    )}
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: 'Poppins, sans-serif',
                        color: darkMode ? '#FFFFFF' : (row.status === 'Submitted' ? '#01B574' : '#E31A1A'),
                        fontWeight: 'bold'
                      }}
                    >
                      {row.status}
                    </Typography>
                  </Box>
                </TableCell>

                {/* ACTIONS Column */}
                <TableCell sx={{ borderBottom: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #E5E7EB', py: 1.5, width: '180px', textAlign: 'left', pl: 1, background: 'transparent !important' }}>
                  <Box display="flex" alignItems="center" justifyContent="flex-start">
                    {/* Slot 1: Button (Fixed Width) */}
                    <Box sx={{ width: '90px', display: 'flex', alignItems: 'center' }}>
                      {row.status === 'Pending' && (
                        <>
                          <input
                            type="file"
                            ref={(el) => (fileInputRefs.current[row.id] = el)}
                            onChange={(e) => handleFileUpload(row.id, e)}
                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            style={{ display: 'none' }}
                          />
                          <Button
                            variant="contained"
                            onClick={() => handleSubmitClick(row.id)}
                            sx={{
                              padding: '4px 12px',
                              borderRadius: '6px',
                              fontSize: '12px',
                              textTransform: 'none',
                              backgroundColor: '#60a5fa',
                              color: '#FFFFFF !important',
                              boxShadow: '0 0 10px rgba(96, 165, 250, 0.5)',
                              '&:hover': {
                                backgroundColor: '#3b82f6',
                                boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)',
                              },
                              fontFamily: 'Poppins, sans-serif',
                              minWidth: 'auto',
                              width: '80px', // Fixed button width
                            }}
                          >
                            Submit
                          </Button>
                        </>
                      )}
                    </Box>

                    {/* Slot 2: Icons */}
                    <Box display="flex" gap={1}>
                      <IconButton
                        size="small"
                        sx={{
                          color: darkMode ? '#FFFFFF' : '#000000',
                          opacity: 0.8,
                          '&:hover': { 
                            opacity: 1, 
                            backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' 
                          }
                        }}
                      >
                        <IoCloudDownloadOutline size={18} />
                      </IconButton>
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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

export default AssignmentListCard;
