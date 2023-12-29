import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function HazardousWaste({id}) {
    const theme = useTheme()
    const {t,i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/service/detail/${id}`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setData(data)
        })
        .catch(error => console.log('error', error));
    },[])

    const [dataChild,setDataChild] = useState(null)
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/sharedtable/father/17`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setDataChild(data)
        })
        .catch(error => console.log('error', error));
    },[])
    return (
        <>
         <Container 
            maxWidth={'100%'} 
            sx={{
                padding:0,
                backgroundImage: 'url(/assets/images/bgg1.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
                backgroundSize:'30%'
            }}
        >
            <Container 
                maxWidth={'xl'} 
                sx={{
                    marginTop:theme.spacing(10),
                    // marginBottom:theme.spacing(10),
                }} 
            >
                <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{data["name_"+currentLang] || data.name}</Typography>
                <Grid container spacing={3} sx={{marginBottom:theme.spacing(4)}}>
                    <Grid item xs={0} md={6}>
                        <Box
                            sx={{
                                width:'100%',
                                height:'100%',
                                minHeight:{xs: 0, md: '400px'},
                                backgroundImage: `url(${process.env.REACT_APP_HOST}/read_image/${data?.image})`,
                                backgroundPosition:'70%',
                                backgroundSize:'cover',
                                backgroundRepeat: 'no-repeat',
                                borderRadius:'10px'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box sx={{padding: theme.spacing(2), backgroundColor: '#ffffff7d',fontWeight: '500'}} className='ck-content' dangerouslySetInnerHTML={{__html:data["content_"+currentLang] || data.content}}/>
                    </Grid>
                </Grid>
            </Container>
        </Container>
        <Container 
            maxWidth={'100%'} 
            sx={{
                backgroundImage: `url(/assets/images/bg2.png)`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: 'left bottom'
            }}
        >
            <Container 
                maxWidth={'xl'} 
                sx={{
                    marginTop:theme.spacing(4),
                    marginBottom:theme.spacing(10),
                }} 
            >
                <Grid container spacing={3} sx={{marginBottom:theme.spacing(4)}}>
                
                        {
                            dataChild?.map((dataC, index)=>{
                                if(index <=1){
                                    return(
                                        <Grid key={'nguyhai'+index} item xs={12} md={6}>
                                            <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                                <Box 
                                                    sx={{
                                                        flexGrow:1,
                                                        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                                                        margin: theme.spacing(2),
                                                        marginLeft: 0, 
                                                        borderRadius: '20px 0', 
                                                        backgroundColor:index%2 ==0 ? theme.color.green1 : theme.color.red, 
                                                        width: 'fit-content'
                                                    }}>
                                                    <Typography variant="h6" color={theme.color.white} fontWeight={700}>{dataC["name_"+currentLang] || dataC.name}</Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width:'100%',
                                                        minHeight:{xs: '250px', md: '400px'},
                                                        backgroundImage: `url(${process.env.REACT_APP_HOST}/read_image/${dataC.image})`,
                                                        backgroundPosition:'center',
                                                        backgroundSize:'cover',
                                                        backgroundRepeat: 'no-repeat',
                                                        borderRadius:'0 20px'
                                                    }}
                                                />
                                            </Box>
                                        </Grid>
                                    )
                                }
                                return(
                                    <Grid item xs={12} md={6}>
                                        <Box sx={{padding: theme.spacing(2), display: 'flex', flexDirection: 'column', height: '100%'}}> 
                                            <Box sx={{flexGrow:1,padding: theme.spacing(2),marginLeft: 0, borderRadius: '20px 20px 0 0', backgroundColor:index==3? theme.color.green1: theme.color.red, width: '100%'}}>
                                                <Typography variant="h6" color={theme.color.white} fontWeight={700}>{dataC["name_"+currentLang] || dataC.name}</Typography>
                                            </Box>
                                            <Grid container sx={{backgroundColor: index==3? '#5CBC5C': '#ffa154', padding: theme.spacing(1), borderRadius: '0px 0px 20px 20px'}}>
                                                <Grid item xs={12} sx={{padding: theme.spacing(2)}}>
                                                    <Box
                                                        sx={{
                                                            width:'100%',
                                                            height: 'auto',
                                                            aspectRatio: '1',
                                                            backgroundImage: `url(${process.env.REACT_APP_HOST}/read_image/${dataC.image})`,
                                                            backgroundPosition:'center',
                                                            backgroundSize:'cover',
                                                            backgroundRepeat: 'no-repeat',
                                                            borderRadius:'10px'
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }
                </Grid>
            </Container>
        </Container>
        </>
    )
}
