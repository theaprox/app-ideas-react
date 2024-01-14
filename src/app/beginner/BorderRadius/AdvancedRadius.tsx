import { Box, Chip, FormLabel, Slider, Typography } from '@mui/material';
import React from 'react';

//@ts-ignore

const AdvancedRadius = () => {
  const [topValue, setTopValue] = React.useState(30);
  const [rightValue, setRightValue] = React.useState(-40);
  const [bottomValue, setBottomValue] = React.useState(-30);
  const [leftValue, setLeftValue] = React.useState(60);

  //@ts-ignore
  const topChange = (event, newValue) => {
    setTopValue(newValue);
  };
  //@ts-ignore
  const rightChange = (event, newValue) => {
    setRightValue(newValue);
  };
  //@ts-ignore
  const bottomChange = (event, newValue) => {
    setBottomValue(newValue);
  };
  //@ts-ignore
  const leftChange = (event, newValue) => {
    setLeftValue(newValue);
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
    position: 'relative',
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
    position: 'relative',
    width: 2 / 3,
    height: 'auto',
    maxWidth: '320px',
    aspectRatio: '1/1',
    borderTopLeftRadius: `    ${topValue}%                       ${100 - leftValue}%`,
    borderTopRightRadius: `   ${100 - topValue}%                 ${Math.abs(rightValue)}%`,
    borderBottomRightRadius: `${Math.abs(bottomValue)}%          ${100 - Math.abs(rightValue)}%`,
    borderBottomLeftRadius: ` ${100 - Math.abs(bottomValue)}%    ${leftValue}%`,
    bgcolor: 'info.light',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    p: 0,
    m: 0,
  };

  const sliderControlClass = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  };

  const topSlider = {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate(0, -50%)',
    '.MuiSlider-rail, .MuiSlider-track': {
      visibility: 'hidden',
    },
  };
  const bottomSlider = {
    position: 'absolute',
    top: '100%',
    left: 0,
    transform: 'translate(0, -50%)',
    '.MuiSlider-rail, .MuiSlider-track': {
      visibility: 'hidden',
    },
  };

  const rightSlider = {
    position: 'absolute',
    top: 0,
    left: '100%',
    transform: 'translate(-50%, 0%)',
    '.MuiSlider-rail, .MuiSlider-track': {
      visibility: 'hidden',
    },
    '& input[type="range"]': {
      WebkitAppearance: 'slider-vertical',
    },
  };
  const leftSlider = {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate(-50%, 0%)',
    '.MuiSlider-rail, .MuiSlider-track': {
      visibility: 'hidden',
    },
    '& input[type="range"]': {
      WebkitAppearance: 'slider-vertical',
    },
  };

  return (
    <Box component='div' sx={panelBoxClass}>
      <Box component='section' sx={interactiveBoxHolderClass}>
        <Chip size='small' label={topValue + ' | ' + (100 - leftValue)} sx={{ width: 'auto', position: 'absolute', top:0, left:0, m:1, }}/>
        <Chip size='small' label={(100 - topValue) + ' | ' + Math.abs(rightValue)} sx={{ width: 'auto', position: 'absolute', top:0, right:0, m:1, }}/>
        <Chip size='small' label={Math.abs(bottomValue) + ' | ' + (100- Math.abs(rightValue))} sx={{ width: 'auto', position: 'absolute', bottom:0, right:0, m:1, }}/>
        <Chip size='small' label={(100 - Math.abs(bottomValue)) + ' | ' + leftValue} sx={{ width: 'auto', position: 'absolute', bottom:0, left:0, m:1, }}/>
        <Box sx={simpleRadiusBox}>
          <Slider
            sx={topSlider}
            disabled={false}
            marks={false}
            step={1}
            max={100}
            min={0}
            size='small'
            defaultValue={topValue}
            aria-label='topSlider'
            name='topSlider'
            onChange={topChange}
            valueLabelDisplay='off'
          />
          <Slider
            orientation='vertical'
            sx={rightSlider}
            disabled={false}
            marks={false}
            step={1}
            max={0}
            min={-100}
            size='small'
            defaultValue={rightValue}
            aria-label='rightSlider'
            name='rightSlider'
            onChange={rightChange}
            valueLabelDisplay='off'
          />
          <Slider
            sx={bottomSlider}
            disabled={false}
            marks={false}
            step={1}
            max={0}
            min={-100}
            scale={(x) => -x}
            size='small'
            defaultValue={bottomValue}
            aria-label='bottomSlider'
            name='bottomSlider'
            onChange={bottomChange}
            valueLabelDisplay='off'
          />
          <Slider
            orientation='vertical'
            sx={leftSlider}
            disabled={false}
            marks={false}
            step={1}
            max={100}
            min={0}
            size='small'
            defaultValue={leftValue}
            aria-label='leftSlider'
            name='leftSlider'
            onChange={leftChange}
            valueLabelDisplay='off'
          />
        </Box>
      </Box>

      <Box sx={sliderControlClass}>
        <FormLabel>
          Play around with bubbles inside the dasshed ractangle.
        </FormLabel>
      </Box>
    </Box>
  );
};

export default AdvancedRadius;
