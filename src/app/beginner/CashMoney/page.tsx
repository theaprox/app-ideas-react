import ContentHolder from '@/app/components/ContentHolder'
import PaperWrapper from '@/app/components/PaperWrapper'
import SimpleTitle from '@/app/components/SimpleTitle'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import React from 'react'

const CashMoneys = () => {
  return (
    <ContentHolder>
      <PaperWrapper>
        <SimpleTitle title='Cash Moneys' icon={<EuroSymbolIcon />}/>
      </PaperWrapper>
    </ContentHolder>
  )
}

export default CashMoneys