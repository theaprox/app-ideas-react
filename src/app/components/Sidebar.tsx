'use client';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton, Link, ListItemSecondaryAction, ListSubheader } from '@mui/material';
import { SIDEBAR } from '../constants';

const Sidebar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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
    <Box
      sx={{ display: 'flex', flexDirection: 'column', width: 'auto', minWidth: '250px', padding: 0 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <ListSubheader component="div" id="nested-list-subheader" color='inherit' sx={{ background: 'none' }} >
            Navigation
        </ListSubheader>
        <Divider />
        {SIDEBAR.map((item) => (
                (() => {
                  switch (item.key) {
                    case 'divider': return(
                      <Divider />
                    )
                    default: return(
                      <ListItem key={item.key} disablePadding>
                        <ListItemButton component="a" href={item.path}>
                          <ListItemIcon>
                          {(() => {
                            switch (item.key) {
                              case 'home': return <HomeIcon />
                              default: return null
                            }
                          })()}
                          </ListItemIcon>
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    )
                  }
                })(),
        ))}
      </List>
    </Box>
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
