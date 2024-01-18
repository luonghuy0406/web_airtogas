import React, { Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MainLayout from "./layouts/main/MainLayout";
import LoadingPage from "./pages/LoadingPage";

// Lazy load the pages
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Post = React.lazy(() => import("./pages/Post"));

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
          path: t("contact-us"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Contact />
            </Suspense>
          ),
        },

        {
          path: t("products"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"products"} page={"0"} />
            </Suspense>
          ),
        },
        {
          path: `${t("products")}/${t("chemical-science-laboratories")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"products"} page={"1"} />
            </Suspense>
          ),
        },
        {
          path: t("case-study"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"case-study"} page={"0"} />
            </Suspense>
          ),
        },
        {
          path: `${t("case-study")}/${t("technical-research")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"case-study"} page={"5"} />
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
