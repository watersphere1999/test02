/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute'
import UnauthorizedRoute from 'base-shell/lib/components/UnauthorizedRoute/UnauthorizedRoute'
import { Route } from 'react-router-dom'
import PersonalPage from 'pages/PersonalPage'
import EditAccount from 'pages/PersonalPage/EditAccount'
import CropAvatar from 'pages/PersonalPage/CropAvatar'

import Home from '../pages/Home/Home'

// const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp/SignUp'))
const PasswordReset = lazy(() => import('../pages/PasswordReset/PasswordReset'))
const About = lazy(() => import('../pages/About'))
//const Home = lazy(() => import('../pages/Home/Home'))
const DialogDemo = lazy(() => import('../pages/DialogDemo/DialogDemo'))
const ToastDemo = lazy(() => import('../pages/ToastDemo/ToastDemo'))
const FilterDemo = lazy(() => import('../pages/FilterDemo'))
const ListPageDemo = lazy(() => import('../pages/ListPageDemo'))
const TabsDemo = lazy(() => import('../pages/TabsDemo'))
const MyAccount = lazy(() => import('../pages/MyAccount/MyAccount'))

const SignIn = lazy(() => import('../pages/HikingFrontend/SignIn'))
const Verify2 = lazy(() => import('../pages/HikingFrontend/Verify2'))

const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'))
const SearchQuick = lazy(() => import('../pages/SearchQuick/SearchQuick'))
const SearchResult = lazy(() => import('../pages/SearchResult/SearchResult'))
const CollectPage = lazy(() => import('../pages/CollectPage/CollectPage'))
const CollectPage2 = lazy(() => import('../pages/CollectPage/CollectPage2'))

const PrivacyPolicy = lazy(()=> import('../pages/PrivacyPolicy/PrivacyPolicy'))
const AboutUs =lazy(()=>import('../pages/AboutUs/AboutUs'))
const ColumnPage = lazy(() => import('../pages/ColumnPage/ColumnPage'))

const Login1_1 = lazy(() => import('../pages/HikingFrontend/Login1_1'))
const Login1_2 = lazy(() => import('../pages/HikingFrontend/Login1_2'))
const Register0_1 = lazy(() => import('../pages/HikingFrontend/Register0_1'))
const ResetPassword = lazy(() => import('../pages/HikingFrontend/ResetPassword'))
const NearByPathway = lazy(()=>import('../pages/HikingFrontend/NearByPathway'));
const Attraction = lazy(()=>import('../pages/HikingFrontend/Attraction'));
const Pathway = lazy(()=>import('../pages/HikingFrontend/Pathway'));
const Announcement = lazy(()=>import('../pages/HikingFrontend/Announcement'));
const Trailhead = lazy(()=>import('../pages/HikingFrontend/Trailhead'));


const routes = [
  <UnauthorizedRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <UnauthorizedRoute path="/signup" redirectTo="/" exact component={SignUp} />,
  <UnauthorizedRoute path="/verify2" redirectTo="/" exact component={Verify2} />,
  <UnauthorizedRoute path="/login1_1" redirectTo="/" exact component={Login1_1} />,
  <UnauthorizedRoute path="/login1_2" redirectTo="/" exact component={Login1_2} />,
  <UnauthorizedRoute path="/register0_1" redirectTo="/" exact component={Register0_1} />,
  <UnauthorizedRoute path="/resetPassword" redirectTo="/" exact component={ResetPassword} />,

  <UnauthorizedRoute
    path="/password_reset"
    redirectTo="/"
    exact
    component={PasswordReset}
  />,
  
  <Route path="/searchPage" exact component={SearchPage} />,
  <Route path="/searchQuick/:id" exact component={SearchQuick} />,
  <Route path="/searchResult" exact component={SearchResult} />,
  <Route path="/personalPage" exact component={PersonalPage} />,
  <Route path="/editAccount" exact component={EditAccount} />,
  <Route path="/cropAvatar" exact component={CropAvatar} />,
  <Route path="/privacyPolicy" exact component={PrivacyPolicy} />,
  <Route path="/aboutUs" exact component={AboutUs} />,
  <Route path="/Home" component={Home} />,
  <Route path="/about" exact component={About} />,
  <Route path="/collectPage" exact component={CollectPage} />,
  <Route path="/collectPage2" exact component={CollectPage2} />,
  <Route path="/columnPage/:id" exact component={ColumnPage} />,
  <Route path="/NearByPathway" exact component={NearByPathway}/>,
  <Route path="/attraction" exact component={Attraction}/>,
  <Route path="/pathway" exact component={Pathway}/>,
  <Route path="/announcement" exact component={Announcement}/>,
  <Route path="/trailhead" exact component={Trailhead}/>,
  <AuthorizedRoute path="/my_account" exact component={MyAccount} />,
  <AuthorizedRoute path="/home" exact component={Home} />,

  <AuthorizedRoute path="/dialog_demo" exact component={DialogDemo} />,
  <AuthorizedRoute path="/toast_demo" exact component={ToastDemo} />,
  <AuthorizedRoute path="/filter_demo" exact component={FilterDemo} />,
  <AuthorizedRoute path="/list_page_demo" exact component={ListPageDemo} />,
  <AuthorizedRoute path="/tabs_demo" exact component={TabsDemo} />,



]

export default routes
