import { Navigate, useRoutes } from 'react-router-dom'
import Layout from 'layouts'
import RequireAuth from './requireAuth'
import LoginPage from 'pages/login'
import ProjectPage from 'pages/project'
import Home from 'pages/home'
import Portfolio from 'pages/portfolio'
import InteriorPartner from 'pages/interior-partner'
import Affiliate from 'pages/affiliate'
import InteriorInformation from 'pages/interior-information'
import SignupPage from 'pages/signup'
import FindEmailPage from 'pages/findEmail'
import FindPasswordPage from 'pages/findPassword'
import PartnerRegisterPage from 'pages/partnerRegister'
import PortfolioDetailPage from 'pages/portfolioDetail'
import LandingPage from 'pages/landingPage'

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
              element: <ProjectPage />
            }
          ]
        },
        {
          path: '/',
          element:  <Navigate to="/landing-page" replace  />
        },
        {
          path: '/*',
          element:  <Navigate to="/landing-page" replace />
        },
        {
          path: '/landing-page',
          element: <LandingPage />
        },
        {
          path: '/portfolio',
          element: <Portfolio />
        },
        {
          path: '/interior-partner',
          element: <InteriorPartner />
        },
        {
          path: '/affiliate',
          element: <Affiliate />
        },
        {
          path: '/interior-information',
          element: <InteriorInformation />
        },
        {
          path: '/partner-register',
          element: <PartnerRegisterPage />
        },
        {
          path: '/portfolio/:id',
          element: <PortfolioDetailPage />
        }
      ]
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/signup',
      element: <SignupPage />
    },
    {
      path: '/find-email',
      element: <FindEmailPage />
    },
    {
      path: '/find-password',
      element: <FindPasswordPage />
    }
  ])
  return routes
}

export default Routes
