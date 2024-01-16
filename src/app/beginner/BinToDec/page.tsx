
import React from 'react';
import FormElement from './locals/FormElement';
import SimpleTitle from '@/app/components/SimpleTitle';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PaperWrapper from '@/app/components/PaperWrapper';
import ContentHolder from '@/app/components/ContentHolder';

const appname = 'BIN to DEC';
const appsubtitle = 'Input Binary numbers to convert to Decimal';
const apptitleicon = <PsychologyIcon />;


const BinToDec = () => {
  return (
    <ContentHolder>
        <SimpleTitle title={appname} subtitle={appsubtitle} icon={apptitleicon} />
        <PaperWrapper>
          <FormElement />
        </PaperWrapper>
    </ContentHolder>        
  );
};

export default BinToDec;
