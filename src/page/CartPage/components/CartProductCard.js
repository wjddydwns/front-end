import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PurchaseBtn from '../../../common/Button/PurchaseBtn';

const CartProductCard = ({ item }) => {
  const handlePurchase = () => {
    alert(`${item.productId?.name} ${item.qty}건 주문이 완료되었습니다.`);
  };

  return (
    <div className='bg'>
      <div className='cart_box'>
        <div>
          <div className='header'>{item.productId?.name}</div>
          <Row style={{ borderBottom: "1px solid black" }}>
            <Col style={{ height: "180px", display: "flex", justifyContent: "center", alignItems: "center", borderRight: "1px solid black" }}>
              <div style={{ display: "flex", width: "70%", justifyContent: "space-around", alignItems: "center" }}>
                <img
                  style={{ width: "100px", borderRadius: "12px" }}
                  src={item.productId?.image}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: "bold" }}>{item.productId?.name}</span>
                  <span style={{ fontWeight: "bold" }}>{item.productId?.price.toLocaleString()}원</span>
                </div>
              </div>
            </Col>

            <Col style={{ height: "180px", display: "flex", justifyContent: "center", alignItems: "center", borderRight: "1px solid black" }}>
              상품 주문 수량 : {item.qty} 개
            </Col>
            <Col style={{ height: "180px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                <span>상품 금액</span>
                <span> {(item.productId?.price * item.qty).toLocaleString()}원</span> {/* ✅ 수량 반영된 가격 */}
                <div className='cart_order'>주문하기</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ display: "flex", height: "60px", justifyContent: "space-around", alignItems: "center", padding: "10px" }}>
                <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                  주문 금액 <span style={{ fontWeight: "bold", color: "#03A94D", fontSize: "24px" }}>
                    {(item.productId?.price * item.qty).toLocaleString()}원
                  </span>
                </span>
                <PurchaseBtn onClick={handlePurchase}> {/* ✅ 주문하기 클릭 이벤트 추가 */}
                  {`${item.productId?.name} ${item.qty}건 주문하기`}
                </PurchaseBtn>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
