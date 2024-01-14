import { Box, FormLabel, Slider } from '@mui/material';
import React from 'react';

//@ts-ignore

const AdvancedRadius = () => {
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
    position: 'relative',
    width: 2 / 3,
    height: 'auto',
    maxWidth: '320px',
    aspectRatio: '1/1',
    borderTopLeftRadius: `50% 50%`,
    borderTopRightRadius: `50% 50%`,
    borderBottomRightRadius: `50% 50%`,
    borderBottomLeftRadius: `50% 50%`,
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
  }

  const topSlider = {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate(0, -50%)',
    '.MuiSlider-rail, .MuiSlider-track': {
      visibility: 'hidden',
    },
  }
  const bottomSlider = {
    position: 'absolute',
    top: '100%',
    left: 0,
    transform: 'translate(0, -50%)',
    '.MuiSlider-rail, .MuiSlider-track': {
      visibility: 'hidden',
    },
  }

  const rightSlider = {
    position: 'absolute',
    top: 0,
    left: "100%",
    transform: 'translate(-50%, 0%)',
    '.MuiSlider-rail, .MuiSlider-track': {
      visibility: 'hidden',
    },
    '& input[type="range"]': {
      WebkitAppearance: 'slider-vertical',
    },
  }
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
  }

  return (
    <Box component='div' sx={panelBoxClass}>
      <Box component='section' sx={interactiveBoxHolderClass}>
        <Box sx={simpleRadiusBox}>
          <Slider
            sx={topSlider}
            disabled={false}
            marks={false}
            step={1}
            max={100}
            min={0}
            size='small'
            defaultValue={50}
            aria-label='topSlider'
            valueLabelDisplay='auto'
          />
          <Slider
            orientation='vertical'
            sx={rightSlider}
            disabled={false}
            marks={false}
            step={1}
            max={100}
            min={0}
            size='small'
            defaultValue={50}
            aria-label='rightSlider'
            valueLabelDisplay='auto'
          />
          <Slider
            sx={bottomSlider}
            disabled={false}
            marks={false}
            step={1}
            max={100}
            min={0}
            size='small'
            defaultValue={50}
            aria-label='bottomSlider'
            valueLabelDisplay='auto'
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
            defaultValue={50}
            aria-label='leftSlider'
            valueLabelDisplay='auto'
          />
        </Box>
      </Box>

      <Box sx={sliderControlClass}>
        <FormLabel>Play around with bubbles inside the dasshed ractangle.</FormLabel>
      </Box>
    </Box>
  );
};

export default AdvancedRadius;
