import React, { useEffect, useState } from 'react'
import PaymentForm from './components/PaymentForm'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './PaymentPage.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cc_expires_format } from '../../utils/number'
import { useSelector } from 'react-redux'
import OrderReceipt from './components/OrderReceipt'
import { getCart } from '../../features/cart/cartSlice'
const PaymentPage = () => {
  const dispatch = useDispatch()
  const {orderNum} = useSelector((state)=>state.order)
  useEffect(() => {
    dispatch(getCart());
}, [dispatch]);
  const [cardValue,setCardValue] = useState({
    cvc:"",
    expiry :"",
    focus:"",
    name:"",
    number:""
  })
  const navigate = useNavigate()
  const [shipInfo,setShipInfo] = useState({
    name : "",
    Contact : "",
    address:"",
    city:"",
    zip:""
  })
  const { cartList, totalPrice } = useSelector((state) => state.cart);

  console.log("📌 현재 장바구니 상태:", cartList);
  console.log("📌 현재 totalPrice:", totalPrice);
    const handleFormChange = (event)=>{
    const{name,value} = event.target
    setShipInfo({...shipInfo,[name]:value})
  }
  const handlePaymentInfoChange = (event)=>{
    const {name,value} = event.target
    if(name==="expiry"){
      let newValue = cc_expires_format(value)
      setCardValue({...cardValue,[name]:newValue})
      return
    }
    setCardValue({...cardValue,[name]:value})
  }

  const handleInputFocus = (event)=>{
    setCardValue({...cardValue, focus:event.target.name})
  }
  return (
    <div style={{backgroundColor:"#f3f5f7"}}>
      <Container>
        <Row>
        <div className='info_box'> 
        <h3 className='mb-2'>배송 주소</h3>
        <div>
          <Form>
            <Row>
              <Form.Group controlId='lastName'>
                <Form.Label>이름</Form.Label>
                <Form.Control
                type='text'
                onChange={handleFormChange}
                name='name'
                required/>
              </Form.Group>
            </Row>
          </Form>
        </div>
        <div>
              <Form.Group controlId='contact'>
                <Form.Label>연락처</Form.Label>
                <Form.Control
                type='text'
                onChange={handleFormChange}
                name='contact'
                required/>
              </Form.Group>
        </div>
        <div>
              <Form.Group controlId='address'>
                <Form.Label>주소</Form.Label>
                <Form.Control
                type='text'
                onChange={handleFormChange}
                name="address"
                required/>
              </Form.Group>
        </div>
        <div>
            <Row>
              <Col>
              <Form.Group controlId='city'>
                <Form.Label>도시</Form.Label>
                <Form.Control
                type='text'
                onChange={handleFormChange}
                name='city'
                required/>
              </Form.Group>
              </Col>
            
            <Col>
            <Form.Group controlId='zip'>
                <Form.Label>우편번호</Form.Label>
                <Form.Control
                type='text'
                onChange={handleFormChange}
                name='zip'
                required/>
              </Form.Group>
              </Col>
             
            </Row>
        </div>
        </div>
        <Col lg={5} style={{ display: "flex", justifyContent: "center" }}> 
          <OrderReceipt cartList={cartList} totalPrice={totalPrice}/>
        </Col>
        <div style={{paddingBottom:"50px"}}>
        <PaymentForm
        cardValue={cardValue}
        handleInputFocus={handleInputFocus}
        handlePaymentInfoChange={handlePaymentInfoChange}/>
        </div>
    
        
        </Row>
        
       
      
       
      </Container>
       
    </div>
  )
}

export default PaymentPage