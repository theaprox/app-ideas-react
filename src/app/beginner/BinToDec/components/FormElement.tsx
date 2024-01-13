import {
  Button,
  Chip,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
  buttonClasses,
} from '@mui/material';
import React, { useState } from 'react';

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
    gap: 3,
    '*': {
      gap: 0,
    },
  };

  const formLabelClass = {
    fontSize: '1em',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'light',
    gap: 0,
  };

  const typographyOverline = {
    p: 0,
    m: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    gap: 1,
  };

  const textFieldClasses = {
    width: '100%',
  };

  const buttonClasses = {
    width: '100%',
  };

  // Input handling
  const [decimal, setDecimal] = React.useState('');
  const [inputError, setBinError] = React.useState(false);

  const updateDec = (event: any) => {
    event.preventDefault()
    const value = event.target.value;
    setBinError(false)

    // check input validity
    // check for length to avoid empty field error msg
    if (value.length > 0 && value.match(/^[0-1]+$/g) === null) {
      setBinError(true)
      return
    }

    setDecimal(value)
  };

  return (
    <>
      <Paper component='form' sx={paperClasses} elevation={8}>
        <FormGroup sx={formGroupClass}>
          <FormLabel sx={formLabelClass}>
            <Typography
              variant='h5'
              sx={{ textTransform: 'uppercase' }}
              gutterBottom>
              Binary to Decimal
            </Typography>
            <Typography variant='body2' gutterBottom>
              Convert a binary number into a decimal.
            </Typography>
          </FormLabel>

          <FormControl
            error={inputError}
            fullWidth
            variant='standard'
            sx={textFieldClasses}>
            <Input
              name='binary'
              onChange={updateDec}
              startAdornment={
                <InputAdornment position='start'>BIN</InputAdornment>
              }
              inputProps={{ inputMode: 'numeric' }}
            />
            <FormHelperText id='standard-weight-helper-text'>
              Only 1s and 0s allowrd
            </FormHelperText>
          </FormControl>

          <FormControl
            disabled
            fullWidth
            variant='standard'
            sx={textFieldClasses}>
            <Input
              name='decimal'
              defaultValue={decimal}
              startAdornment={
                <InputAdornment position='start'>DEC</InputAdornment>
              }
              inputProps={{ inputMode: 'numeric' }}
            />
            <FormHelperText id='standard-weight-helper-text'>
              Converted value will appear here
            </FormHelperText>
          </FormControl>
        </FormGroup>
      </Paper>
    </>
  );
};

export default FormElement;
