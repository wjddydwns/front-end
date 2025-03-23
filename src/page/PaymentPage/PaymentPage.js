import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCart } from '../../features/cart/cartSlice';
import { cc_expires_format } from '../../utils/number';

import PaymentForm from './components/PaymentForm';
import OrderReceipt from './components/OrderReceipt';

import './PaymentPage.css';

const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartList, totalPrice } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { orderNum } = useSelector((state) => state.order);

  const [cardValue, setCardValue] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const [shipInfo, setShipInfo] = useState({
    name: '',
    contact: '',
    address: '',
    city: '',
    zip: '',
  });

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setShipInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    if (name === 'expiry') {
      setCardValue((prev) => ({ ...prev, [name]: cc_expires_format(value) }));
    } else {
      setCardValue((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInputFocus = (e) => {
    setCardValue((prev) => ({ ...prev, focus: e.target.name }));
  };

  return (
    <div style={{ backgroundColor: '#f3f5f7', paddingTop: '32px', paddingBottom: '60px' }}>
      <Container>
        <Row className="gx-5 gy-4">
          {/* 왼쪽: 배송 주소 + 카드 결제 */}
          <Col lg={8}>
            <div className="info_box mb-4">
              <h4 className="mb-3">배송 주소</h4>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>이름</Form.Label>
                  <Form.Control type="text" name="name" onChange={handleFormChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contact">
                  <Form.Label>연락처</Form.Label>
                  <Form.Control type="text" name="contact" onChange={handleFormChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>주소</Form.Label>
                  <Form.Control type="text" name="address" onChange={handleFormChange} required />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="city">
                      <Form.Label>도시</Form.Label>
                      <Form.Control type="text" name="city" onChange={handleFormChange} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="zip">
                      <Form.Label>우편번호</Form.Label>
                      <Form.Control type="text" name="zip" onChange={handleFormChange} required />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>

            {/* 카드 정보 */}
            <div className="card_info_box">
              <PaymentForm
                cardValue={cardValue}
                handleInputFocus={handleInputFocus}
                handlePaymentInfoChange={handlePaymentInfoChange}
              />
            </div>
          </Col>

          {/* 오른쪽: 주문 요약 */}
          <Col lg={4}>
            <OrderReceipt cartList={cartList} totalPrice={totalPrice} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentPage;
