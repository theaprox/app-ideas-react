'use client';
import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Link, ListItemSecondaryAction, ListSubheader } from '@mui/material';
import NestedList from './NestedList';

const Sidebar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    open: true,
  });

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: string) => (
      <NestedList />
  );

  return (
    <div className='tw-fixed tw-top-0 tw-left-0 tw-p-4'>
      <React.Fragment key='left'>
        <IconButton
          color='primary'
          aria-label='delete'
          size='large'
          onClick={toggleDrawer('left', true)}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor='left'
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}>
          {' '}
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default Sidebar;
