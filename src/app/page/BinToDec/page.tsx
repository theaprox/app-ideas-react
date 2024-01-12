import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const BinToDec = () => {
  return (
    <div className='tw-flex-1 tw-frow tw-flex tw-flex-col tw-justify-center'>
      <h1 className='tw-flex-none tw-flex tw-justify-center tw-text-4xl tw-font-black tw-uppercase tw-p-4'>
        Binary to Decimal
      </h1>
      <div className='tw-flex-1 tw-flex tw-flex-col tw-items-center tw-p-4'>
        <div className='tw-flex tw-flex-col'>
          <input type='text' className='' placeholder='binary'></input>
          <Box
            component='form'
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete='off'>
            <TextField
              id='standard-basic'
              label='Standard'
              variant='standard'
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default BinToDec;
