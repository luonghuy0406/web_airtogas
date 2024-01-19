import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Alert, Box, Button, Container, Grid, Snackbar, TextField, Typography, styled, useTheme } from '@mui/material'
import SendMail from '../sections/SendMail';

const CustomizedButton = styled(Button)(({ theme }) => ({
  // Set background color
  backgroundColor: theme.color.primary,
  fontWeight:"700",
  fontSize:"16px",
  padding:theme.spacing(1),
  // Set text color
  color: theme.color.white,
  borderColor: theme.color.primary,

  // Set border styles
  borderRadius: '4px',

  // Set hover styles
  '&:hover': {
      backgroundColor: theme.color.primary,
      borderColor: theme.color.primary,
  },

  // Set active styles
  '&:active': {
      backgroundColor: theme.color.primary,
      borderColor: theme.color.primary,
  },

  // Set focus styles
  '&:focus': {
      outline: 'none', // Remove the default focus outline
      // boxShadow: `0 0 0 3px rgba(0, 123, 255, 0.3)`, // Add a custom focus border
  },
}));
export default function Contact({data}) {
  
  const {t,i18n} = useTranslation()
  const currentLang = i18n.language == 'en' ? 'en' : ''
  const theme = useTheme()
  const pages = []
  window.scrollTo(0, 0);
  const [open,setOpen]=useState(false)
  return (
    <>
      <Helmet>
          <title> {t("Contact")} | {t("AIR TO GAS TECHNOLOGY ASIA CO., LTD")} </title>
      </Helmet>
      <Banner 
        name={t("Contact")} 
        image={'/assets/gioithieu.png'} 
        path={`/${t('lienhe')}`} 
        pages={pages}
       />
      <Container maxWidth='xl'>
        <Grid container spacing={3} pt={5} pb={15}>
          <Grid item xs={6} md={4} >
            <Box className='our-mission-wrap' sx={{width: "100%", height: "350px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
                <Box
                  sx={{
                    width:"70px",
                    height:"70px",
                    backgroundColor: theme.color.main,
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                >
                  <img src={'/assets/icons/ic_address.svg'} alt='icon phone' width={35} />
                </Box>
                <Box>
                  <Typography textAlign="center" variant="h5" fontWeight={700} color={theme.color.primay} padding={2}>{'Ho Chi Minh Head Office'}</Typography>
                  <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.primay} textAlign={"left"}>16 Yen The St, Ward 2, Tan Binh Dist, Ho Chi Minh City, Viet Nam</Typography>
                  <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.primay} textAlign={"left"}>Tel: +84 28 3547 2693</Typography>    
                  <Typography fontWeight={500} color={theme.color.primay} textAlign={"left"}>Fax: +84 28 3547 2641</Typography> 
                </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} >
            <Box className='our-mission-wrap' sx={{width: "100%", height: "350px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
              <Box
                  sx={{
                    width:"70px",
                    height:"70px",
                    backgroundColor: theme.color.main,
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                >
                  <img src={'/assets/icons/ic_address.svg'} alt='icon phone' width={35} />
                </Box>
                <Box>
                  <Typography textAlign={"center"} variant="h5" fontWeight={700} color={theme.color.primary} padding={2}>{'Vung Tau Office'}</Typography>
                  <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.primay} textAlign={"left"}>8K3 Commercial center, Nguyen Kiem St, Ward 7, Vung Tau City, Viet Nam</Typography>
                  <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.primay} textAlign={"left"}>Tel: +84 254 3513 929</Typography>    
                  <Typography fontWeight={500} color={theme.color.primay} textAlign={"left"}>Fax: +84 254 3513 927</Typography>
                </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} >
            <Box className='our-mission-wrap' sx={{width: "100%", height: "350px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
              <Box
                  sx={{
                    width:"70px",
                    height:"70px",
                    backgroundColor: theme.color.main,
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                >
                  <img src={'/assets/icons/ic_address.svg'} alt='icon phone' width={35} />
                </Box>
                <Box>
                  <Typography textAlign={"center"} variant="h5" fontWeight={700} color={theme.color.primary} padding={2}>{'Ha Noi Office'}</Typography>
                  <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.primay} textAlign={"left"}>266, Quang Lai Street, Luu Phai,Ngu Hiep Commune, Thanh Tri District, Hanoi</Typography>
                  <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.primay} textAlign={"left"}>Tel: +84 938 207 238</Typography>   
                </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} >
            <Box className='our-mission-wrap' sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
                  <img src={'/assets/facebook-icon.png'} alt='icon phone' width={35} />
                  <Typography variant="h5" fontWeight={700} color={theme.color.primary} padding={2}>{'Fanpage:'}</Typography>
                  <a href='https://www.facebook.com/OilInWaterMonitors?mibextid=LQQJ4d' target='_blank'>OilInWaterMonitors</a>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} >
            <Box className='our-mission-wrap' sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
                  <img src={'/assets/linkedin-icon.png'} alt='icon phone' width={35} />
                  <Typography variant="h5" fontWeight={700} color={theme.color.primary} padding={2}>{'Linkedin:'}</Typography>
                  <a href='https://www.facebook.com/OilInWaterMonitors?mibextid=LQQJ4d' target='_blank'>xxx</a>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} >
            <Box className='our-mission-wrap' sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
                  <img src={'/assets/zalo-icon.png'} alt='icon phone' width={35} />
                  <Typography variant="h5" fontWeight={700} color={theme.color.primary} padding={2}>{'Zalo:'}</Typography>
                  <Typography>0938 207 238</Typography>
                  <Typography>0906 783 523</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} >
            <Box className='our-mission-wrap' sx={{width: "100%", height: "300px", backgroundColor:"#fafafa", borderRadius:"10px", padding: theme.spacing(4), display:'flex', alignItems:"center",flexDirection:"column"}}>
                  <img src={'/assets/mail-icon.png'} alt='icon phone' width={35} />
                  <Typography variant="h5" fontWeight={700} color={theme.color.primary} padding={2}>{'Email:'}</Typography>
                  <Typography sx={{marginBottom:3}}>atginfo@airtogas.com</Typography>
                  <CustomizedButton 
                      sx={{width:"100%"}} 
                      variant="contained"
                      onClick={()=>{
                        setOpen(true)
                    }}
                    >{t("SEND MAIL")}</CustomizedButton>
                    <SendMail open={open} setOpen={setOpen}/> 
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
