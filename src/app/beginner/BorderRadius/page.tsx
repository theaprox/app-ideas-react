import React from 'react';
import { Paper, Typography } from '@mui/material';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';

const BorderRadius = () => {
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
    padding: 2,
  }
  return (
    <div className='tw-flex-1 tw-grow tw-flex tw-flex-col tw-items-center tw-pt-24'>
      <Paper component='form' sx={paperClass} elevation={8}>
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
              <BorderStyleIcon />
              Border Radius
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              Adjust box border radius
            </Typography>
      </Paper>
    </div>
  );
};

export default BorderRadius;
