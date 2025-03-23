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
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../common/components/Footer';
import TotalPrice from '../page/CartPage/components/TotalPrice';
import Purchasebar from '../page/PaymentPage/components/PurchaseBar';


const AppLayout = ({children}) => {
  const location = useLocation()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const {totalPrice} = useSelector((state)=>state.cart)

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
        <Footer/>
        </>
   
      )}
    {location.pathname.includes("cart") ? (
    <TotalPrice totalPrice={totalPrice} />
  ) : null}
      {location.pathname.includes("order") ? (
    <Purchasebar totalPrice={totalPrice} />
  ) : null}

    

    </div>
    
);
}


export default AppLayout