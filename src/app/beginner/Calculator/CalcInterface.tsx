'use client';
import * as React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import PercentIcon from '@mui/icons-material/Percent';

const OutputTypography = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  textAlign: 'right',
  minHeight: '26px',
  // border: '1px solid #fff',
  transition: 'all 150ms ease-in-out',
});

const CalcButton = styled(Button)({
  minWidth: '0',
  minHeight: '0',
  width: '100%',
  height: '100%',
  p: 0,
  m: 0,
})

const CalcInterface = () => {
  const [input, setInput] = React.useState('0');
  const [subvalue, setSubvalue] = React.useState('');
  const maxInputLength = 8; // maximum digits in the input

  //@ts-ignore
  const Calculate = (action, param?) => () => {
    // handle initial 0 value properly
    let newInput = ''
    // handle division by 0...
    if (input.length > 1 && input !== '0') newInput = input;

    // handle C clear button
    if (action === 'c') setInput('0');

    // max digits check
    if (newInput.length > maxInputLength) return;

    // handle keypad inputs
    if (action === 'keypad' && (param || param == 0)) setInput(`${newInput}${param}`);
    if (action === 'comma' && !input.includes(',')) setInput(input + ',')
    if (action === 'sum') {}
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 1,
              gap: 0,
              justifyContent: 'center',
              width: 'auto',
              borderRadius: '0.5em',
              backgroundColor: '#101015',
            }}>
            <OutputTypography variant='h3'>{input}</OutputTypography>
            <OutputTypography variant='body1' color='primary.dark'>{subvalue}</OutputTypography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <CalcButton
            size='large'
            variant='outlined'
            color='info'
            fullWidth
            onClick={Calculate('c')}>
            C
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton size='large' variant='outlined' color='info' fullWidth onClick={Calculate('inv')}>
            +/-
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton size='large' variant='outlined' color='info' fullWidth onClick={Calculate('per')}>
            <PercentIcon sx={{ fontSize: 'inherit', }} />
          </CalcButton>
        </Grid>

        <Grid item xs={3}>
          <CalcButton size='large' variant='contained' fullWidth onClick={Calculate('keypad', 7)}>
            7
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton size='large' variant='contained' fullWidth onClick={Calculate('keypad', 8)}>
            8
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton size='large' variant='contained' fullWidth onClick={Calculate('keypad', 9)}>
            9
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton size='large' variant='outlined' color='warning' fullWidth onClick={Calculate('div')}>
            /
          </CalcButton>
        </Grid>

        <Grid item xs={3}>
          <CalcButton size='large' variant='contained' fullWidth onClick={Calculate('keypad', 4)}>
            4
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton size='large' variant='contained' fullWidth onClick={Calculate('keypad', 5)}>
            5
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton size='large' variant='contained' fullWidth onClick={Calculate('keypad', 6)}>
            6
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton size='large' variant='outlined' color='warning' fullWidth onClick={Calculate('mul')}>
            <CloseIcon sx={{ fontSize: 'inherit', }}/>
          </CalcButton>
        </Grid>

        <Grid item xs={3}>
          <CalcButton
            size='large'
            variant='contained'
            fullWidth
            onClick={Calculate('keypad', 1)}>
            1
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton
            size='large'
            variant='contained'
            fullWidth
            onClick={Calculate('keypad', 2)}>
            2
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton
            size='large'
            variant='contained'
            fullWidth
            onClick={Calculate('keypad', 3)}>
            3
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton size='large' variant='outlined' color='warning' fullWidth onClick={Calculate('sub')}>
            <RemoveIcon sx={{ fontSize: 'inherit', }} />
          </CalcButton>
        </Grid>

        <Grid item xs={6}>
          <CalcButton
            size='large'
            variant='contained'
            fullWidth
            onClick={Calculate('keypad', 0)}>
            0
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton
            size='large'
            variant='contained'
            fullWidth
            onClick={Calculate('comma')}>
            ,
          </CalcButton>
        </Grid>
        <Grid item xs={3}>
          <CalcButton size='large' variant='outlined' color='warning' fullWidth onClick={Calculate('add')}>
            +
          </CalcButton>
        </Grid>
      </Grid>
    </>
  );
};

export default CalcInterface;
