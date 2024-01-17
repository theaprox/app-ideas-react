import React from 'react';
import ContentHolder from '@/app/components/ContentHolder';
import PaperWrapper from '@/app/components/PaperWrapper';
import SimpleTitle from '@/app/components/SimpleTitle';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import PaymentsIcon from '@mui/icons-material/Payments';

import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';

const appname = 'Convert Cash';
const appsubtitle =
  'Type in any valid amount of money and see it transform into real money. NOT actual real money, just the formatting and the way it is presented... Otherwise it would be magic. Which it IS NOT!';
const apptitleicon = <EuroSymbolIcon />;

const CashMoneys = () => {
  return (
    <ContentHolder>
      <SimpleTitle title={appname} icon={apptitleicon} subtitle={appsubtitle} />
      <PaperWrapper>
        <Box component='div' sx={{gap: 2}}>
          <FormControl fullWidth variant='filled' color='success' focused={true}>
            <InputLabel htmlFor='filled-adornment-amount'>Amount</InputLabel>
            <FilledInput
              id='filled-adornment-amount'
              startAdornment={
                <InputAdornment position='start'>€</InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box component='div'>
          <Button variant="contained" startIcon={<PaymentsIcon />} fullWidth>Convert</Button>
        </Box>
        <Box>
          Bolls n stuff...
        </Box>
      </PaperWrapper>
    </ContentHolder>
  );
};

export default CashMoneys;
