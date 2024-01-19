import React, { Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MainLayout from "./layouts/main/MainLayout";
import LoadingPage from "./pages/LoadingPage";
import CaseStudy from "./sections/CaseStudy/CaseStudy";
import TechnicalReSearch from "./sections/CaseStudy/TechnicalResearch";

// Lazy load the pages
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Product = React.lazy(() => import("./pages/Product"));

export default function Router() {
  const { t } = useTranslation();

  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Home  />
            </Suspense>
          ),
        },
        {
          path: t("about-us"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <About />
            </Suspense>
          ),
        },
        
        {
          path: t("applications"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services />
            </Suspense>
          ),
        },
        {
          path: `${t("applications")}/${t("aquaculture")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services page={t("aquaculture")} />
            </Suspense>
          ),
        },
        {
          path: `${t("applications")}/${t("medical")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services page={t("medical")} />
            </Suspense>
          ),
        },
        {
          path: `${t("applications")}/${t("wastewater-treatment")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services page={t("wastewater-treatment")} />
            </Suspense>
          ),
        },
        {
          path: `${t("applications")}/${t("water-treatment")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services page={t("water-treatment")} />
            </Suspense>
          ),
        },
        {
          path: `${t("applications")}/${t("mining")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services page={t("mining")} />
            </Suspense>
          ),
        },
        {
          path: `${t("applications")}/${t("pulp-and-paper")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services page={t("pulp-and-paper")} />
            </Suspense>
          ),
        },

        {
          path: t("contact"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "/products",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Product/>
            </Suspense>
          ),
        },
        {
          path: "/products/:productSlug",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Product/>
            </Suspense>
          ),
        },
        {
          path: t("case-study"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <CaseStudy/>
            </Suspense>
          ),
        },
        {
          path: `${t("case-study")}/${t("case-study")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <CaseStudy/>
            </Suspense>
          ),
        },
        {
          path: `${t("case-study")}/${t("technical-research")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <TechnicalReSearch/>
            </Suspense>
          ),
        },

        // Handle 404 and unknown routes
        { path: "404", element: <Navigate to="/" /> },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return <Suspense fallback={<LoadingPage />}>{routes}</Suspense>;
}
