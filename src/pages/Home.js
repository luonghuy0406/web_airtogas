import React from "react";
import { Helmet } from 'react-helmet-async';
import { Box, Button, Card, CardMedia, Container, Grid, Typography, styled, useTheme } from "@mui/material";
import { BannerSlide } from "../sections/Home/BannerSlide";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { Image } from "semantic-ui-react";

const Home = () => {
  const myRef = useRef(null)
  const {t} = useTranslation()
  const theme = useTheme()
  window.scrollTo(0, 0);
  return (
    <Box>
      <Helmet>
          <title> {t("Home")} | {t("AIR TO GAS TECHNOLOGY ASIA CO., LTD")} </title>
      </Helmet>
      <BannerSlide/>
      <About/>
      <Brand/>
    </Box>
  );
};

export default Home;


const CoreValuestWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.color.white,
  borderRadius: '10px',
  height: '100%',
  '&:hover':{
      boxShadow: '0 0 15px #eee',
      display: 'flex',
      alignItems:'center',
      justifyContent:'center'
  },
  '&:after': {
    borderRadius:'5px',
    content: '""',
    display: 'block',
    background: theme.color.red,
    position: 'absolute',
    top: '20px',
    left: '20px',
    bottom: '20px',
    right: '20px',
    opacity: 0,
    transform: 'rotateY(90deg)',
    transformOrigin: '0 0',
    transition: 'all .4s ease-in-out 0s',
  },
  '&:hover:after': {
    transform: 'rotateY(0)',
    opacity: 0.8,

    transition: 'all .4s ease-in-out 0s',
  },
  '&:hover .core-value-content': {
    display:'flex !important',
    transitionDelay: '0.2s',
    color: theme.color.white,
    zIndex: '3',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    transition: 'all .4s ease-in-out 0s',
  },
  '&:hover .core-value-title': {
    display: 'none',
    transition: 'all .4s ease-in-out 0s',
  },
  '&:hover .core-value-image': {
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
  },
  '&:hover .core-value-image img': {
      // width: '100%',
      // transition: 'all .4s ease-in-out 0s',
  }
  
}));
const Brand = ()=>{
  const {t} = useTranslation()
  const theme = useTheme()
  return (
      <Container maxWidth='lg' sx={{marginTop:4}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Link to='/oxygen'>
              <CoreValuestWrap >
                  <Box 
                      sx={{
                          position:'relative',
                          backgroundColor: theme.color.white,
                          p:theme.spacing(5), 
                          borderRadius:"10px", 
                          height: '100%',
                          minHeight: '350px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                      }} 
                      className={"core-values-wrap"}
                  >
                      <Box className='core-value-title' fontSize={'18px'} py={2} sx={{height:'50px'}} fontWeight={"bold"} dangerouslySetInnerHTML={{__html:'OXYGEN SOLUTIONS'}}/>
                      <Box className='core-value-content' sx={{display:'none', position:'relative'}} fontWeight={600} dangerouslySetInnerHTML={{__html:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s	
                              
                              `}}/>
                  </Box>
              </CoreValuestWrap>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to='/csl'>
              <CoreValuestWrap >
                  <Box 
                      sx={{
                          position:'relative',
                          backgroundColor: theme.color.white,
                          p:theme.spacing(5), 
                          borderRadius:"10px", 
                          height: '100%',
                          minHeight: '350px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                      }} 
                      className={"core-values-wrap"}
                  >
                      <Box className='core-value-title' fontSize={'18px'} py={2} sx={{height:'50px'}} fontWeight={"bold"} dangerouslySetInnerHTML={{__html:'CHEMICAL SCIENCE LABORATORIES'}}/>
                      <Box className='core-value-content' sx={{display:'none', position:'relative'}} fontWeight={600} dangerouslySetInnerHTML={{__html:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s	
                              
                              `}}/>
                  </Box>
              </CoreValuestWrap>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to='http://vnhci.com/'>
              <CoreValuestWrap >
                  <Box 
                      sx={{
                          position:'relative',
                          backgroundColor: theme.color.white,
                          p:theme.spacing(5), 
                          borderRadius:"10px", 
                          height: '100%',
                          minHeight: '350px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                      }} 
                      className={"core-values-wrap"}
                  >
                      <Box className='core-value-title' fontSize={'18px'} py={2} sx={{height:'50px'}} fontWeight={"bold"} dangerouslySetInnerHTML={{__html:'VHI'}}/>
                      <Box className='core-value-content' sx={{display:'none', position:'relative'}} fontWeight={600} dangerouslySetInnerHTML={{__html:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s	
                              
                              `}}/>
                  </Box>
              </CoreValuestWrap>
            </Link>
          </Grid>
        </Grid>
        <Customers/>
      </Container>
  )
}

const About = ()=>{
  const {t} = useTranslation()
  const theme = useTheme()
  return (
    <Container maxWidth='lg' sx={{marginTop:4}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{marginBottom:2}} variant="h4" textAlign={"center"} fontWeight={700} color={theme.color.secondary}>{t('ABOUT US')}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{marginBottom:1}} fontWeight={700}>AIR TO GAS TECHNOLOGY ASIA CO., LTD (ATGTA)</Typography>
                <Typography textAlign={'justify'}>
                    ATGTA is Benchmark’s Distributor in Vietnam. We specialize in supply Oxygen System with advance technology apply in the world which is Vaccuum Swing Adsorption System.
                    Our central goal is straightforward – build up the easiest use, simple to keep up, gas partition gear with the least working expenses. We will probably assist you with saving money on your working expenses and make it simple to start creating your nearby gases.
                    We work with the world’s leading oxygen equipment manufacturing company to streamline our plans. That implies you can be guaranteed that Oxygen System is the most progressed in the business.								
                </Typography>
                <Button sx={{float:'right', textDecoration:'underline'}} variant="text">
                  <Link to={'/about-us'}>
                    SEE MORE
                  </Link>
                </Button>
              </Grid>
              <Grid item xs={6}>
              <Carousel
                  additionalTransfrom={0}
                  arrows={true}
                  autoPlay
                  pauseOnHover={false}
                  autoPlaySpeed={3000}
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
                    <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%", minHeight:300}}>
                      <Card sx={{ height: '100%', width:'100%' }}>
                        <CardMedia
                          sx={{ height: '100%', width:'100%' }}
                          image="https://placehold.co/600x400"
                          title="green iguana"
                        />
                      </Card>
                    </Box>
                    
                </Carousel>
              </Grid>
            </Grid>
    </Container>
  )
}

const Customers = ()=>{
  const theme = useTheme()
  const {t} = useTranslation()
  return(
    <Box sx={{marginBottom:5, marginTop:4}}>
        <Typography sx={{marginBottom:2}} variant="h4" textAlign={"center"} fontWeight={700} color={theme.color.secondary}>{t('CUSTOMERS')}</Typography>
        <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            customTransition="all 0.5s linear"
            centerMode={true}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 6,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
            >
              {
                Array(20).fill().map((cus,index)=>{
                  return(
                    <LazyLoad key={"cus"+index} offset={100} style={{height:"100%"}}>
                      <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                          <Image  src={`/assets/cus.png`} width="100%"/>
                      </Box>
                    </LazyLoad>
                  )
                })
              }
              
        </Carousel>
      </Box> 
  )
}