import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useNavigate } from 'react-router-dom';

const Loginbar = () => {
    let navigate =useNavigate()
    const onClickRegistPage =()=>{
        navigate('/regist')
    }

  return (
    <Container className="d-flex justify-content-end">
        <div style={{
            display:"flex", 
            justifyContent:"space-between",
            alignItems:"center",
            width: "120px",
            height:"50px",
            cursor:"pointer"}}>
        <div onClick={onClickRegistPage}>회원가입</div>
        
        <div>로그인</div>
        </div>
  </Container>
  )
}

export default Loginbar