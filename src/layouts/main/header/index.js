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
    height: '150px', // Set height for breakpoint `xs`
    '&::before': {
      borderBottom: `150px solid ${sticky ? theme.color.main : theme.color.white}`,
    }
  },
  [theme.breakpoints.up('md')]: {
    height: '150px', // Set height for breakpoint `md` and above
    '&::before': {
      borderBottom: `150px solid ${sticky ? theme.color.main : theme.color.white}`,
    }
  },
}));

export default function Header() {
    const {t} = useTranslation()
    const [openRight, setOpenRight] = useState(false);
    const toggleDrawer = (open) => (event) => {setOpenRight(open);};
    const theme = useTheme();
    const pages = [
      {name: t('Home'),child:[]},
      {
        name: t('About us'), 
        child:[
        ]
      },
      {
        name: t('Applications'), 
        child:[
          {name: t('Aquaculture'),child:[]},
          {name: t('Medical'), child:[]},
          {name: t('Wastewater Treatment'), child:[]},
          {name: t('Mining'), child:[]},
          {name: t('Pulp and Paper'), child:[]},
        ]
      },
      {
        name: t('Products'), 
        child:[
          {
            name: t('OXYGEN SOLUTIONS'), 
            path:``,
            child:[
              {name: t('Single-bed Oxygen Concentrators'),child:[]},
              {name: t('Dual-bed Oxygen Concentrators'), child:[]},
              {name: t('Ozone Generator'),child:[]},
              {name: t('Other'), child:[]}
            ]
          },
          {
            name: t('CHEMICAL SCIENCE LABORATORIES'), 
            child:[
              {
                name: t('Calibration Gas'), 
                child:[
                  // {name: t('Calibration Gas Standards for Petrochemicals and Refinery'),child:[]},
                  // {name: t('Calibration Gas Standards For Environment Monitoring System'),child:[]},
                  // {name: t('Calibration Gas Blends / Standards For Oil & Gas Exploration'),child:[]},
                  // {name: t('Natural Gas Standards'),child:[]},
                  // {name: t('Automotive Exhaust Test Gas Mixtures'),child:[]},
                  // {name: t('CDQC Gas Blends'),child:[]},
                  // {name: t('Sukphur Gas Blends'),child:[]},
                ]
              },
              {
                name: t('GAS HANDLING EQUIPMENTS'), 
                child:[
                  // {name: t('Double Stage Pressure Regulator - SS316/Brass'),child:[]},
                  // {name: t('Single Stage Pressure Regulator – SS316/ Brass'),child:[]},
                  // {name: t('High Pressure Piston Type Pressure Regulators'),child:[]},
                ]
              },
              {
                name: t('POST HARVEST TECHNOLOGIES'), 
                child:[
                  // {name: t('Controlled Atomosphere Systems'),child:[]},
                  // {name: t('Palletized CA'),child:[]},
                  // {name: t('Modified Atmosphere'),child:[]},
                  // {name: t('Memberane Based N2 Generator'),child:[]},
                  // {name: t('CO2 Scrubbers'),child:[]},
                  // {name: t('CA Accessories'),child:[]},
                ]
              },
              {name: t('SUPERCRITICAL FLUID EXTRACTION SYSTEM'), path:'/supercritical-fluid-extraction-system',child:[]},
              {name: t('OTHER'),child:[]},
            ]
          },
        ]
      },
      {
        name: t('Case study'), 
        child:[
          {name: t('Case study'),child:[]},
          {name: t('Technical Research'), child:[]}
        ]
      },
      {name: t('Contact'), child:[]}
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
                  height: { xs: '150px',sm: '150px', md:'150px'},
                  backgroundColor: '#C499F3',
                  boxShadow: '0 0 20px -10px rgba(0,0,0,.8)',
                  // position:'fixed',
                  // left: '0',
                  // right:'0'
                }}
              >
                <Stack
                  spacing={2}
                  px={2}
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <Link to={'/'}>
                      <img src={'/assets/logo2.png'} alt='AIR TO GAS TECHNOLOGY ASIA CO., LTD logo' height={100} />
                  </Link>
                </Stack>
                <Stack
                  spacing={1}
                  px={2}
                  alignItems="center"
                  justifyContent="end"
                  direction="row"
                  sx={{display: { xs: 'none',sm: 'none', md:'none', lg: 'flex' }, flexGrow: 1}}
                >
                  {
                    pages.map((page)=>{
                      const normalizedTitle = '/'+(page.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')   
                      return <MenuNav key={normalizedTitle} page={page}/>
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
                                <Typography sx={{fontSize:'16px',fontFamily:(theme)=>theme.typography.MuktaMahee}} color={theme.color.red}>+84 938207238 (Mr.Kham)</Typography>
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
          <CloseIcon sx={{color:(theme)=>theme.color.blue}}/>
        </IconButton>
        <Box sx={{padding: theme.spacing(2)}}>
          {
          pages.map((page) => {
            const normalizedTitle = '/'+(page.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')   
            return (
              <Accordion key={page.name+"nav"} expanded={expanded === `pannel${page.name}`} onChange={handleChange(`pannel${page.name}`)}>
                  <AccordionSummary sx={{padding:'10px 0',color: expanded === `pannel${page.name}` ? theme.color.blue : theme.color.black}}  expandIcon={page.child?.length > 0 ? <ExpandMoreIcon /> : <></>} aria-controls={`pannel${page.name}d-content`} id={`pannel${page.name}d-header`}>
                     <Link onClick={toggleDrawer(false)} to={normalizedTitle} style={{ textDecoration:"none", color: 'black'}}>
                      <Typography  
                          sx={{
                            fontWeight: 700,
                            color: theme.color.black,
                            '&:hover': {
                              color: theme.color.blue,
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
                          const pagePath = '/'+(page.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')   
                          const childPath = '/'+(child.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')   
                          return (
                          <Link onClick={toggleDrawer(false)} key={`${pagePath}${childPath}`} to={`${pagePath}${childPath}`} style={{ textDecoration:"none", color: 'black', padding:'10px'}}>
                            <Typography  
                                sx={{
                                  fontWeight: 700,
                                  color: theme.color.black,
                                  '&:hover': {
                                    color: theme.color.blue,
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
