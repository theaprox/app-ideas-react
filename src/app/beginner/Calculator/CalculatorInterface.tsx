// Main Calculator Document
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';


const CalculatorInterface = () => {
  return (
    <>
    <Grid container spacing={1}>
      <Grid xs={12}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            p: 0,
            gap: 0,
            justifyContent: 'center',
            width: 'auto',
            borderRadius: '0.5em',
            backgroundColor: '#101015',
            overflow: 'hidden',
          }}>
          <div className='tw-absolute tw-w-1/5 tw-top-0 tw-left-0 tw-h-full tw-m-0 tw-p-0 tw-bg-gradient-to-r tw-from-fade-black tw-to-transparent'></div>
          <Box sx={{ p: 2, background: 'none', position: 'relative' }}>
            <OutputTypography variant='h3' >{input}</OutputTypography>
            <OutputTypography variant='h4' color='primary.dark'>
              {subvalue}&nbsp;
            </OutputTypography>
          </Box>
        </Box>
      </Grid>

      <Gridxs={6}>
        <CalcButton
          size='large'
          variant='outlined'
          color='info'
          fullWidth
          onClick={Calculate('c')}>
          C
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='outlined'
          color='info'
          fullWidth
          onClick={Calculate('operation', '*(-1)')}>
          +/-
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='outlined'
          color='info'
          fullWidth
          onClick={Calculate('operation', '/100')}>
          <PercentIcon sx={{ fontSize: 'inherit' }} />
        </CalcButton>
      </Gridxs=>

      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='contained'
          fullWidth
          onClick={Calculate('keypad', 7)}>
          7
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='contained'
          fullWidth
          onClick={Calculate('keypad', 8)}>
          8
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='contained'
          fullWidth
          onClick={Calculate('keypad', 9)}>
          9
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='outlined'
          color='warning'
          fullWidth
          onClick={Calculate('operation', '/')}>
          /
        </CalcButton>
      </Gridxs=>

      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='contained'
          fullWidth
          onClick={Calculate('keypad', 4)}>
          4
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='contained'
          fullWidth
          onClick={Calculate('keypad', 5)}>
          5
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='contained'
          fullWidth
          onClick={Calculate('keypad', 6)}>
          6
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='outlined'
          color='warning'
          fullWidth
          onClick={Calculate('operation', '*')}>
          <CloseIcon sx={{ fontSize: 'inherit' }} />
        </CalcButton>
      </Gridxs=>

      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='contained'
          fullWidth
          onClick={Calculate('keypad', 1)}>
          1
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='contained'
          fullWidth
          onClick={Calculate('keypad', 2)}>
          2
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='contained'
          fullWidth
          onClick={Calculate('keypad', 3)}>
          3
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='outlined'
          color='warning'
          fullWidth
          onClick={Calculate('operation', '-')}>
          <RemoveIcon sx={{ fontSize: 'inherit' }} />
        </CalcButton>
      </Gridxs=>

      <Gridxs={6}>
        <CalcButton
          size='large'
          variant='contained'
          fullWidth
          onClick={Calculate('keypad', '0')}>
          0
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='contained'
          fullWidth
          onClick={Calculate('comma')}>
          ,
        </CalcButton>
      </Gridxs=>
      <Gridxs={3}>
        <CalcButton
          size='large'
          variant='outlined'
          color='warning'
          fullWidth
          onClick={Calculate('operation', '+')}>
          +
        </CalcButton>
      </Gridxs=>
    </Grid>
    </>
  );
};

export default CalculatorInterface;
