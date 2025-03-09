import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRotue = ({permissionLevel}) => {
    const user = useSelector((state)=>state.user.user)
    const istAuthenticated =
     user?.level  === permissionLevel || user?.level === "admin"
  return (istAuthenticated ? <Outlet/> : <Navigate to="/login"/>)
}

export default PrivateRotue