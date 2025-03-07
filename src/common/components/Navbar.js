import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { FaShippingFast } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";


const MyNavbar = () => {
  return (
    <Container>
    <Navbar expand="lg" className="px-4 py-2 ">
      <Navbar.Brand href="/" className='fw-bold fs-4'>LOGO</Navbar.Brand>
      <Form className="d-flex mx-auto w-50">
          <Form.Control
            type="search"
            placeholder="검색어를 입력해주세요"
            className="me-2 border-purple"
            aria-label="Search"
          />
        </Form>
      <div style={{width:"150px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <FaShippingFast size={24}/>
        <FaRegHeart size={24}/>
        <FaCartPlus size={24}/>
      </div>
  </Navbar>
  </Container>
);
}


export default MyNavbar