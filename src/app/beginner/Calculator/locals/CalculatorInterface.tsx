import * as React from 'react';
import Box from '@mui/material/Box';
import CalculatorDisplay from './CalculatorDisplay';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';

const CalculatorInterface = () => {
  const input = '0';

  return (
    <>
      <CalculatorDisplay value={input} />
      <Box
        sx={{
          '& button': {
            fontSize: '1.1618em',
            borderRadius: 0,
            width: '100%',
            height: '100%',
            p: 2,
            '*': { fontSize: 'inherit' },
          },
        }}>
        <Grid container spacing={0}>
          <Grid xs={3}>
            <Button variant='text' color='warning' size='small'>
              C
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              %
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              +/-
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              <BackspaceIcon />
            </Button>
          </Grid>

          <Grid xs={3}>
            <Button variant='text' size='small'>
              7
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' size='small'>
              8
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' size='small'>
              9
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              /
            </Button>
          </Grid>

          <Grid xs={3}>
            <Button variant='text' size='small'>
              4
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' size='small'>
              5
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' size='small'>
              6
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              x
            </Button>
          </Grid>

          <Grid xs={3}>
            <Button variant='text' size='small'>
              1
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' size='small'>
              2
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' size='small'>
              3
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              -
            </Button>
          </Grid>

          <Grid xs={3}>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' size='small'>
              0
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' size='small'>
              .
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              +
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CalculatorInterface;
