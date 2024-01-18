import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Banner from '../sections/Banner';
import AboutContent from '../sections/About/AboutContent';

export default function About() {
  const { t } = useTranslation();
  const parentPath = `/${t('about-us')}`;
  const pages = [
    {name: t('Về Hepco'), path:'',child:[]},
    {name: t('Chức năng - Giấy phép'), path:`/${t('chucnang')}`,child:[]},
    {name: t('Sơ đồ tổ chức'), path:`/${t('sodo')}`,child:[]},
    {name: t('Thành tựu đạt được'), path:`/${t('thanhtuu')}`,child:[]},
    {name: t('Hồ sơ năng lực'), path:`/${t('nangluc')}`,child:[]},
    {name: t('Thư viện ảnh'), path:`/${t('thuvien')}`,child:[]}
  ];
  
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
        pages={pages}
      />
      <AboutContent />
    </>
  );
}
