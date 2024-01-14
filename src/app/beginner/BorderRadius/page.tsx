'use client';
import * as React from 'react';
import { Box, FormLabel, Paper, Slider, Typography } from '@mui/material';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';

//@ts-ignore
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

//@ts-ignore
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BorderRadius = () => {
  const [value, setValue] = React.useState(0);
  const [simpleRadius, setSimpleRadius] = React.useState(0);

  //@ts-ignore
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //styles
  const paperClass = {
    '&.MuiPaper-root': {
      backgroundImage: 'unset',
      backgroundColor: '#202025',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 2 / 3,
    maxWidth: 'md',
    padding: 2,
    gap: 2,
  };

  const tabBoxClass = {
    borderBottom: 1,
    borderColor: 'divider',
    display: 'flex',
    gap: 0,
  };

  const tabStyleClass = {
    flexGrow: 1,
    m: 0,
  };

  const panelBoxClass = {
    width: '100%',
    height: 'auto',
    aspectRatio: '1/1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: 2,
  };

  const interactiveBoxHolderClass = {
    width: '100%',
    height: 'auto',
    aspectRatio: '1/1',
    border: '1px dashed grey',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    Typography: 'body1',
    py:0,
    m:0,
  };

  const sliderClass = {
    maxWidth: '240px',
  };

  const simpleRadiusBox = {
    width: 2 / 3,
    height: 'auto',
    aspectRatio: '1/1',
    borderRadius: `${simpleRadius}%`,
    bgcolor: 'info.light',
    '&:hover': {
      bgcolor: 'info.main',
    },
  }

  //@ts-ignore
  const valueText = (value) => {
    setSimpleRadius(value);
    return `${value}`;
  };

  return (
    <div className='tw-flex-1 tw-grow tw-flex tw-flex-col tw-items-center tw-pt-24'>
      <Paper component='form' sx={paperClass} elevation={8}>
        <Box>
          <Typography
            variant='h5'
            sx={{
              textTransform: 'uppercase',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
            }}
            gutterBottom>
            <BorderStyleIcon />
            Border Radius
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            Adjust box border radius
          </Typography>
        </Box>

        <Box component='div'>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
            sx={tabBoxClass}>
            <Tab sx={tabStyleClass} label='Simple' {...a11yProps(0)} />
            <Tab sx={tabStyleClass} label='Advanced' {...a11yProps(1)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Box component='div' sx={panelBoxClass}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
                component='div'>
                <FormLabel>
                  Simple radius adjustment.
                </FormLabel>
                <Slider
                  sx={sliderClass}
                  name='simpleRadiusSlider'
                  aria-label='Radius'
                  defaultValue={12}
                  getAriaValueText={valueText}
                  valueLabelDisplay='auto'
                  step={1}
                  min={0}
                  max={50}
                />
              </Box>

              <Box component='section' sx={interactiveBoxHolderClass}>
                <FormLabel
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  Radius: {simpleRadius}%
                </FormLabel>
                <Box sx={simpleRadiusBox}></Box>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value={value} index={1}>
            Advanced controls
          </TabPanel>
        </Box>
      </Paper>
    </div>
  );
};

export default BorderRadius;
