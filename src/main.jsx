import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import email from "../src/EmailMarketting/HomePage.jsx"
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Layout from './Layout.jsx'
import About from "./About.jsx"
import ContactUs from './Contact.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Plans from "./Plans.jsx"
import Seo from "../src/Seo/Seo.jsx"
import Content from "../src/ContentMarketting/Content.jsx"
import Sm from "../src/SocialMediaManagement/SM.jsx"
import Email from '../src/EmailMarketting/Email.jsx'
import Ppc from "../src/PPC/PPC.jsx"
import PpcReport from "../src/PPC/PPCReport.jsx"
import Analytics from "../src/Analytics/Analytics.jsx"
import Mar from "../src/MarkettingAutomation/MarAuto.jsx"
import Camp from "../src/MarkettingAutomation/MarCam.jsx"
import MarRepo from "../src/MarkettingAutomation/MarReport.jsx"
import MarketAuto from "../src/MarkettingAutomation/Automation.jsx"
import Setting from "../src/MarkettingAutomation/Setting.jsx"
import Keyword from "../src/Keyword/KeyWord.jsx"
import KeyRes from "../src/Keyword/KeyResearch.jsx"
import KeyAnal from "../src/Keyword/KeyReport.jsx"
import Dash from "../src/Keyword/KeyAdd.jsx"


const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
  <Route path='' element={<App/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path="/Contact" element={<ContactUs/>}/>
  <Route path ='/Login' element={<Login/>}/>
  <Route path ="/register" element={<Register/>}/>
  <Route path='/Plans' element={<Plans/>}/>
  <Route path ="/Seo" element ={<Seo/>}/>
  <Route path ="/Content" element ={<Content/>}/>
  <Route path ="/Social" element={<Sm/>}/>
  <Route path="/Email" element={<Email/>}/>
  <Route path='/Ppc' element ={<Ppc/>}/>
  <Route path ="/Report" element ={<PpcReport/>}/>
  <Route path ='/Analytics' element={<Analytics/>}/>
  <Route path = "/Marketing" element={<Mar/>}/>
  <Route path = "/camp" element={<Camp/>}/>
  <Route path = "/Report" element={<MarRepo/>}/>
  <Route path ="/auto" element={<MarketAuto/>}/>
  <Route path = "/Setting" element ={<Setting/>}/>
  <Route path ='/keyword' element={<Keyword/>}/>
  <Route path ='/Res' element={<KeyRes/>}/>
  <Route path ="/Analy" element={<KeyAnal/>}/>
  <Route path ="/Dash" element={<Dash/>}/>


  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
