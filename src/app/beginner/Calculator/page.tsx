import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import SimpleTitle from '@/app/components/SimpleTitle';
import ContentHolder from '@/app/components/ContentHolder';
import CalculatorInterface from './locals/CalculatorInterface';
import CalculatorWrapper from './locals/CalculatorWrapper';

const appname = 'Calculator';
const appsubtitle = 'Simple Calculator';
const apptitleicon = <CalculateIcon />;


const CalculatorApp = () => {
  return (
    <ContentHolder>
      <SimpleTitle title={appname} subtitle={appsubtitle} icon={apptitleicon} />
      <CalculatorWrapper>
        <CalculatorInterface />
      </CalculatorWrapper>
    </ContentHolder>
  );
};

export default CalculatorApp;
