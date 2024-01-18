import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../sections/Banner'
import { Helmet } from 'react-helmet-async';
import ServicesContent from '../sections/Services/ServicesContent'

export default function Services({page}) {
  const {t} = useTranslation()
  const pages = {
    'a': {name: t('Aquaculture'), path:'',content: '<p>Demand for fish as a source of protein will grow continuously with the world’s population. Whether the demand is met in&nbsp;<a href="https://osioxygen.com/netpen-solutions"><u>open-sea net pens</u></a>&nbsp;or on land with&nbsp;<a href="https://osioxygen.com/ras-tech-solutions"><u>recirculating aquaculture system (RAS) technology</u></a>, OSI’s oxygen concentrators are a perfect fit for all aquaculture operations. OSI understands oxygen supplementation is required to attain high-density stocking and achieve maximum profitability.&nbsp;&nbsp;</p><ul><li>Oxygen injections increase the growth rate and size of yields.&nbsp;</li><li>Steady supplies decrease fish stress and disease.&nbsp;</li><li>Increase profitability of aquaculture farms.&nbsp;</li><li>Aid in managing external and environmental factors by making more predictable waters.&nbsp;</li><li>Limit algae blooms, nutrient discharge, and improve water quality.</li></ul>'},
    'medical':{name: t('Medical'), path:`/${t('medical')}`,content: '<p>Maintain a secure and constant source of pure oxygen, produced directly at the hospital or care site, available when needed. The global demand for oxygen concentrators in the medical field is growing rapidly with the recent outbreak of the Coronavirus and is expected to keep growing. Oxygen concentrators are a highly reliable and economical solution for medical applications. OSI’s oxygen concentrators are safe, less expensive, and easy to maintain.&nbsp;&nbsp;</p><ul><li>Concentrators are safer and more convenient than tanks or cylinders.&nbsp;</li><li>Eliminate the expense of purchasing, receiving and monitoring oxygen supply.&nbsp;</li><li>Reduce errors and overall labor associated with tank systems by using remote monitoring.</li></ul>'},
    'wastewater-treatment':{name: t('Wastewater Treatment'), path:`/${t('wastewater-treatment')}`,content: '<p>Maintaining a continuous supply of pure oxygen is essential to the control of dissolved oxygen levels and the elimination of nitrogen and phosphorus in wastewater treatment facilities. OSI’s oxygen concentrators, automatically&nbsp;<i>turn-down</i>&nbsp;as load decreases, reducing overall energy consumption.&nbsp;</p><ul><li>Keep microorganisms alive to break down organic mass.&nbsp;</li><li>Reduce biological process times with injection of oxygen rather than air.&nbsp;</li><li>Low maintenance solution deters corrosion damage.&nbsp;</li></ul><p>Save money by eliminating delivery costs and wastewater charges.</p>'},
    'water-treatment':{name: t('Water Treatment'), path:`/${t('water-treatment')}`,content: '<p>The use of oxygen concentrators in the water treatment process helps increase the overall concentration of pure oxygen in the water, expelling impurities and contaminants. OSI’s oxygen concentrators are portable and adaptable to your needs. Implementing our oxygen concentrators allows facilities to meet production demands without compromising on space or power consumption.&nbsp;&nbsp;</p><ul><li>Water oxygenation is one of the best ways to help expel impurities and contaminants from water.&nbsp;</li><li>Save on energy costs and lower emissions.&nbsp;&nbsp;</li><li>Stimulate aerobic bacterial growth on biochemicals and pollutants.&nbsp;</li><li>Eliminate odor complaints and associated fines.&nbsp;</li><li>Prevent the need to strip large amounts of nitrogen.&nbsp;</li></ul>'},
    'mining':{name: t('Mining'), path:`/${t('mining')}`,content: '<p>Dissolved oxygen is a critical component of the mining process. Injecting oxygen is often more economical than other process options. OSI’s oxygen concentrators are a perfect solution for mining and mineral processing, and operations can scale up with additional OSI units.&nbsp;&nbsp;</p><ul><li>Injected oxygen can be more economical and can improve overall efficiency.&nbsp;</li><li>Increase levels of dissolved oxygen in the leaching process.&nbsp;</li><li>Reduce use of cyanide in the leaching process and in wastewater discharge.&nbsp;&nbsp;&nbsp;</li><li>Increase gold and silver recovery within your mining operation.&nbsp;&nbsp;</li><li>On-site oxygen is less costly and more convenient than liquid oxygen purchases.</li></ul>'},
    'pulp-and-paper':{name: t('Pulp and Paper'), path:`/${t('pulp-and-paper')}`,content: '<p>On-site oxygen production is essential for the pulp and paper industry. As mining operations scale, multiple OSI units can be incorporated to fit production needs, enabling efficiency and overall production quality.&nbsp;&nbsp;</p><ul><li>Speed the delignification of pulp, alkali extraction and sodium sulfide oxidation.&nbsp;</li><li>Increase lime kiln capacity.&nbsp;</li><li>Reduce consumption of expensive bleaching chemicals.&nbsp;</li><li>Stimulate aerobic bacteria growth for degradation of organic matter in wastewater.</li></ul>'},
  }
  window.scrollTo(0, 0);
  return (
    <>
    <Helmet>
        <title> {t("Applications")} | {t("AIR TO GAS TECHNOLOGY ASIA CO., LTD")} </title>
     </Helmet>
      <Banner 
        name={pages[page]?.name || pages['a'].name} 
        image={'/assets/gioithieu.png'} 
        path={`/${t('applications')}`} 
      />
      <ServicesContent content={pages[page]?.content || pages['a'].content}/>
    </>
  )
}
