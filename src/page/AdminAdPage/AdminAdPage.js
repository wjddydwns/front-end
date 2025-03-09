import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { createAd } from '../../features/ad/adSlice';

const AdminAdPage = () => {
    const [ad_path,setAd] = useState('')
    const dispatch = useDispatch()
    const handleAdPath = (event) =>{
        event.preventDefault()
        dispatch(createAd({ad_path})) //dispatch 만들어야함
    }
      return (
    <div>
        
        <div>
        <h1>광고 관리 페이지</h1>
        <Form onSubmit={handleAdPath}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>이미지 주소 URL</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="이미지 주소값을 입력하세요"
            onChange={(event)=>setAd(event.target.value)} />
        </Form.Group>
        <Button type='submit'>전송</Button>
        </Form>
        </div>
        <div></div>
    </div>
  )
}

export default AdminAdPage