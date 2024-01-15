'use client';
import { Box, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

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
              '& .MuiInputBase-input': {
                fontSize: '2em',
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
          <Button size='large' variant='outlined' fullWidth>
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' fullWidth>
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' fullWidth>
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' color='warning' fullWidth>
            x
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button size='large' variant='outlined' fullWidth>
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' fullWidth>
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' fullWidth>
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' color='warning' fullWidth>
            -
          </Button>
        </Grid>

        <Grid item xs={3}>
          <Button size='large' variant='outlined' fullWidth>
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' fullWidth>
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' fullWidth>
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' color='warning' fullWidth>
            +
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button size='large' variant='outlined' fullWidth>
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button size='large' variant='outlined' fullWidth>
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
