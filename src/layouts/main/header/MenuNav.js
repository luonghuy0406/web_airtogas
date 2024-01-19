import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useMatch } from 'react-router-dom';

export default function MenuNav({page, color}) {
    const {t} = useTranslation()
    const theme = useTheme()
    
    const normalizedTitle = '/'+(page.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')   
    const match = useMatch(normalizedTitle)
    const matchChild = useMatch(normalizedTitle+'/:page')
    return (
    <Box
        className='menu-item'
        sx={{minWidth:'100px'}}
        position={"relative"} 
    >   
        <Link to={normalizedTitle} style={{textDecoration:'none'}}>
            <Typography
                key={normalizedTitle}
                sx={{
                    p:1,
                    display: "block",
                    fontSize: {xs: '13px', md:'14px', lg:'16px'},
                    borderRadius: "unset",
                    transition: "all 0.5s",
                    textTransform: 'uppercase',
                    textAlign:"center",
                    color:  (Boolean(match) || (Boolean(matchChild) && matchChild?.pattern.path !='/:page') ? ((theme) => theme.color.blue) : ((theme) => (color ? '#000': theme.color.white))),
                    "&:hover": {
                        color:  (theme) => theme.color.blue,
                        cursor:"pointer"
                    },
                }}
            >
                {page.name}
            </Typography>
        </Link>

        <ChildMenu page={page} path={normalizedTitle}/>

        
    </Box>
  )
}

const ChildMenu = ({page,className='sub-menu',path})=>{
    if(page.child?.length == 0) return <></>
    
    return (
        <ul 
            className={className}
        >
            {
                page.child?.map((child)=>{
                    const childPath = path+'/'+(child.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')   
                    return (
                        <Link key={`${childPath}`} to={`${childPath}`}>
                            <li style={{position:'relative'}}>
                                {child.name}
                                <ChildMenu page={child} className='sub-menu-child' path={childPath}/>
                            </li>
                        </Link>
                    )
                })
            }
        </ul>
    )
}