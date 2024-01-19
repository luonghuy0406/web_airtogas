import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Banner from '../sections/Banner';
import AboutContent from '../sections/About/AboutContent';

export default function About() {
  const { t } = useTranslation();
  const parentPath = `/${t('about-us')}`;
  
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
          <title> {t("About us")} | {t("AIR TO GAS TECHNOLOGY ASIA CO., LTD")} </title>
      </Helmet>
      <Banner
        name={t("About us")}
        image="/assets/gioithieu.png"
        path={parentPath}
        pages={''}
      />
      <AboutContent />
    </>
  );
}
