import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../common/components/Sidebar';
import Navbar from '../common/components/Navbar';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './Layout.style.css'
import Category from '../common/components/Category';
import Loginbar from '../common/components/Loginbar';


const AppLayout = ({children}) => {
  // const location  = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  return (
    <div>
    <div className='Navbar_box'>
        <Loginbar/>
        <Navbar user = {user}/>
        <Category/>
        
    </div>
    {children}
    </div>
);
}


export default AppLayout