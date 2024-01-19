import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import Banner from '../Banner';

export default function CaseStudy() {
  const { t } = useTranslation();
  const parentPath = `/${t('about-us')}`;
  const theme = useTheme()
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
          <title> {t("Case study")} | {t("AIR TO GAS TECHNOLOGY ASIA CO., LTD")} </title>
      </Helmet>
      <Banner
        name={t("Case study")}
        image="/assets/gioithieu.png"
        path={parentPath}
        pages={''}
      />
      <Container maxWidth='lg' sx={{marginTop:2, marginBottom:4}}>
        <Grid container spacing={2} sx={{marginTop:2}}>
          <Grid item xs={6} sx={{marginTop:4}}>
            <Typography sx={{marginBottom:2}} variant="h4" fontWeight={700} color={theme.color.secondary}>{t('Custom System Integration and Design')}</Typography>
            <Typography sx={{marginBottom:2}} fontWeight={700} >{t('INTEGRATE INSTRUMENTATION AND ANALYTICAL MEASUREMENT EQUIPMENT')}</Typography>
            <Typography sx={{marginBottom:2}} className='ck-content' textAlign={'justify'}>
                {
                    t(`Our design team works with customers to understand their end use requirements and design a machine that meets and surpasses customer expectations.`)
                }
            </Typography>
            <Button variant='contained'>Download</Button>
          </Grid>
          <Grid item xs={6}>
            <Box
                sx={{
                    width:'100%',
                    height:'100%',
                    // minHeight:{xs: 0, md: '400px'},
                    backgroundImage: `url(/assets/logo.png)`,
                    backgroundPosition:'center',
                    backgroundSize:'contain',
                    backgroundRepeat: 'no-repeat',
                    borderRadius:'10px'
                }}
            />
          </Grid>
          <Grid item xs={6}>
            <Box
                sx={{
                    width:'100%',
                    height:'100%',
                    // minHeight:{xs: 0, md: '400px'},
                    backgroundImage: `url(/assets/logo.png)`,
                    backgroundPosition:'center',
                    backgroundSize:'contain',
                    backgroundRepeat: 'no-repeat',
                    borderRadius:'10px'
                }}
            />
          </Grid>
          <Grid item xs={6} sx={{marginTop:4}}>
            <Typography sx={{marginBottom:2}} variant="h4" fontWeight={700} color={theme.color.secondary}>{t('Custom System Integration and Design')}</Typography>
            <Typography sx={{marginBottom:2}} fontWeight={700} >{t('INTEGRATE INSTRUMENTATION AND ANALYTICAL MEASUREMENT EQUIPMENT')}</Typography>
            <Typography sx={{marginBottom:2}} className='ck-content' textAlign={'justify'}>
                {
                    t(`Our design team works with customers to understand their end use requirements and design a machine that meets and surpasses customer expectations.`)
                }
            </Typography>
            <Button variant='contained'>Download</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
