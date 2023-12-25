import React, { useEffect, useRef, useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { formatDateTime } from '../../functions';

library.add(fas, faFontAwesome, faPlay)

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingLeft: 0,
  paddingRight: 0,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  width: '100%',
  paddingBottom: theme.spacing(2),
  textAlign: 'center',
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(4),
}));

const FeaturedNewstWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.color.white,
  borderRadius: '10px',
  height:'100%',
  boxShadow:'0 5px 20px rgba(34,34,34,.1)'
}));

const FeaturedNewstImage = styled(Box)(({ theme, image }) => ({
  background: `url("${image}")`,
  height: 'auto',
  aspectRatio: 1.6,
  width: '100%',
  borderRadius: '10px 10px 0 0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative'
}));
const BlogButton = styled(Box)(({ theme }) => ({
  a: {
    color: theme.color.black,
    background: 0,
    border: 'none',
    borderRadius: '25px',
    paddingRight: '25px',
    lineHeight: '30px',
    display: 'inline-block',
    transition: 'all .4s ease-in-out 0s',
    position: 'relative',
    fontSize: '16px',
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover': {
      color: theme.color.red,
      '.arrow-news': {
        color: theme.color.red,
        transform: 'translateX(20%)',
      },
    },
  },
  '.arrow-news': {
    position: 'absolute',
    top: 0,
    right: 0,
    transition: 'transform 0.5s ease',
    lineHeight: '1.5rem',
  },
}));

export const News = () => {
  const theme = useTheme()
  
  const {t, i18n} = useTranslation()
  const currentLang = i18n.language == 'en' ? 'en' : ''
  const [news, setNews] = useState([])
  const categories = {
    '0': {name: t('Tất cả tin'), value:'0'},
    '1': {name: t('Hoạt động công ty'), value:'1'},
    '2': {name: t('Đảng Đoàn thể'), value:'2'},
    '3': {name: t('Pháp luật môi trường'), value:'3'},
    '4': {name: t('Tin tức khác'), value:'4'},
}
  const newsRef = useRef(null)
  const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0,
      deplay: 1000
  });
  useEffect(() => {
      if(inView){
          if (newsRef.current) {
              newsRef.current.classList.add('animate__animated','animate__fadeInDown');
          }
      }
  }, [inView]);
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_HOST}/post/highlight`)
    .then(response => response.text())
    .then(result => {
        const data = JSON.parse(result).data
        setNews(data.slice(0,3))
    })
    .catch(error => console.log('error', error));
  },[])
  
  return (
    <Container maxWidth='100%' sx={{py:theme.spacing(5), mb:theme.spacing(5),px:'0 !important'}}>
      <Box sx={{
          py:theme.spacing(3),
          backgroundImage:"url(https://html.themexriver.com/it-firm/images/background/pattern-14.png) !important",
          backgroundSize:"cover",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          position:"relative"
          }}>
            <StyledContainer>
              <Grid container >
                    <StyledTypography ref={ref} variant="h4" color={theme.color.black} fontWeight="bold" pb={theme.spacing(5)}>
                        {t('Tin tức nổi bật')}
                    </StyledTypography>
                    <StyledGrid container ref={newsRef} spacing={2} sx={{justifyContent:'center', padding: theme.spacing(2)}}>
                    {news.map((data) => {
                      const normalizedTitle = (data["name_"+currentLang] || data.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                      return(
                          <Grid key={data.id_post} item xs={12} sm={6} md={4}>
                              <Link to={`/${t('tintuc')}/${normalizedTitle}.${data.id_post}`}>
                                  <FeaturedNewstWrap>
                                      <LazyLoad height={200} offset={100}>
                                      <FeaturedNewstImage image={`${process.env.REACT_APP_HOST}/read_image/${data.image}`}>
                                          <Box
                                              sx={{
                                                  px: theme.spacing(4),
                                                  py:theme.spacing(1),
                                                  background: theme.color.green1,
                                                  position: 'absolute',
                                                  borderRadius: '4px',
                                                  textAlign:'center',
                                                  bottom: '0',
                                                  left: '50%',
                                                  transform: 'translate(-50%, 20px)'
                                              }}
                                          >
                                          <Typography 
                                              className='news-date' 
                                              fontFamily={theme.typography.MuktaMahee}
                                              color={theme.color.white}
                                              fontWeight={700}
                                          >{formatDateTime(data.cre_date,'%d-%m-%Y')}</Typography>
                                          </Box>
                                      </FeaturedNewstImage>
                                      </LazyLoad>
                                      <Box
                                          sx={{padding:theme.spacing(4)}}
                                      >
                                      <Grid container spacing={1}>
                                          <Grid item xs={12} pb={1}>
                                              <Typography variant="h6" color={theme.color.red} fontWeight={700}>{data["name_"+currentLang] || data.name}</Typography>
                                          </Grid>
                                          <Grid item xs={12}>
                                              <Box sx={{display:'flex'}}>
                                              <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>{data.author}</Typography>
                                              <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>-</Typography>
                                              <Typography color={theme.color.gray1} fontWeight={700} >{categories?.[data.type_id]?.name}</Typography>
                                              </Box>
                                          </Grid>
                                          <Grid item xs={12}>
                                              <Box className='ck-content' dangerouslySetInnerHTML={{__html:data["content_"+currentLang] || data.content}} sx={{overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}/>
                                          </Grid>
                                          <Grid item>
                                              <BlogButton>
                                              <Link to={`/${t('tintuc')}/${normalizedTitle}.${data.id_post}`}>
                                                  <Typography fontWeight={700} lineHeight={'1.5rem'}>{t("Read more")}</Typography>
                                                  <Typography sx={{display:'inline', pl: '5px'}} className='arrow-news'><FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /></Typography>
                                              </Link>
                                              </BlogButton>
                                          </Grid>
                                      </Grid>
                                      </Box>
                                  </FeaturedNewstWrap>
                              </Link>
                          </Grid>
                      )
                    })}
                    </StyledGrid>
              </Grid>
            </StyledContainer>
        </Box>
    </Container>
)}
