'use client'
import React, { useReducer } from 'react';
import Box from '@mui/material/Box';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';
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

export const ACTIONS = {
  CLEAR: 'CLEAR',
  BACKSPACE: 'BACKSPACE',
  EQUAL: 'EQUAL',
  KEYPAD: 'KEYPAD',
  OPERATION: 'OPERATION',
  INVERT: 'INVERT',
}

//@ts-ignore
function reducer(state, {type, value}){
  const natural: RegExp = /^[1-9]+$/g; // define natural single digit nmumbers
  switch(type){

    case ACTIONS.CLEAR:
      return {
        input: '0'
      }

    case ACTIONS.BACKSPACE:
      if(state.input.length <= 1) { // reset to 0 after last digit clear
        return { ...state, input: '0' }
      }
      return { ...state, input: state.input.slice(0, -1) }

    case ACTIONS.KEYPAD:
      if ( value === '0' && (state.input === '0' || !state.input.includes('.')) ) { // guard from multiple zeroes '0'
        return state
      } 
      if (value === '.' && state.input.includes('.')) { // guard from multiple commas '.'
        return state
      } 
      if (value.match(natural) && state.input === '0') { // handle default '0' state for number inputs
        state.input = ''
      }
      return {
        ...state,
        input: `${state.input || ''}${value}`,
      }
    
    default: state // unrecognized or invalid calls return state
    }
}

const CalculatorInterface = () => {

  const btnBoxClass = {
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
  }

  //@ts-ignore
  const [{input, memory, operation}, dispatch] = useReducer(reducer, { input: '0'})


  return (
    <>
      <CalculatorDisplay value={input} />
      <Box
        sx={btnBoxClass}>
        <Grid container spacing={0}>
          <Grid xs={3}>
            <CalculatorButton action={ACTIONS.CLEAR} icon={<LayersClearIcon />} variant='contained' color='secondary' dispatch={dispatch} />
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
            <CalculatorButton action={ACTIONS.BACKSPACE} icon={<BackspaceIcon />} color='info' dispatch={dispatch} />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton symbol='7' action={ACTIONS.KEYPAD} dispatch={dispatch} />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton symbol='8' action={ACTIONS.KEYPAD} dispatch={dispatch} />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton symbol='9' action={ACTIONS.KEYPAD} dispatch={dispatch} />
          </Grid>
          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              <RemoveIcon />
            </Button>
          </Grid>

          <Grid xs={3}>
            <CalculatorButton symbol='4' action={ACTIONS.KEYPAD} dispatch={dispatch} />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton symbol='5' action={ACTIONS.KEYPAD} dispatch={dispatch} />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton symbol='6' action={ACTIONS.KEYPAD} dispatch={dispatch} />
          </Grid>
          <Grid xs={3}>
            <Button variant='text' color='info' size='small'>
              <AddIcon />
            </Button>
          </Grid>

          <Grid xs={3}>
            <CalculatorButton symbol='1' action={ACTIONS.KEYPAD} dispatch={dispatch} />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton symbol='2' action={ACTIONS.KEYPAD} dispatch={dispatch} />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton symbol='3' action={ACTIONS.KEYPAD} dispatch={dispatch} />
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
            <CalculatorButton symbol='0' action={ACTIONS.KEYPAD} dispatch={dispatch} />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton symbol='.' action={ACTIONS.KEYPAD} dispatch={dispatch} />
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
