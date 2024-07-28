import React, { useState } from 'react';
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
  const [amount, setAmount] = useState('0')

  //@ts-ignore
  const handleInputChange = (event) => {
    
  }
  return (
    <ContentHolder>
      <SimpleTitle title={appname} icon={apptitleicon} subtitle={appsubtitle} />
      <PaperWrapper>
          <Box
            component='div'
            sx={{ display: 'flex', flexDirection: 'column', gap: 0, p: 1, border: '1px dashed', borderColor: 'primary.dark', typography: 'h4', textAlign: 'center', }}>
              <Box component='span' sx={{ fontSize: '0.5em', color: 'primary.dark', }}> Euro</Box>
              {amount}
          </Box>
        <Box component='div'>
          <FormControl
            fullWidth
            variant='filled'
            color='success'
            focused={true}>
            <InputLabel htmlFor='filled-adornment-amount'>Amount</InputLabel>
            <FilledInput
              id='filled-adornment-amount'
              value={amount}
              onChange={handleInputChange}
              startAdornment={
                <InputAdornment position='start'>€</InputAdornment>
              }
              inputProps={{ inputMode: 'decimal' }}
            />
          </FormControl>
        </Box>
        <Box component='div'>
          <Button variant='contained' startIcon={<PaymentsIcon />} fullWidth>
            Convert
          </Button>
        </Box>
      </PaperWrapper>
    </ContentHolder>
  );
};

export default CashMoneys;
