import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useMatch } from 'react-router-dom'

export default function Banner({name, image,path,pages}) {
    const theme = useTheme()
    const {t} = useTranslation()
    const current = useMatch(`${path}/:page`)
    const home = useMatch(path)
    return (
        <Box
        className="animate__animated animate__fadeInDown"
        sx={{ 
            width: "100%", 
            height: name.length > 0 ? {xs: '250px', sm: '300px', md:'400px'} : '200px', 
            backgroundImage: `url(${image})`, 
            backgroundPosition:'center', 
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            position: 'relative'
        }}
        >
            <Typography fontSize="52px" mt={"40px"} color={theme.color.white} fontWeight={"700"} className="animate__animated animate__fadeInDown">
                {name}
            </Typography>
            {
                pages.length > 0 &&
                <Box
                    sx = {{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translate(-50%,50%)',
                        width: 'max-content',
                        height: 'auto',
                        minHeight:'60px',
                        maxWidth:'100%',
                        background:theme.color.white,
                        borderRadius: '10px',
                        boxShadow: '0 7px 7px 0 rgba(48,51,50,.09)',
                        display: {xs: 'none', md:'block'}
                    }}
                >
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                        alignItems={"center"}
                        sx={{height:'100%', padding:'10px 30px',minHeight:'60px'}}
                    >
                        {
                            pages.map((page)=>{
                                return(
                                    <Stack key={page.path}>
                                        <Link to={`${path}${page.path}`}>
                                            <Typography textAlign={"center"} fontWeight={700} color={(home && !home.params.page && page.path == '') ||`/${current?.params?.page}` === page.path ? theme.color.red : theme.color.black}>
                                                {page.name}
                                            </Typography>
                                        </Link>
                                    </Stack>
                                )
                            })
                        }
                            
                    </Stack>
                </Box>
            }
        </Box>
    )
}
