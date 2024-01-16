'use client';
import * as React from 'react';
import {
  Box,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputAdornment,
  Typography,
} from '@mui/material';

const FormElement = () => {
  //CLASSES

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

  const textFieldClass = {
    width: '100%',
  };

  // Input handling
  const [decimal, setDecimal] = React.useState('');
  const [inputError, setBinError] = React.useState(false);
  const [inputColor, setInputColor] = React.useState(false);

  // regular expression pattern to match
  // used in value.match
  // ^ - start of line anchor, $ - end of line anchor
  // [x-y] - range between x and y
  // /.../g - regular expresion for
  const regex: RegExp = /^[0-1]+$/g;

  const updateDec = (event: any) => {
    event.preventDefault();
    const value = event.target.value;

    // turn red if value exists and doesnt match format
    if (value.length > 0 && value.match(regex) === null) {
      setBinError(true);
      return;
    }

    // break and cleanup if input is empty
    if (value.length < 1) {
      setBinError(false);
      setInputColor(false);
      setDecimal('');
      return;
    }

    // clear bad input style
    setBinError(false);
    setInputColor(true);

    // parseInt parses the string `value` in base 2 (binary) and converts it to a decimal (base 10) number
    // immediately stringify so setDecimal accepts the input
    const decimal = parseInt(value, 2).toString();
    var inputSuccessColor = true;
    setDecimal(decimal);
  };

  return (
    <>

        <FormGroup sx={formGroupClass}>
          <FormControl
            error={inputError}
            color={inputColor ? 'success' : 'primary'}
            focused={true}
            fullWidth
            variant='standard'
            sx={textFieldClass}>
            {
              //(inputError) && (<InputLabel htmlFor="filled-adornment-amount">Error</InputLabel>)
            }
            <Input
              multiline
              name='binary'
              onChange={updateDec}
              startAdornment={<InputAdornment position='start'>BIN</InputAdornment>}
              inputProps={{ inputMode: 'numeric', maxLength: 69 }}
              sx={{minHeight: '2em',}}
            />
            <FormHelperText id='standard-weight-helper-text'>
              Only 1s and 0s allowrd
            </FormHelperText>
          </FormControl>

          <FormControl
            disabled
            fullWidth
            variant='standard'
            sx={textFieldClass}>
            <Input
              name='decimal'
              defaultValue={decimal}
              startAdornment={
                <InputAdornment position='start'>DEC</InputAdornment>
              }
            />
          </FormControl>
        </FormGroup>
    </>
  );
};

export default FormElement;
