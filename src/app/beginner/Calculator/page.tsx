import React from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';
import SimpleTitle from '@/app/components/SimpleTitle';
import ContentHolder from '@/app/components/ContentHolder';
import PaperWrapper from '@/app/components/PaperWrapper';
import CalculatorInterface from './CalculatorInterface';

const appname = 'Calculator';
const appsubtitle = 'Simple Calculator';
const apptitleicon = <CalculateIcon />;


const CalculatorApp = () => {
  return (
    <ContentHolder>
      <SimpleTitle title={appname} subtitle={appsubtitle} icon={apptitleicon} />
      <PaperWrapper>
        <CalculatorInterface />
      </PaperWrapper>
    </ContentHolder>
  );
};

export default CalculatorApp;
