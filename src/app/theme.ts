'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { 
        paper: 'rgba(0,0,0,1)',
    },
    primary: {
      light: '#f2f2ff',
      main: '#efefff',
      dark: '#a7a7b2',
    },
    secondary: {
      light: '#eb7333',
      main: '#e65100',
      dark: '#a13800',
    },
    error: {
      light: '#c54949',
      main: '#b71c1c',
      dark: '#801313',
    },
    warning: {
      light: '#ffb633',
      main: '#ffa400',
      dark: '#b27200',
    },
    info: {
      light: '#35baf6',
      main: '#03a9f4',
      dark: '#0276aa',
    },
    success: {
      light: '#77a258',
      main: '#558b2f',
      dark: '#3b6120',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

export default theme;