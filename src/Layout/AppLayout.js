import React, { useEffect } from 'react'
import Navbar from '../common/components/Navbar';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './Layout.style.css'
import Category from '../common/components/Category';
import Loginbar from '../common/components/Loginbar';
import { loginWithToken } from '../features/user/userSlice';
import { useLocation } from 'react-router-dom';
import Sidebar  from '../common/components/Sidebar';
import { Col, Row } from 'react-bootstrap';


const AppLayout = ({children}) => {
  const location = useLocation()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(()=>{
    dispatch(loginWithToken())
  },[])

  return (
    <div>
      {location.pathname.includes("admin") ? (
        <Row className='vh-100'>
          <Col xs={12} md={1} className='sidebar mobile-sidebar'>
          <Sidebar/>
          </Col>
          <Col xs={12} md={9}>
          {children}
          </Col>
        </Row>
      ) : 
      (
        <>
        <div className='Navbar_box'>
        <Loginbar/>
        <Navbar user = {user}/>
        <Category/>
        </div>
        {children}
        </>
   
      )}
    

    </div>
    
);
}


export default AppLayout