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

const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
  <Route path='' element={<App/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path="/Contact" element={<ContactUs/>}/>
  <Route path ='/Login' element={<Login/>}/>
  <Route path ="/register" element={<Register/>}/>
  <Route path='/Plans' element={<Plans/>}/>

  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
