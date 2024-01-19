import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Box, Button, Card, CardMedia, Container, Grid, Typography, useTheme } from '@mui/material';
import Banner from '../Banner';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export default function Oxygen() {
  const { t } = useTranslation();
  const parentPath = `/${t('about-us')}`;
  const theme = useTheme()
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
          <title> {t("OXYGEN SOLUTIONS")} | {t("AIR TO GAS TECHNOLOGY ASIA CO., LTD")} </title>
      </Helmet>
      <Banner
        name={t("OXYGEN SOLUTIONS")}
        image="/assets/gioithieu.png"
        path={parentPath}
        pages={''}
      />
      <Container maxWidth='lg' sx={{marginTop:2, marginBottom:4}}>
        <Grid container spacing={2} sx={{marginTop:2}}>
          <Grid item xs={6} sx={{marginTop:4}}>
            <Typography className='ck-content' dangerouslySetInnerHTML={{__html:`<h3><span style="color:rgb(0,0,0);">NOTHING IS MORE IMPORTANT TO LIFE THAN OXYGEN.&nbsp;</span></h3><p><span style="color:rgb(0,0,0);">Oxygen is a building block of the earth’s crust, waters, and atmosphere. An endless and uninterrupted supply of oxygen is also vital to the success of many industries.&nbsp;</span></p><p><span style="color:rgb(0,0,0);">At Oxygen Solutions, they love the fact that we take one of the world’s most natural resources - air - and turn it into oxygen to impact some of the world’s most precious resources.&nbsp; &nbsp;</span></p><p><span style="color:rgb(0,0,0);">Oxygen Solutions’ mission is simple – develop the simplest use, easy-to-maintain, gas separation equipment with the lowest operating costs. Their goal is to help you save on your operating costs and make it easy to begin producing your own on-site gases.&nbsp;&nbsp;</span></p><p><span style="color:rgb(0,0,0);">They are constantly striving to develop the most efficient equipment as scientifically possible. They work with the world recognized adsorption specialists at the University of Alberta to optimize our designs. That means you can be assured that Oxygen Solutions gas separation equipment is the most technically advanced in the industry.</span></p>`}}/>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ 
                  width: "100%", 
                  height: '100%', 
                  display: 'flex',
                  alignItems:'center',
                  justifyContent:'center'
                
                }}
                >
                  <video
                    id="the-video"
                    // title
                    style={{width:"100%" }}
                    loop
                    muted
                    playsInline
                    autoPlay
                    data-src={'/assets/oxygen/video.mp4'}
                    data-ftype="video/mp4"
                    data-mtype="video/mp4"
                  >
                    <source
                      src={'/assets/oxygen/video.mp4'}
                      type="video/mp4"
                      media="all"
                    />
                  </video>
              </Box>
          </Grid>
          <Grid item xs={12}>
          <Carousel
                  additionalTransfrom={0}
                  arrows={true}
                  autoPlay
                  pauseOnHover={false}
                  autoPlaySpeed={10000}
                  centerMode={false}
                  className=""
                  containerClass="container animate__animated animate__fadeInRight"
                  customTransition="all 0.5s linear"
                  infinite
                  responsive={{
                      desktop: {
                          breakpoint: {
                              max: 3000,
                              min: 1024
                          },
                          items: 1,
                          partialVisibilityGutter: 40
                      },
                      mobile: {
                          breakpoint: {
                              max: 464,
                              min: 0
                          },
                          items: 1,
                          partialVisibilityGutter: 30
                      },
                      tablet: {
                          breakpoint: {
                              max: 1024,
                              min: 464
                          },
                          items: 1,
                          partialVisibilityGutter: 30
                      }
                  }}
                  slidesToSlide={1}
                  >
                    {
                        Array(3).fill().map((a,i)=>{
                            return (
                                <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%", minHeight:300}}>
                                    <Card sx={{ height: '100%', width:'100%', boxShadow:'unset' }}>
                                        <CardMedia
                                            sx={{ height: '100%', width:'100%' }}
                                            image={`/assets/oxygen/${i+1}.jpeg`}
                                            title="green iguana"
                                        />
                                    </Card>
                                </Box>
                            )
                        })
                    }
                    
                    
                </Carousel>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
