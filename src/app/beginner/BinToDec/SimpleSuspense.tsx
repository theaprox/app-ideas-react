import { Box, Skeleton, Stack } from '@mui/material'
import React from 'react'

const SimpleSuspense = () => {
  return (
    <>
      <Box>
        <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton variant='text' animation='wave' width='100%' height='100px' />
          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant='rectangular' animation='wave' width='100%' height='86px' />
        </Stack>
      </Box>
    </>
  )
}

export default SimpleSuspense