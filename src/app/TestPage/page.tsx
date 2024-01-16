'use client'
import React from 'react';
import ContentHolder from '../components/ContentHolder';
import SimpleTitle from '../components/SimpleTitle';
import PaperWrapper from '../components/PaperWrapper';

// TABS

const appname = 'Test Page';
const appsubtitle =
  'A page dedicated to testing various components before integration.';

const TestPage = () => {
  return (
    <ContentHolder>
      <SimpleTitle title={appname} subtitle={appsubtitle} />
      <PaperWrapper>
      </PaperWrapper>
    </ContentHolder>
  );
};

export default TestPage;
