import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import NumbersIcon from '@mui/icons-material/Numbers';

const MuiIcon = ({target}: {target: any}) => {
  switch (target.level) {
    case '1':
        switch (target.icon) {
            case 'home':
                return <HomeIcon />;
            case 'level1':
                return <LooksOneIcon />;
            default:
                return <QuestionMarkIcon />;
        }
    case '2': 
        switch (target.icon) {
            case '1': return <LooksOneIcon />;
            case '2': return <LooksTwoIcon />;
            case '3': return <Looks3Icon />;
            case 'none': return null;
            default: return <NumbersIcon />;
        }
    default:
        return <QuestionMarkIcon />;
    }
}

export default MuiIcon