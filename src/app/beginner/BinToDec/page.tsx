import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';

const BinToDec = () => {
  return (
    <div className='tw-flex-1 tw-grow tw-flex tw-flex-col tw-justify-start tw-items-center tw-pt-24'>
      <div className='tw-flex-none tw-flex tw-flex-col tw-w-2/3 tw-gap-2 tw-max-w-lg'>
        <TextField
          id='standard-basic'
          label='Binary'
          variant='outlined'
          className=''
        />
        <TextField
          id='standard-basic'
          label='Decimal'
          variant='outlined'
          className=''
        />
        <Button
          component='label'
          color='primary'
          variant='contained'
          className=''
          startIcon={<MemoryIcon />}>
          Translate
        </Button>
      </div>
    </div>
  );
};

export default BinToDec;
