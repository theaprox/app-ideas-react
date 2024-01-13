import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Divider from '@mui/material/Divider';
import { SIDEBAR } from '../constants';
import MuiIcon from './MuiIcon';

export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  }

  const collapseListStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    bgcolor: 'rgba(0, 0, 0, 0.3)',
  }

  return (
    <List
      sx={listStyle}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader
          component='div'
          id='nested-list-subheader'
          color='inherit'
          sx={{ background: 'none' }}>
          <div className='tw-flex tw-flxe-1 tw-items-center tw-justify-center tw-gap-2'>
                <WhatshotIcon className='tw-text-primary'/>app-ideas
          </div>
        </ListSubheader>
      }>
      <Divider />
      {SIDEBAR.map((item) => (
        <>
          {(() => {
            if (!item.subitems) {
              return (
                <ListItemButton component='a' href={item.path}>
                  <ListItemIcon>
                    <MuiIcon target={item} />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              );
            } else {
              return (
                <>
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <MuiIcon target={item} />
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse in={open} timeout='auto' unmountOnExit>
                    <List
                      component='div'
                      disablePadding
                      sx={collapseListStyle}>
                      {item.subitems.map((subitem) => (
                        <ListItemButton
                          component='a'
                          href={subitem.path}
                          sx={{ pl: 4, background: 'paper' }}>
                          <ListItemIcon>
                            <MuiIcon target={subitem} />
                          </ListItemIcon>
                          <ListItemText primary={subitem.label} />
                        </ListItemButton>
                      ))}
                    </List>
                    <Divider />
                  </Collapse>
                </>
              );
            }
          })()}
        </>
      ))}
    </List>
  );
}
