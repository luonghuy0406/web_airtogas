import { Box, styled } from '@mui/material'
import React from 'react'
import { keyframes } from '@emotion/react'


const pulseBorderAnimation = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;
const LoadingIcon = styled('div')(()=>({
    cursor: 'pointer',
    position: 'absolute',
    transform: 'translateX(-50%) translateY(-50%)',
    boxSizing: 'content-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: '50%',
    lineHeight: 90,
    padding: 0,
    margin: 0,
    
    left: '50%',
    top: '50%',
    zIndex: 9,
    textAlign: 'center',
    background: "#C499F3",
    '&:after': {
      content: '""',
      position: 'absolute',
      zIndex: 1,
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: 80,
      height: 80,
      borderRadius: '50%',
      transition: 'all 200ms',
    },
    '&:before': {
      background: "#C499F3",
      content: '""',
      position: 'absolute',
      zIndex: 0,
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: 80,
      height: 80,
      borderRadius: '50%',
      animation: `${pulseBorderAnimation} 1500ms ease-out infinite`,
    }
}));
export default function LoadingPage() {

  return (
    <Box
      sx={{
        width:"100vw" ,
        height:"100vh"
      }}
    >
      <Box 
        sx={{
            width:"100vw" ,
            height:"100vh" ,
            backgroundColor: "#C499F340",
            position:"fixed",
            zIndex: "9999999",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }}
    >
        <LoadingIcon>
            <img src={'/assets/logo2.png'} alt='AIR TO GAS TECHNOLOGY ASIA CO., LTD logo' height={40} />    
        </LoadingIcon>
    </Box>
    </Box>
  )
}
