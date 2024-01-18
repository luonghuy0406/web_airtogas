import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import { Box } from "@mui/material"; 
import LazyLoad from 'react-lazyload';
import { useTranslation } from "react-i18next";

export function BannerSlide(){
  return (
    <Box sx={{position:"relative"}}> 
      <LazyLoad height={200} offset={100} >
              <Box sx={{ 
                  width: "100%", 
                  height: '500px', 
                  maxHeight:'calc( 100vh - 10px )' , 
                  backgroundImage: `url(/assets/banner.jpeg)`, 
                  backgroundPosition:'center', 
                  backgroundSize:'cover',
                  backgroundRepeat:'no-repeat',
                
                }}
                >
              </Box>
            </LazyLoad>
    </Box>
  );
};
