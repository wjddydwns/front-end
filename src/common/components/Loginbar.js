import React from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../features/user/userSlice';
import '../style/common.style.css'

const Loginbar = () => {
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.user)
    const onClickRegistPage =()=>{
        navigate('/regist')
    }
    const onClickMypage =()=>{
      
    }
    const onclickLoguout =()=>{
      dispatch(logoutUser())

    }
  return (
    
  
    <Container className="d-flex justify-content-end">
      {user  && user.level  === "admin" && (
        <Link to="/admin/product" className="link-area">
          adminPage
          </Link>
      )}

      {user ? (<div style={{
            display:"flex", 
            justifyContent:"space-between",
            alignItems:"center",
            width: "120px",
            height:"35px",
            cursor:"pointer"}}>
        <div onClick={onClickMypage}>{user.name}님</div>
        
        <div onClick={onclickLoguout}>로그아웃</div>
        </div>
        ) 
        :
        (
         <div style={{
          display:"flex", 
          justifyContent:"space-between",
          alignItems:"center",
          width: "120px",
          height:"50px",
          cursor:"pointer"}}>
      <div onClick={onClickRegistPage}>회원가입</div>
      
      <div onClick={()=>{navigate('/login')}}>로그인</div>
      </div>)}
        
  </Container>
  )
}

export default Loginbar