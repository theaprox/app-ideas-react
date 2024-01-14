'use client';
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BorderRadius = () => {
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

  const outerBoxClass = {
    p: 8,
    border: '1px dashed grey',
    display: 'flex',
    justifyContent: 'center',
    Typography: 'body1',
  };

  const innerBoxClass = {
    width: 2 / 3,
    height: 'auto',
    aspectRatio: '1/1',
    borderRadius: 1,
    bgcolor: 'info.light',
    '&:hover': {
      bgcolor: 'info.main',
    },
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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

        <Box>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
            sx={tabBoxClass}>
            <Tab sx={tabStyleClass} label='Simple' {...a11yProps(0)} />
            <Tab sx={tabStyleClass} label='Advanced' {...a11yProps(1)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            Simple controls
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Advanced controls
          </CustomTabPanel>
        </Box>

        <Box>
          <Box component='section' sx={outerBoxClass}>
            <Box sx={innerBoxClass}></Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default BorderRadius;
