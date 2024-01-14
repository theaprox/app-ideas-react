import * as React from 'react';
import { useTheme } from '@emotion/react';
import {
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
  InputAdornment,
  Paper,
  Typography,
} from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';

const FormElement = () => {
  const theme = useTheme();
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

  const textFieldClass = {
    width: '100%',
  };

  // Input handling
  const [decimal, setDecimal] = React.useState('');
  const [inputError, setBinError] = React.useState(false);
  const [inputColor, setInputColor] = React.useState('primary');
  
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
      setInputColor('primary');
      setDecimal('');
      return;
    }

    // clear bad input style
    setBinError(false);
    setInputColor('success');

    // parseInt parses the string `value` in base 2 (binary) and converts it to a decimal (base 10) number
    // immediately stringify so setDecimal accepts the input
    const decimal = parseInt(value, 2).toString();
    var inputSuccessColor = true;
    setDecimal(decimal);
  };

  return (
    <>
      <Paper component='form' sx={paperClasses} elevation={8}>
        <FormGroup sx={formGroupClass}>
          <FormLabel sx={formLabelClass}>
            <Typography
              variant='h5'
              sx={{
                textTransform: 'uppercase',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
              }}
              gutterBottom>
              <PsychologyIcon />
              BIN to DEC
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              Maximum allowed binary number input length is 69 (nice!) digits.
            </Typography>
          </FormLabel>

          <FormControl
            error={inputError}
            color={inputColor}
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
              startAdornment={
                <InputAdornment position='start'>BIN</InputAdornment>
              }
              inputProps={{ inputMode: 'numeric', maxLength: 69 }}
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
      </Paper>
    </>
  );
};

export default FormElement;
