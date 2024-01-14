import { Box, FormLabel, Slider } from '@mui/material';
import React from 'react';

const SimpleRadius = () => {
  const [simpleRadius, setSimpleRadius] = React.useState(0);

  //@ts-ignore
  const valueText = (value) => {
    setSimpleRadius(value);
    return `${value}`;
  };

  const panelBoxClass = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: 4,
  };

  const interactiveBoxHolderClass = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    Typography: 'body1',
    border: '1px dashed grey',
    gap: 1,
    py: 4,
    m: 0,
  };

  const sliderClass = {
    maxWidth: '240px',
  };

  const simpleRadiusBox = {
    width: 2 / 3,
    height: 'auto',
    maxWidth: '320px',
    aspectRatio: '1/1',
    borderRadius: `${simpleRadius}%`,
    bgcolor: 'info.light',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const sliderControlClass = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  };

  return (
    <Box component='div' sx={panelBoxClass}>
      <Box component='section' sx={interactiveBoxHolderClass}>
        <Box sx={simpleRadiusBox}>
          <FormLabel sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            Radius: <b>{simpleRadius}</b>%
          </FormLabel>
        </Box>
      </Box>

      <Box sx={sliderControlClass}>
        <FormLabel>Radius adjustment</FormLabel>
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
    </Box>
  );
};

export default SimpleRadius;
