import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import CalcInterface from './CalcInterface';

const paperClass = {
  '&.MuiPaper-root': {
    backgroundImage: 'unset',
    backgroundColor: '#202025',
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 2 / 3,
  maxWidth: 'md',
  p: 2,
  gap: 2,
};

const CalculatorApp = () => {
  return (
    <div className='tw-flex-1 tw-grow tw-flex tw-flex-col tw-items-center tw-pt-24'>
      <Paper component='form' sx={paperClass} elevation={8}>
        <Box>
          <Typography
            variant='h5'
            sx={{
              textTransform: 'uppercase',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
            }}
            gutterBottom>
            <CalculateIcon />
            Calculator
          </Typography>
        </Box>
        <Box>
          <CalcInterface />
        </Box>
      </Paper>
    </div>
  );
};

export default CalculatorApp;
