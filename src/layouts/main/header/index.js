import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import {
  AccordionSummary,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { LanguagePopover } from './LanguagePopover'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import MenuNav from './MenuNav';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const InvoiceBox = styled('div')(({ theme, sticky }) => ({
  backgroundColor: theme.palette.main,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(6),
  width:"100%",
  '&::before': {
    content: '""',
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100%',
    borderLeft: '50px solid transparent',
    zIndex: '1',
    transition: 'all .5s ease',
    width:'inherit'
  },
  [theme.breakpoints.down('md')]: {
    height: '60px', // Set height for breakpoint `xs`
    '&::before': {
      borderBottom: `60px solid ${sticky ? theme.color.main : theme.color.white}`,
    }
  },
  [theme.breakpoints.up('md')]: {
    height: '70px', // Set height for breakpoint `md` and above
    '&::before': {
      borderBottom: `70px solid ${sticky ? theme.color.main : theme.color.white}`,
    }
  },
}));

export default function Header() {
    const {t} = useTranslation()
    const [openRight, setOpenRight] = useState(false);
    const toggleDrawer = (open) => (event) => {setOpenRight(open);};
    const theme = useTheme();
    const refSticky = useRef()
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 190) {
          refSticky.current.style.display = "block";
          refSticky.current.style.zIndex = "2";
        }else{
          refSticky.current.style.display = "none";
        }
      };
    
      $(window).on("scroll", handleScroll);
    
      return () => {
        $(window).off("scroll", handleScroll);
      };
    }, []);
    const pages = [
      {name: t('Home'), path:'',child:[]},
      {
        name: t('About us'), 
        path:`/${t('about-us')}`,
        child:[
        ]
      },
      {
        name: t('Applications'), 
        path:`/${t('applications')}`,
        child:[
          {name: t('Aquaculture'), path:'',child:[]},
          {name: t('Medical'), path:`/${t('medical')}`,child:[]},
          {name: t('Wastewater Treatment'), path:`/${t('wastewater-treatment')}`,child:[]},
          {name: t('Water Treatment'), path:`/${t('water-treatment')}`,child:[]},
          {name: t('Mining'), path:`/${t('mining')}`,child:[]},
          {name: t('Pulp and Paper'), path:`/${t('pulp-and-paper')}`,child:[]},
        ]
      },
      {
        name: t('Products'), 
        path:`/${t('products')}`,
        child:[
          {name: t('Product 1'), path:``,child:[]},
          {name: t('Product 2'), path:`/${t('product-2')}`,child:[]},
        ]
      },
      {
        name: t('Case study'), 
        path:`/${t('case-study')}`,
        child:[
          {name: t('Case study'), path:``,child:[]},
          {name: t('Technical Research'), path:`/${t('technical-research')}`,child:[]}
        ]
      },
      {
        name: t('Contact us'), 
        path:`/${t('contact-us')}`,
        child:[
        ]
    }
    ]
    return (
      <>
      <Box
          className="animate__animated animate__fadeInDown"
          component="header"
          sx={{
            backdropFilter: 'blur(6px)',
            backgroundColor: (theme)=>theme.color.white,
            position: 'relative',
            width: {lg: '100%'},
            zIndex: '1',
          }}
        >
        {/* header below */}
        <Box
          sx={{
            width: '100%'
          }}
        >
          <Container maxWidth={'100%'} sx={{padding: { xs: '0 !important', sm:'0 !important'}}}>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{
                  height: { xs: '60px',sm: '60px', md:'70px'},
                  backgroundColor: '#C499F3',
                  boxShadow: '0 0 20px -10px rgba(0,0,0,.8)',
                  position:'fixed',
                  left: '0',
                  right:'0'
                }}
              >
                <Stack
                  spacing={2}
                  px={2}
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <Link to={'/'}>
                      <img src={'/assets/logo2.png'} alt='AIR TO GAS TECHNOLOGY ASIA CO., LTD logo' height={55} />
                  </Link>
                </Stack>
                <Stack
                  spacing={1}
                  px={2}
                  alignItems="center"
                  direction="row"
                  sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }}}
                >
                  {
                    pages.map((page)=>{
                      return <MenuNav key={page.path} page={page}/>
                    })
                  }
                </Stack>
                <Stack
                  spacing={1}
                  px={2}
                  justifyContent="flex-end"
                  flexGrow={1}
                  direction="row"
                  sx={{display: { xs: 'flex',sm: 'flex', md:'flex', lg: 'none' }}}
                >
                  <MenuMobile toggleDrawer={toggleDrawer} openRight={openRight} pages={pages}/>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2}
                  sx={{position:'relative'}}
                >
                  <InvoiceBox theme={theme}>
                      <Box sx={{zIndex:'1',position:'relative'}}>
                        <Grid container alignItems={"center"}>
                          <Grid item xs={0} lg={3}  sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }, marginBottom:'-5px'}}>
                          <img src={'/assets/icons/ic_phone.svg'} alt='icon phone' width={35} />
                          </Grid>
                          <Grid item xs={0} lg={9}  sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }}} container>
                              <Grid item xs={12}>
                                <Typography fontWeight={'bold'} sx={{fontSize:'16px'}} color={theme.color.red}>{t('Hotline')}</Typography>
                              </Grid>
                              <Grid item xs={12} >
                                <Typography sx={{fontSize:'16px',fontFamily:(theme)=>theme.typography.MuktaMahee}} color={theme.color.red}>+84 938207238</Typography>
                              </Grid>
                          </Grid>
                          {/* <Grid item xs={12} lg={3}> 
                            <Box sx={{display:'flex', alignItems:'center', justifyContent:'end'}}>
                              <LanguagePopover/>
                            </Box>
                          </Grid> */}
                        </Grid>
                      </Box>
                  </InvoiceBox>
                </Stack>
              </Stack>
          </Container>
        </Box>
      </Box>

      {/* header sticky */}
      <Container 
        ref={refSticky} 
        maxWidth={'100%'} 
        sx={{padding:'0 !important',position:'fixed',top:'0', display:'none'}} 
        className='menu-sticky sticky'
      >
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{
              height: { xs: '60px',sm: '60px', md:'70px'},
              backgroundColor: theme.color.white,
              borderRadius: 0
            }}
          >
            <Stack
              spacing={2}
              px={2}
              alignItems="center"
              justifyContent={"center"}
            >
              <Link to={'/'}>
                  <img src={'/assets/logo1.png'} alt='AIR TO GAS TECHNOLOGY ASIA CO., LTD logo' height={60} />
              </Link>
            </Stack>
            <Stack
              spacing={1}
              px={2}
              alignItems="center"
              direction="row"
              sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }}}
            >
              {
                pages.map((page)=>{
                  return <MenuNav key={page.path} page={page} color="black"/>
                })
              }
            </Stack>
            <Stack
              spacing={1}
              px={2}
              justifyContent="flex-end"
              flexGrow={1}
              direction="row"
              sx={{display: { xs: 'flex',sm: 'flex', md:'flex', lg: 'none' }}}
            >
              <MenuMobile toggleDrawer={toggleDrawer} openRight={openRight} pages={pages} sticky={true}/>
            </Stack>

            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{position:'relative'}}
            >
              <InvoiceBox theme={theme} sticky={true}>
                  <Box sx={{zIndex:'1',position:'relative'}}>
                    <Grid container alignItems={"center"}>
                      <Grid item xs={0} lg={3}  sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }, marginBottom:'-5px'}}>
                        <img src={'/assets/icons/ic_phone_white.svg'} alt='icon phone' width={35} />
                      </Grid>
                      <Grid item xs={0} lg={9}  sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }}} container>
                          <Grid item xs={12}>
                            <Typography fontWeight={'bold'} sx={{fontSize:'16px'}} color={theme.color.white}>{t('Hotline')}</Typography>
                          </Grid>
                          <Grid item xs={12} >
                            <Typography sx={{fontSize:'16px',fontFamily:(theme)=>theme.typography.MuktaMahee}} color={theme.color.white}>+84 938207238</Typography>
                          </Grid>
                      </Grid>
                      {/* <Grid item xs={12} lg={3}> 
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'end'}}>
                          <LanguagePopover/>
                        </Box>
                      </Grid> */}
                    </Grid>
                  </Box>
              </InvoiceBox>
            </Stack>
          </Stack>
      </Container>
    </>
    );
}



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
      border: `none`
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "0px 16px"
}));

function MenuMobile({toggleDrawer,openRight,pages,sticky}){
  const theme = useTheme()
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
    <IconButton
      size="large"
      onClick={toggleDrawer(true)}
      sx={{ p: 0 ,display: { xs: "block",md: "block", lg: "none" ,color:(theme)=>(sticky? theme.color.main : theme.color.white)}}}
    >
      <MenuIcon sx={{color:(theme)=>(sticky? theme.color.main : theme.color.white)}}/>
    </IconButton>
    <Drawer
      anchor={'right'}
      open={openRight}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 350 }}
        role="presentation"
        // onClick={toggleDrawer(false)}
      >
        <IconButton
          size="large"
          onClick={toggleDrawer(false)}
        >
          <CloseIcon sx={{color:(theme)=>theme.color.red}}/>
        </IconButton>
        <Box sx={{padding: theme.spacing(2)}}>
          {
          pages.map((page) => {
            return (
              <Accordion key={page.name+"nav"} expanded={expanded === `pannel${page.name}`} onChange={handleChange(`pannel${page.name}`)}>
                  <AccordionSummary sx={{padding:'10px 0',color: expanded === `pannel${page.name}` ? theme.color.red : theme.color.black}}  expandIcon={page.child?.length > 0 ? <ExpandMoreIcon /> : <></>} aria-controls={`pannel${page.name}d-content`} id={`pannel${page.name}d-header`}>
                     <Link onClick={toggleDrawer(false)} to={page.path} style={{ textDecoration:"none", color: 'black'}}>
                      <Typography  
                          sx={{
                            fontWeight: 700,
                            color: theme.color.black,
                            '&:hover': {
                              color: theme.color.red,
                            },
                          }}
                          >
                            {page.name} 
                          </Typography>
                      </Link>
                  </AccordionSummary>
                  <AccordionDetails>
                      {
                        page.child.map((child)=>{
                          return (
                          <Link onClick={toggleDrawer(false)} key={`${page.path}${child.path}`} to={`${page.path}${child.path}`} style={{ textDecoration:"none", color: 'black', padding:'10px'}}>
                            <Typography  
                                sx={{
                                  fontWeight: 700,
                                  color: theme.color.black,
                                  '&:hover': {
                                    color: theme.color.red,
                                  },
                                }}
                                >
                                  {child.name} 
                              </Typography>
                          </Link>
                          )
                        })
                      }
                  </AccordionDetails>
              </Accordion>
          )})
          }
        </Box>
      </Box>
    </Drawer>
    </>
  )
}