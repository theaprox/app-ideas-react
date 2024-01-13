import { Button, FormGroup, FormLabel, Paper, TextField, buttonClasses } from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import React from 'react';

const FormElement = () => {
  //CLASSES
  const paperClasses = {
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
  };
  const formGroupClass = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    flexGrow: 1,
    width: '100%',
    gap: 1,
    '*': {
      gap: 0,
    },
  };
  const formLabelClasses = {
    fontSize: '1em',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'light',
    gap: 0,
    py: 1,
    '*': {
        flexGrow: 0,
        py: 1,
        m: 0,
    },
    'h3': {
        py: 1,
        textTransform: 'uppercase',
    }
  };
  const textFieldClasses = {
    width: '100%',
  };
  const buttonClasses = {
    width: '100%',
    height: '64px',
  };

  return (
    <>
      <Paper component='form' sx={paperClasses} elevation={8}>
        <FormGroup sx={formGroupClass}>

          <FormLabel sx={formLabelClasses}>
            <h3>Translate BIN to DEC</h3>
            <p>
              Input binary numbers and hit the button to convert to decimal
              value.
            </p>
          </FormLabel>

          <TextField
            sx={textFieldClasses}
            id='outlined-basic'
            label='Binary'
            variant='outlined'
            inputProps={{ inputMode: 'numeric' }}
          />

          <TextField
            sx={textFieldClasses}
            disabled
            id='filled-disabled'
            label='Decimal Value'
            variant='filled'
          />

        <Button
            startIcon={<MemoryIcon />}
            sx={buttonClasses} variant='contained'
            color='success'>
            Convert
        </Button>

        </FormGroup>
      </Paper>
    </>
  );
};

export default FormElement;
