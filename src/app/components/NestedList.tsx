import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Divider from '@mui/material/Divider';
import { SIDEBAR } from '../constants';
import MuiIcon from './MuiIcon';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        minWidth: '250px',
        padding: 0,
      }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader
          component='div'
          id='nested-list-subheader'
          color='inherit'
          sx={{ background: 'none' }}>
          <div className='tw-flex tw-fle-1 tw-items-center tw-gap-2'>
            <WhatshotIcon /> app-ideas
          </div>
        </ListSubheader>
      }>
      <Divider />
      {SIDEBAR.map((item) => (
        <>

          {(() => {
            if (!item.subitems) {
              return (
                <ListItemButton component="a" href={item.path}>
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
                        <List component='div' disablePadding>
                        
                        {
                        item.subitems.map((subitems) => (
                            <ListItemButton component="a" href={subitems.path} sx={{ pl: 4 }}>
                                <ListItemText primary={subitems.label} />
                            </ListItemButton>
                        ))
                        }

                        </List>
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
