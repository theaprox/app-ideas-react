import React from 'react';
import SimpleTitle from '../../components/SimpleTitle';
import ContentHolder from '@/app/components/ContentHolder';
import PaperWrapper from '@/app/components/PaperWrapper';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import ContentTabs from './ContentTabs';

const appname = 'Border Radius';
const appsubtitle = 'Adjust box border radius';
const apptitleicon = <BorderStyleIcon />;


const BorderRadius = () => {

  return (
    <ContentHolder>
      <SimpleTitle title={appname} subtitle={appsubtitle} icon={apptitleicon} />
      <PaperWrapper>
        <ContentTabs />
      </PaperWrapper>
    </ContentHolder>
  );
};

export default BorderRadius;
