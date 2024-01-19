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
                  // height: '550px', 
                
                }}
                >
                  <video
                    id="the-video"
                    // title
                    style={{width:"100%" }}
                    loop
                    muted
                    playsInline
                    autoPlay
                    data-src={'/assets/CLIP.mp4'}
                    data-ftype="video/mp4"
                    data-mtype="video/mp4"
                  >
                    <source
                      src={'/assets/CLIP.mp4'}
                      type="video/mp4"
                      media="all"
                    />
                  </video>
              </Box>
            </LazyLoad>
    </Box>
  );
};
