import * as React from 'react';
import Box from '@mui/material/Box';
import CalculatorDisplay from './CalculatorDisplay';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
// ICONS
import BackspaceIcon from '@mui/icons-material/Backspace';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import IsoIcon from '@mui/icons-material/Iso';
import AddIcon from '@mui/icons-material/Add';
import BoltIcon from '@mui/icons-material/Bolt';
import LayersClearIcon from '@mui/icons-material/LayersClear';

const CalculatorInterface = () => {
  const input = '0';

  return (
    <>
      <CalculatorDisplay value={input} />
      <Box
        sx={{
          '& button': {
            fontSize: '1.1618em',
            fontWeight: '300',
            borderRadius: 0,
            width: '100%',
            height: '100%',
            p: 2,
            boxShadow: 'none',
            '*': { fontSize: 'inherit' },
          },
          '& button:hover': {
            boxShadow: 1,
          },
        }}>
        <Grid container spacing={0}>
          <Grid xs={3}>
            <Button variant='contained' color='secondary' size='small'>
              <LayersClearIcon />
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              <CloseIcon />
            </Button>
          </Grid>
          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              /
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
              <RemoveIcon />
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
              <AddIcon />
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
              <IsoIcon />
            </Button>
          </Grid>

          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              %
            </Button>
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
            <Button variant='contained' color='info' size='small'>
              <BoltIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CalculatorInterface;
