import React from 'react'
import Paper from '@mui/material/Paper';

type PaperWrapperProps = {
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
  padding: 2,
  gap: 2,
};

const PaperWrapper: React.FC<PaperWrapperProps> = ({ children }) => {
  return (
    <Paper component='section' sx={PaperStyleClass} elevation={8}>    
      {children}
    </Paper>
  )
}

export default PaperWrapper