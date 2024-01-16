'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';

// Dynamically import SimpleRadius and AdvancedRadius with SSR disabled
const SimpleRadius = dynamic(() => import('./SimpleRadius'), { ssr: false });
const AdvancedRadius = dynamic(() => import('./AdvancedRadius'), {ssr: false,});


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

//@ts-ignore
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

//@ts-ignore
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ContentTabs = () => {
  
  //@ts-ignore
  const [value, setValue] = useState(0);

  //@ts-ignore
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box component='div'>
      <Tabs
        centered
        value={value}
        onChange={handleChange}
        aria-label='basic tabs example'>
        <Tab sx={{ width: '50%' }} label='Simple' {...a11yProps(0)} />
        <Tab sx={{ width: '50%' }} label='Advanced' {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <SimpleRadius />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <AdvancedRadius />
      </TabPanel>
    </Box>
    </>
  )
}

export default ContentTabs