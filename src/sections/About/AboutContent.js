import React, { Suspense } from 'react';
import LoadingPage from '../../pages/LoadingPage';
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export default function AboutContent() {
  const {t} = useTranslation()
  const theme = useTheme()
  return (
    <Suspense fallback={<LoadingPage/>}>
      <Container maxWidth='lg'>
        <Grid container spacing={2} sx={{marginTop:2}}>
          <Grid item xs={6} sx={{marginTop:4}}>
            <Typography sx={{marginBottom:2}} variant="h4" textAlign={"center"} fontWeight={700} color={theme.color.secondary}>{t('WHO WE ARE')}</Typography>
            <Typography className='ck-content' textAlign={'justify'}>{
              t(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)
            }</Typography>
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
        </Grid>
        <Grid container spacing={2} sx={{marginTop:2}}>
          <Grid item xs={12} sx={{marginTop:4}}>
            <Typography variant="h4" textAlign={"center"} fontWeight={700} color={theme.color.secondary}>{t('OUR HISTORY')}</Typography>
          </Grid>
          <Grid item xs={12} sx={{marginTop:2}}>
            <Carousel
              additionalTransfrom={0}
              arrows={true}
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
                      items: 2,
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
                      items: 2,
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
                <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Card >
                    <CardMedia
                      sx={{ height: 200 }}
                      image="https://placehold.co/400"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography textAlign={"center"} variant="h4" component="div">
                        Year
                      </Typography>
                      <Typography variant="body2">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Card >
                    <CardMedia
                      sx={{ height: 200 }}
                      image="https://placehold.co/400"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography textAlign={"center"} variant="h4" component="div">
                        Year
                      </Typography>
                      <Typography variant="body2">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Card >
                    <CardMedia
                      sx={{ height: 200 }}
                      image="https://placehold.co/400"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography textAlign={"center"} variant="h4" component="div">
                        Year
                      </Typography>
                      <Typography variant="body2">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                <Box sx={{p:3, display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
                  <Card >
                    <CardMedia
                      sx={{ height: 200 }}
                      image="https://placehold.co/400"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography textAlign={"center"} variant="h4" component="div">
                        Year
                      </Typography>
                      <Typography variant="body2">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                
            </Carousel>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginTop:2}}>

          <Grid item xs={6} sx={{marginTop:4}}>
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
          <Grid item xs={6} >
            <Typography sx={{marginBottom:2}} variant="h4" textAlign={"center"} fontWeight={700} color={theme.color.secondary}>{t('VALUES')}</Typography>
            <Typography className='ck-content' textAlign={'justify'}>{
              t(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)
            }</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginTop:2, marginBottom:5}}>
            
          <Grid item xs={12} sx={{marginTop:4}}>
            <Typography sx={{marginBottom:2}} variant="h4" textAlign={"center"} fontWeight={700} color={theme.color.secondary}>{t('QUALITY: DECLARATIONS & CERTIFICATIONS')}</Typography>
          </Grid>

          <Grid item xs={6} sx={{marginTop:4}}>
            <img style={{marginRight: '15px'}} src={'/assets/ISO9001-2015.jpeg'} alt='ISO9001-2015' height={50} />
            <img style={{marginRight: '15px'}} src={'/assets/ISO9001-2015.jpeg'} alt='ISO9001-2015' height={50} />
            <img style={{marginRight: '15px'}} src={'/assets/ISO9001-2015.jpeg'} alt='ISO9001-2015' height={50} />
            <img src={'/assets/ISO9001-2015.jpeg'} alt='ISO9001-2015' height={50} />
          </Grid>
          <Grid item xs={6} >
            <Typography className='ck-content' textAlign={'justify'}>{
              t(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)
            }</Typography>
          </Grid>
        </Grid>
      </Container>
    </Suspense>
  )
}