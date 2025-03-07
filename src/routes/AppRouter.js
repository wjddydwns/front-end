import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mainpage from'../page/LandingPage'
import Regist from '../page/RegistPage/Regist'
const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element = {<Mainpage/>}/>
        <Route path='/regist' element = {<Regist/>}/>
    </Routes>
  )
}

export default AppRouter