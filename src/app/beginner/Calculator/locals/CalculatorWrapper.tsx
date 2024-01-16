import { Paper } from '@mui/material';
import React from 'react'

type CalculatorWrapperProps = {
  children?: React.ReactNode;
};

const PaperStyleClass = {
  '&.MuiPaper-root': {
    backgroundImage: 'unset',
    backgroundColor: '#202025',
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 'auto',
  height: 'auto',
  p: 0,
  gap: 0,
  overflow: 'hidden',
  borderRadius: '8px',
};

const CalculatorWrapper: React.FC<CalculatorWrapperProps> = ({children}) => {
  return (
    <>
    <Paper component='section' sx={PaperStyleClass} elevation={8}>    
      {children}
    </Paper>
    </>
  )
}

export default CalculatorWrapper