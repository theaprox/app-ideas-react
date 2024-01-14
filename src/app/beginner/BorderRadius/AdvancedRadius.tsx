import { Box, FormLabel, Chip, Slider } from '@mui/material';
import React from 'react';

//@ts-ignore

const AdvancedRadius = () => {
  const [radius, setRadius] = React.useState({
    top: 30,
    right: (-40),
    bottom: (-30),
    left: 60,
  });
  
  //@ts-ignore
  // updating values from sliders
  const updateRadius = (type) => (event) => {
    setRadius({ ...radius, [type]: event.target.value });
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
    py: 5,
    m: 0,
  };

  const simpleRadiusBox = {
    position: 'relative',
    width: 2 / 3,
    height: 'auto',
    maxWidth: '320px',
    aspectRatio: '1/1',
    borderTopLeftRadius: `${radius['top']}% ${100 - radius['left']}%`,
    borderTopRightRadius: `${100 - radius['top']}% ${Math.abs(radius['right'])}%`,
    borderBottomRightRadius: `${Math.abs(radius['bottom'])}% ${100 - Math.abs(radius['right'])}%`,
    borderBottomLeftRadius: `${100 - Math.abs(radius['bottom'])}% ${radius['left']}%`,
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
        <Chip
          color='info'
          size='small'
          variant='outlined'
          label={radius['top'] + ' | ' + (100 - radius['left'])}
          sx={{ width: 'auto', position: 'absolute', top: 0, left: 0, m: 1 }}
        />
        <Chip
          color='info'
          size='small'
          variant='outlined'
          label={100 - radius['top'] + ' | ' + Math.abs(radius['right'])}
          sx={{ width: 'auto', position: 'absolute', top: 0, right: 0, m: 1 }}
        />
        <Chip
          color='info'
          size='small'
          variant='outlined'
          label={Math.abs(radius['bottom']) + ' | ' + (100 - Math.abs(radius['right']))}
          sx={{
            width: 'auto',
            position: 'absolute',
            bottom: 0,
            right: 0,
            m: 1,
          }}
        />
        <Chip
          color='info'
          size='small'
          variant='outlined'
          label={100 - Math.abs(radius['bottom']) + ' | ' + radius['left']}
          sx={{ width: 'auto', position: 'absolute', bottom: 0, left: 0, m: 1 }}
        />
        <Box sx={simpleRadiusBox}>
          <Slider
            sx={topSlider}
            disabled={false}
            marks={false}
            step={1}
            max={100}
            min={0}
            size='small'
            defaultValue={radius['top']}
            aria-label='topSlider'
            name='topSlider'
            onChange={updateRadius('top')}
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
            defaultValue={radius['right']}
            aria-label='rightSlider'
            name='rightSlider'
            onChange={updateRadius('right')}
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
            defaultValue={radius['bottom']}
            aria-label='bottomSlider'
            name='bottomSlider'
            onChange={updateRadius('bottom')}
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
            defaultValue={radius['left']}
            aria-label='leftSlider'
            name='leftSlider'
            onChange={updateRadius('left')}
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
