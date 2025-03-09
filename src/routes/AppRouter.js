import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mainpage from'../page/LandingPage/LandingPage'
import Regist from '../page/RegistPage/Regist'
import LoginPage from '../page/LoginPage/LoginPage'
import PrivateRotue from './PrivateRotue'
import AdminProductPage from '../page/AdminProductPage/AdminProductPage'
import AdminadPage from '../page/AdminAdPage/AdminAdPage'
const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element = {<Mainpage/>}/>
        <Route path='/regist' element = {<Regist/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        <Route element={<PrivateRotue permissionLevel="admin"/>}>
          <Route path="/admin/product" element={<AdminProductPage/>}/>
          <Route path="/admin/ad" element={<AdminadPage/>}/>
        </Route>

        
    </Routes>
  )
}

export default AppRouter