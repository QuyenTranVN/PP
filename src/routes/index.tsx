/** @format */

import Layout from 'layouts'
import Affiliate from 'pages/affiliate'
import FindEmailPage from 'pages/findEmail'
import FindPasswordPage from 'pages/findPassword'
import Home from 'pages/home'
import InteriorInformation from 'pages/interior-information'
import InteriorPartner from 'pages/interior-partner'
import LandingPage from 'pages/landingPage'
import LoginPage from 'pages/login'
import PartnerRegisterPage from 'pages/partnerRegister'
import Portfolio from 'pages/portfolio'
import PortfolioDetailPage from 'pages/portfolioDetail'
import ProjectPage from 'pages/project'
import SignupPage from 'pages/signup'
import { Navigate, useRoutes } from 'react-router-dom'
import RequireAuth from './requireAuth'

const Routes = () => {
  const routes = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          element: <RequireAuth />,
          children: [
            {
              path: '/issues',
              element: <ProjectPage />,
            },
          ],
        },
        {
          path: '/',
          element: <Navigate to='/landing-page' replace />,
        },
        {
          path: '/*',
          element: <Navigate to='/landing-page' replace />,
        },
        {
          path: '/landing-page',
          element: <LandingPage />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/portfolio',
          element: <Portfolio />,
        },
        {
          path: '/interior-partner',
          element: <InteriorPartner />,
        },
        {
          path: '/affiliate',
          element: <Affiliate />,
        },
        {
          path: '/interior-information',
          element: <InteriorInformation />,
        },
        {
          path: '/partner-register',
          element: <PartnerRegisterPage />,
        },
        {
          path: '/portfolio/:id',
          element: <PortfolioDetailPage />,
        },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/signup',
      element: <SignupPage />,
    },
    {
      path: '/find-email',
      element: <FindEmailPage />,
    },
    {
      path: '/find-password',
      element: <FindPasswordPage />,
    },
  ])
  return routes
}

export default Routes
