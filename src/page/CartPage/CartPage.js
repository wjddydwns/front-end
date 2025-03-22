import React, { useEffect } from 'react'
import './Cart.css'
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCart } from '../../features/cart/cartSlice'
import CartProductCard from './components/CartProductCard'

const CartPage = () => {
    const dispatch =  useDispatch()
    const navigate = useNavigate()
    const {cartList,totalPrice} = useSelector((state)=>state.cart)
    const {user} = useSelector((state)=>state.user)
    useEffect(()=>{
        dispatch(getCart())
    },[])
    if(!user){

        navigate("/login")
        
    }

  return (
    <div>
        <div>
            <Col>
            {cartList.length >0 ? (
                cartList.map((item)=>(
                    <CartProductCard item={item} key={item._id} />         
                ))
            ) : (
                <p>장바구니가 비어 있습니다.</p>
              )}
            
            </Col>
        </div>
    </div>

  )
}

export default CartPage