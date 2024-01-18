import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Link, useMatch } from 'react-router-dom'

export default function Banner({name, image,path,pages, sub_name}) {
    const theme = useTheme()
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
            <Box
                sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    flexDirection: 'column'
                }}
            >
                <Typography fontSize="52px" mt={"40px"} textAlign={"center"} color={theme.color.white} fontWeight={"700"} className="animate__animated animate__fadeInDown">
                    {name}
                </Typography>
            </Box>
        </Box>
    )
}
