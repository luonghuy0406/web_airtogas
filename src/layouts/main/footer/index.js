
import { useTheme } from "@emotion/react";
import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { faLocationDot, faMobile, faPhone, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from "react-i18next";


library.add(fas, faFontAwesome, faLocationDot, faMobile, faPhone, faFax, faEnvelope, faFacebook, faYoutube)

export default function Footer(){
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const theme = useTheme()
    const footerRef = useRef(null)
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        deplay: 1000
    });
    useEffect(() => {
        if(inView){
            if (footerRef.current) {
                footerRef.current.classList.add('animate__animated','animate__fadeInUp');
            }
        }
    }, [inView]);
    return(
        <Container 
            ref={ref}
            maxWidth='100%' 
            p={0} 
            sx={{
                backgroundColor: theme.color.secondary,
            }}
        >
            <Container maxWidth='xl' sx={{paddingTop:theme.spacing(4)}} ref={footerRef}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography sx={{marginBottom: 3}} variant='h5' fontWeight={600} color={theme.color.white}>AIR TO GAS TECHNOLOGY ASIA CO., LTD</Typography>
                    </Grid>
                    <Grid item xs={12} md={2.4}>
                        <Box sx={{display:'flex', alignItems:'center'}}>
                            <img src={'/assets/logo2.png'} alt='AIR TO GAS TECHNOLOGY ASIA CO., LTD logo' height={50} />
                        </Box>
                        <Typography sx={{marginBottom: 1}} fontWeight={600} color={theme.color.white}>Hotline: +84 938207238</Typography>
                        <Typography fontWeight={600} color={theme.color.white}>Email: atginfo@airtogas.com</Typography>
                    </Grid>
                    <Grid item xs={12} md={2.4}>
                            <Typography sx={{marginBottom: 2}} variant='h6' fontWeight={600} color={theme.color.white}>{t('Ho Chi Minh Head Office')}</Typography>
                            <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.white}>16 Yen The St, Ward 2, Tan Binh Dist, Ho Chi Minh City, Viet Nam</Typography>
                            <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.white}>Tel: +84 28 3547 2693</Typography>    
                            <Typography fontWeight={500} color={theme.color.white}>Fax: +84 28 3547 2641</Typography>    
                    </Grid>
                    <Grid item xs={12} md={2.4}>
                            <Typography sx={{marginBottom: 2}} variant='h6' fontWeight={600} color={theme.color.white}>{t('Vung Tau Office')}</Typography>
                            <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.white}>8K3 Commercial center, Nguyen Kiem St, Ward 7, Vung Tau City, Viet Nam</Typography>
                            <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.white}>Tel: +84 254 3513 929</Typography>    
                            <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.white}>Fax: +84 254 3513 927</Typography>   
                    </Grid>
                    <Grid item xs={12} md={2.4}>

                        <Typography sx={{marginBottom: 2}} variant='h6' fontWeight={600} color={theme.color.white}>{t('Ha Noi Office')}</Typography>
                        <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.white}>266, Quang Lai Street, Luu Phai,Ngu Hiep Commune, Thanh Tri District, Hanoi</Typography>
                        <Typography sx={{marginBottom: 1}} fontWeight={500} color={theme.color.white}>Tel: +84 938 207 238</Typography>    
                    
                    </Grid>
                    <Grid item xs={12} md={2.4}>
                        <Typography sx={{marginBottom: 2}} variant='h6' fontWeight={600} color={theme.color.white}>{t('Follow us at:')}</Typography>
                        <img style={{marginRight: '10px'}} src={'/assets/facebook-icon.png'} alt='facebook' height={35} />
                        <img style={{marginRight: '10px'}} src={'/assets/linkedin-icon.png'} alt='linkedin' height={35} />
                        <img style={{marginRight: '10px'}} src={'/assets/zalo-icon.png'} alt='zalo' height={35} />
                        <img src={'/assets/mail-icon.png'} alt='mail' height={35} />
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='100%' sx={{padding:theme.spacing(2), pt: theme.spacing(2), fontSize:'14px', color:theme.color.white, display:'flex', justifyContent:'end'}}>
                <Typography fontSize='14px' textAlign={"right"} color={theme.color.white}>{t('Copyright 2024 © AIR TO GAS TECHNOLOGY ASIA CO., LTD')}</Typography>
            </Container>
        </Container>
    )
}