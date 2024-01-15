'use client';
import { Button, TextField, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

const CalcButton = styled(Button)({
  

})

const CalcInterface = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            focused
            disabled
            fullWidth
            label=''
            id='fullWidth'
            inputProps={{ inputMode: 'numeric', maxLength: 69 }}
            defaultValue={0}
            sx={{
              m:0,
              '& .MuiInputBase-input': {
                fontSize: '2em',
                textAlign: 'right',
                fontSmooth: 'always',
              },
              '& .Mui-disabled': {
                color: 'white',
                WebkitTextFillColor: 'rgba(255, 255, 255, 1)',
              }
            }}
          />
        </Grid>

        <Grid item xs={3}>
          <Button size='large' variant='outlined' color='info' fullWidth>
            AC
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' color='info' fullWidth>
            +/-
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' color='info' fullWidth>
            %
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' color='warning' fullWidth>
            /
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button size='large' variant='contained' fullWidth>
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='contained' fullWidth>
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='contained' fullWidth>
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' color='warning' fullWidth>
            x
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button size='large' variant='contained' fullWidth>
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='contained' fullWidth>
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='contained' fullWidth>
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' color='warning' fullWidth>
            -
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button size='large' variant='contained' fullWidth>
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='contained' fullWidth>
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='contained' fullWidth>
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' color='warning' fullWidth>
            +
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button size='large' variant='contained' fullWidth>
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='contained' fullWidth>
            ,
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' color='warning' fullWidth>
            =
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CalcInterface;
