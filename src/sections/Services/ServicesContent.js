import { Box, Container } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ServicesContent({content}) {
  const {t} = useTranslation()
  return (
    <Container 
        maxWidth={'xl'} 
        sx={{
            marginTop:4,
            marginBottom: 5
        }} 
    >
      <Box className='ck-content' dangerouslySetInnerHTML={{__html: content}}>

      </Box>
    </Container>
  )
}
