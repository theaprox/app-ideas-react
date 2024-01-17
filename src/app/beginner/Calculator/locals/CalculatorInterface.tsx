'use client';
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
  KEYPAD: 'KEYPAD',
  PERCENT: 'PERCENT',
  INVERT: 'INVERT',
  OPERATION: 'OPERATION',
  EQUAL: 'EQUAL',
};

//@ts-ignore
function reducer(state, { type, value }) {

  const natural: RegExp = /^[1-9]+$/g; // define natural single digit nmumbers
  if (state.input === '') state.input = '0'; // fix empty input string pre-switch
  if (isNaN(Number(state.input)) || isNaN(Number(state.memory))) {
    return {
      ...state,
      input: '0',
      memory: '',
      operation: '',
    }
  }

  switch (type) {

    case ACTIONS.CLEAR:
      return { ...state, input: '0', memory: '', operation: '' }; // handle clear (AC)

    case ACTIONS.BACKSPACE:
      if(state.overwrite) {
        return {
          ...state,
          input: '0'
        }
      }
      if ((state.input.length <= 2 && state.memory && state.input.includes('-')) || (state.input.length <= 1 && state.memory)) {
        return { ...state, input: state.memory, operation: '', memory: ''}
      }
      if ((state.input.length <= 2 && !state.memory && state.input.includes('-')) || (state.input.length <= 1 && !state.memory)) {
        return { ...state, input: '0' };
      }
      return { ...state, input: state.input.slice(0, -1) };

    case ACTIONS.KEYPAD:
      if (state.overwrite) {
        return {
          ...state,
          input: value,
          overwrite: false
        }
      }
      if (value === '0' && state.input === '0' && !state.input.includes('.')) {
        // guard from multiple zeroes '0'
        return state;
      }
      if (value === '.' && state.input.includes('.')) {
        // guard from multiple commas '.'
        return state;
      }
      if (value.match(natural) && state.input === '0') {
        state.input = '';
      }
      return {
        ...state,
        input: `${state.input || ''}${value}`,
      };

    case ACTIONS.PERCENT:
      if (state.input === '0') {
        return state;
      }
      return { ...state, input: `${state.input / 100}` };

    case ACTIONS.INVERT:
      if (state.input === '0') {
        return state;
      } // dont invert 0
      return { ...state, input: `${state.input * -1}` }; // dynamic invertion by multiplication

    case ACTIONS.OPERATION:
      if (!state.memory && !state.operation && state.input){
        return {
          ...state,
          operation: value,
          memory: state.input,
          input: '0',
        }
      }
      if (state.memory && state.operation && state.input === '0') {
        return {
          ...state,
          operation: value,
          memory: state.memory,
          input: state.input,
        }
      }
      return {
        ...state,
        memory: calculate(state),
        operation: value,
        input: '0'
      }
    
    case ACTIONS.EQUAL:
      if(state.operation === '' || state.memory == '') {
        return state
      }
      return {
        ...state,
        operation: '',
        memory: '',
        input: calculate(state),
        overwrite: true,
      }

    default:
      state; // unrecognized or invalid calls return state
  }
}

//@ts-ignore
function calculate({input, memory, operation}) {
  const first = parseFloat(memory)
  const second = parseFloat(input)
  if(isNaN(first) || isNaN(second)) {
    return('NaN')
  }
  let result
  switch (operation) {
    case '+':
      result = first + second
      break
    case '-':
      result = first - second
      break
    case 'x':
      result = first * second
      break
    case '/':
      if(first === 0 || second === 0) {
        return('#DIV/0!')
      }
      result = first / second
      break
    default: return ''  
  }
  return result.toString()
}

const INTEGER_FORMATTING = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
})

//@ts-ignore
function prettifyNumerator(numbas){
  if (numbas == null || numbas == '') return
  const [integers, decimals] = numbas.split('.')
  if(decimals == null)
    return INTEGER_FORMATTING.format(integers).replace(/,/g, ' ')
  return `${INTEGER_FORMATTING.format(integers).replace(/,/g, ' ')}.${decimals}`
}


// CLASSES FOR STYLING STUFF
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
  };

  //@ts-ignore
  const [{ input, memory, operation, overwrite }, dispatch] = useReducer(reducer, { input: '0', overwrite: false});

  return (
    <>
      <CalculatorDisplay input={prettifyNumerator(input)} memory={prettifyNumerator(memory)} operation={operation} />
      <Box sx={btnBoxClass}>
        <Grid container spacing={0}>
          <Grid xs={3}>
            <CalculatorButton
              action={ACTIONS.CLEAR}
              icon={<LayersClearIcon />}
              variant='contained'
              color='secondary'
              dispatch={dispatch}
            />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton
              symbol='x'
              action={ACTIONS.OPERATION}
              icon={<CloseIcon />}
              color='info'
              dispatch={dispatch}
            />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton
              symbol='/'
              action={ACTIONS.OPERATION}
              color='info'
              dispatch={dispatch}
            />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton
              action={ACTIONS.BACKSPACE}
              icon={<BackspaceIcon />}
              color='info'
              dispatch={dispatch}
            />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton
              symbol='7'
              action={ACTIONS.KEYPAD}
              dispatch={dispatch}
            />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton
              symbol='8'
              action={ACTIONS.KEYPAD}
              dispatch={dispatch}
            />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton
              symbol='9'
              action={ACTIONS.KEYPAD}
              dispatch={dispatch}
            />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton
              symbol='-'
              action={ACTIONS.OPERATION}
              icon={<RemoveIcon />}
              color='info'
              dispatch={dispatch}
            />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton
              symbol='4'
              action={ACTIONS.KEYPAD}
              dispatch={dispatch}
            />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton
              symbol='5'
              action={ACTIONS.KEYPAD}
              dispatch={dispatch}
            />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton
              symbol='6'
              action={ACTIONS.KEYPAD}
              dispatch={dispatch}
            />
          </Grid>
          <Grid xs={3}>
            <CalculatorButton
              symbol='+'
              action={ACTIONS.OPERATION}
              icon={<AddIcon />}
              color='info'
              dispatch={dispatch}
            />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton
              symbol='1'
              action={ACTIONS.KEYPAD}
              dispatch={dispatch}
            />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton
              symbol='2'
              action={ACTIONS.KEYPAD}
              dispatch={dispatch}
            />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton
              symbol='3'
              action={ACTIONS.KEYPAD}
              dispatch={dispatch}
            />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton
              action={ACTIONS.INVERT}
              icon={<IsoIcon />}
              color='info'
              dispatch={dispatch}
            />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton
              action={ACTIONS.PERCENT}
              symbol='%'
              color='info'
              dispatch={dispatch}
            />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton
              symbol='0'
              action={ACTIONS.KEYPAD}
              dispatch={dispatch}
            />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton
              symbol='.'
              action={ACTIONS.KEYPAD}
              dispatch={dispatch}
            />
          </Grid>

          <Grid xs={3}>
            <CalculatorButton
              action={ACTIONS.EQUAL}
              icon={<BoltIcon />}
              color='info'
              variant='contained'
              dispatch={dispatch}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CalculatorInterface;
