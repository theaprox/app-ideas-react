import Box from '@mui/material/Box';
import React from 'react';

type DisplayProps = {
  value?: string;
};

const CalculatorDisplay: React.FC<DisplayProps> = ({ value }) => {
  const parentBoxClass = {
    position: 'relative',
    width: 'auto',
    fontSize: '3em',
    fontWeight: '600',
    lineHeight: '1.618em',
    height: '1.618em',
    overflow: 'hidden',
    borderBottom: '4px solid',
    borderColor: 'primary.dark',
    whiteSpace: 'nowrap',
    fontSmoothing: 'always',
    pt: 2,
  };
  const childBoxClass = {
    position: 'relative',
    direction: 'rtl',
    px: 2,
    lineHeight: 'inherit',
    height: '1.618em',
    overflowX: 'scroll',
    overflowY: 'hidden',
    '& span': {
      position: 'absolute',
      top: 0,
      right: 0,
      direction: 'ltr',
      px: 2,
      lineHeight: 'inherit',
      height: 'auto',
    }
  };

  return (
    <>
      <Box component='div' sx={parentBoxClass}>
        <div className='tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-4 tw-bg-gradient-to-r tw-from-fade-black-100 tw-to-transparent tw-z-10'></div>
        <Box component='div' sx={childBoxClass}>
          <span>{value}</span>
        </Box>
      </Box>
    </>
  );
};

export default CalculatorDisplay;
