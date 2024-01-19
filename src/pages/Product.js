import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { AccordionSummary, Box, Button, Container, Grid, Typography, styled, useTheme } from '@mui/material';
import Banner from '../sections/Banner';
import { Link, useParams } from 'react-router-dom';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Product() {
  const { t } = useTranslation();
  const theme = useTheme()
  const { productSlug, productSub } = useParams();
  // window.scrollTo(0, 0);
  const pages = [
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
            {name: t('Calibration Gas Standards for Petrochemicals and Refinery'),child:[]},
            {name: t('Calibration Gas Standards For Environment Monitoring System'),child:[]},
            {name: t('Calibration Gas Blends / Standards For Oil & Gas Exploration'),child:[]},
            {name: t('Natural Gas Standards'),child:[]},
            {name: t('Automotive Exhaust Test Gas Mixtures'),child:[]},
            {name: t('CDQC Gas Blends'),child:[]},
            {name: t('Sukphur Gas Blends'),child:[]},
          ]
        },
        {
          name: t('GAS HANDLING EQUIPMENTS'), 
          child:[
            {name: t('Double Stage Pressure Regulator - SS316/Brass'),child:[]},
            {name: t('Single Stage Pressure Regulator – SS316/ Brass'),child:[]},
            {name: t('High Pressure Piston Type Pressure Regulators'),child:[]},
          ]
        },
        {
          name: t('POST HARVEST TECHNOLOGIES'), 
          child:[
            {name: t('Controlled Atomosphere Systems'),child:[]},
            {name: t('Palletized CA'),child:[]},
            {name: t('Modified Atmosphere'),child:[]},
            {name: t('Memberane Based N2 Generator'),child:[]},
            {name: t('CO2 Scrubbers'),child:[]},
            {name: t('CA Accessories'),child:[]},
          ]
        },
        {name: t('SUPERCRITICAL FLUID EXTRACTION SYSTEM'), path:'/supercritical-fluid-extraction-system',child:[]},
        {name: t('OTHER'),child:[]},
      ]
    },
  ]
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Helmet>
          <title> {t("Products")} | {t("AIR TO GAS TECHNOLOGY ASIA CO., LTD")} </title>
      </Helmet>
      <Banner
        name={t("Products")}
        image="/assets/gioithieu.png"
        path={''}
        pages={''}
      />
      <Container maxWidth='lg' sx={{marginTop:2, marginBottom:4}}>
        <Grid container spacing={2} sx={{marginTop:2}}>
          <Grid item xs={3}>
            <Box>

              {
                pages.map((page, index)=>{
                  return <MenuSideBar key={'menu'+index} page={page} expanded={expanded} handleChange={handleChange} root={true}/>
                })
              }
            </Box>
          </Grid>
          <Grid item xs={9}>

          </Grid>
        </Grid>
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

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
const RenderSubMenu = ({n,child}) => {
  const [expanded, setExpanded] = useState(false);
  const name = (n).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  if (child?.length > 0) {
    return (
      <Box>
        {child.map((p) => (
          <MenuSideBar key={p.name} page={p} path={name} expanded={expanded} handleChange={handleChange}/>
        ))}
      </Box>
    );
  }
  return null;
};
const MenuSideBar = ({ page, path='',expanded, handleChange, root=false }) => {
  

  const name = (page.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
  const theme = useTheme()
  

  return (
    <Accordion expanded={expanded === `pannel-${name}`} onChange={handleChange(`pannel-${name}`)}>
      <AccordionSummary className={(!root&&expanded === `pannel-${name}`) ? 'menu-child-active':''} expandIcon={page.child?.length > 0 ? <ExpandMoreIcon /> : null} sx={{borderRadius:'2px',backgroundColor: root&& expanded === `pannel-${name}` ? theme.color.red : theme.color.white}}>
        <Link to={`/products/${name}/${path}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography  
                sx={{
                  fontWeight: 700, 
                  color: root&&expanded === `pannel-${name}` ? theme.color.white :theme.color.black,
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
        
        <RenderSubMenu n={page.name} child={page.child}/>
      </AccordionDetails>
    </Accordion>
    
  );
};