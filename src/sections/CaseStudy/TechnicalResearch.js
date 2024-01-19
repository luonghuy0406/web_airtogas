import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import Banner from '../Banner';

export default function TechnicalReSearch() {
  const { t } = useTranslation();
  const parentPath = `/${t('about-us')}`;
  const theme = useTheme()
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
          <title> {t("Technical Research")} | {t("AIR TO GAS TECHNOLOGY ASIA CO., LTD")} </title>
      </Helmet>
      <Banner
        name={t("Technical Research")}
        image="/assets/gioithieu.png"
        path={parentPath}
        pages={''}
      />
      <Container maxWidth='lg' sx={{marginTop:2, marginBottom:4}}>
        <Box className='ck-content'>
            <Typography textAlign={"center"}>Nothing to display at the moment</Typography>
        </Box>
      </Container>
    </>
  );
}
