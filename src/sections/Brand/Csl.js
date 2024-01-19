import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import Banner from '../Banner';

export default function Csl() {
  const { t } = useTranslation();
  const parentPath = `/${t('about-us')}`;
  const theme = useTheme()
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
          <title> {t("CHEMICAL SCIENCE LABORATORIES")} | {t("AIR TO GAS TECHNOLOGY ASIA CO., LTD")} </title>
      </Helmet>
      <Banner
        name={t("CHEMICAL SCIENCE LABORATORIES")}
        image="/assets/gioithieu.png"
        path={parentPath}
        pages={''}
      />
      <Container maxWidth='lg' sx={{marginTop:2, marginBottom:4}}>
        <Grid container spacing={2} sx={{marginTop:2}}>
        <Grid item xs={6} sx={{marginTop:4}}>
            <Typography px={2} textAlign={"justify"} className='ck-content' dangerouslySetInnerHTML={{__html:`<h2><strong>CHEMICAL SCIENCE LABORATORIES</strong></h2><p>ISO 9001:2015 certified, Chemtron is an indispensable part of rapidly growing industries like chemical &amp; electronics. They have well-equipped laboratories and latest equipment to gratify the needs of our clients with best quality product delivery.&nbsp;</p><p>CSL has a dedicated team of professionals who are rich experienced and proficient in the same domain. With the support of our professionals' team, they are able to serve our precious patrons with the topnotch quality products. their professionals are fully aware of our all latest techniques and they also provide the training session to make them perfect and specialized in meeting the customer's demands. The company has a separate team of quality control inspectors that inspects and examines the products on various quality parameters before dispatching to clients.&nbsp;</p>`}}/>
          </Grid>
          <Grid item xs={6} container spacing={2}>
            <Grid item xs={12}>
              <Box
                  sx={{
                      width:'100%',
                      height:'100%',
                      minHeight:'250px',
                      backgroundImage: `url(/assets/logo.png)`,
                      backgroundPosition:'center',
                      backgroundSize:'cover',
                      backgroundRepeat: 'no-repeat',
                      borderRadius:'10px'
                  }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography px={2} className='ck-content' textAlign={"justify"} dangerouslySetInnerHTML={{__html:`<h3><span style="color:rgb(0,0,0);"><strong>Vision Statement&nbsp;</strong></span></h3><p><span style="color:rgb(0,0,0);">To Be a Leading Brand by Setting Standards in the innovation of Blending, measuring &amp; Handling of Gases, thus enabling the technologies of Clean &amp; Safer Environment.&nbsp;</span></p>`}}/>
            </Grid>
          </Grid>
          <Grid item xs={12}>
              <Box
                  sx={{
                      width:'100%',
                      height:'100%',
                      minHeight:'300px',
                      backgroundImage: `url(/assets/logo.png)`,
                      backgroundPosition:'center',
                      backgroundSize:'cover',
                      backgroundRepeat: 'no-repeat',
                      borderRadius:'10px'
                  }}
              />
            </Grid>
        </Grid>
      </Container>
    </>
  );
}
