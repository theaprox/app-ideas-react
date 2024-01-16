import { Box, Paper } from '@mui/material';
import { paperClass } from '@/app/constants';
import CalculateIcon from '@mui/icons-material/Calculate';
import PaperCardTitle from '../PaperCardTitle';

const CalculatorApp = () => {
  return (
    <div className='tw-flex-1 tw-grow tw-flex tw-flex-col tw-items-center tw-pt-24'>
      <Paper component='form' sx={paperClass} elevation={8}>
        <PaperCardTitle text='Calculator' icon={<CalculateIcon />} />
        <Box>

        </Box>
      </Paper>
    </div>
  );
};

export default CalculatorApp;
