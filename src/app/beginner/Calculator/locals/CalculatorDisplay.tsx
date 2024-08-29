import Box from '@mui/material/Box';
import React from 'react';

type DisplayProps = {
  input?: string;
  memory?: string;
  operation?: string;
};

const CalculatorDisplay: React.FC<DisplayProps> = ({ input, memory, operation }) => {
  const parentBoxClass = {
    position: 'relative',
    width: 'auto',
    fontSize: '3em',
    fontWeight: '600',
    lineHeight: '1.2em',
    height: '1.618em',
    overflow: 'hidden',
    borderBottom: '4px solid',
    borderColor: 'primary.dark',
    whiteSpace: 'nowrap',
    fontSmoothing: 'always',
    pt: 3,
  };
  const childBoxClass = {
    position: 'relative',
    direction: 'rtl',
    px: 2,
    lineHeight: 'inherit',
    height: '1.618em',
    overflowX: 'hidden',
    overflowY: 'hidden',
    '& span.infinite': {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: 0,
      right: 0,
      direction: 'ltr',
      px: 2,
      py: 0,
      lineHeight: 'inherit',
      height: 'auto',
    },
    '& span.memory': {
      textAlign: 'right',
      fontSize: '.4em',
      fontWeight: '300',
      lineHeight: '1em',
      minHeight: '1em',
      color: 'primary.dark',
    },
    '& span.input': {
      lineHeight: '1em',
      minHeight: '1em',
      textAlign: 'right',
    }
  };

  return (
    <>
      <Box component='div' sx={parentBoxClass}>
        <div className='tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-4 tw-bg-gradient-to-r tw-from-fade-black-100 tw-to-transparent tw-z-10'></div>
        <Box component='div' sx={childBoxClass}>
          <span className='infinite'>
            <span className='memory'>{memory}{operation}</span>
            <span className='input'>{input}</span>
          </span>
        </Box>
      </Box>
    </>
  );
};

export default CalculatorDisplay;
