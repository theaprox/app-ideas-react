import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';

const MuiIcon = ({target}: {target: any}) => {
  switch (target.key) {
        case 'home':
            return <HomeIcon />;
        case 'level': 
            switch (target.level) {
                case '1': return <LooksOneIcon />;
                case '2': return <LooksTwoIcon />;
                case '3': return <Looks3Icon />;
                default: return null;
            }
        default:
            return <QuestionMarkIcon />;
    }
}

export default MuiIcon