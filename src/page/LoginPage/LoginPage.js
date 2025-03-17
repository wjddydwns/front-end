import React, { useEffect, useState } from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginWithEmail } from '../../features/user/userSlice'
import './LoginPage.css'

const LoginPage = () => {
const dispatch  = useDispatch()
const navigate  = useNavigate()
// Email => X email => O
const [email,setEmail]= useState("")
const [password,setPassword] = useState("")

// 유저 상태를 가져와야지? name:user 라는곳에서 가져온다. user,loginError를
const {user,loginError} = useSelector((state)=>state.user)


useEffect(()=>{},[])

const handleLoginWithEmail = (event) =>{
    event.preventDefault()
    dispatch(loginWithEmail({email,password}))
}
//유저 있으면 메인페이지로 보내기 !
if(user){
    navigate('/')
}
  return (
    <Container className='w-50 login_box' >
        <h1>로그인</h1>
        {loginError && (
            <div className='error-message'>
                <Alert variant='danger'>{loginError}</Alert>
            </div>
        )}
        <Form onSubmit={handleLoginWithEmail}>
            <Form.Group className='mb-3 d-flex'>
                <Form.Label className='w-50'>이메일</Form.Label>
                <Form.Control
                type='email'
                required
                onChange={(event)=>setEmail(event.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3 d-flex'>
                <Form.Label className='w-50'>비밀번호</Form.Label>
                <Form.Control
                type='password'
                required
                onChange={(event)=>setPassword(event.target.value)}/>
            </Form.Group>
            <Button variant="danger" type="submit">
                        로그인
            </Button>
        </Form>
    </Container>
  )
}

export default LoginPage