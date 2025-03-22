import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PurchaseBtn from '../../../common/Button/PurchaseBtn';
import './CartProductCard.css';
import { useDispatch } from 'react-redux';
import { deleteCartItem } from '../../../features/cart/cartSlice';
import { MdDeleteOutline } from "react-icons/md";

const CartProductCard = ({ item }) => {
  const dispatch = useDispatch();

  // ✅ 주문하기 버튼 클릭 핸들러
  const handlePurchase = () => {
    alert(`${item.productId?.name} ${item.qty}개 주문이 완료되었습니다!`);
  };

  // ✅ 장바구니 삭제 핸들러
  const deleteCart = () => {
    if (!item.productId?._id) {
      alert("삭제할 상품 ID가 없습니다.");
      return;
    }
    dispatch(deleteCartItem(item._id))
      .unwrap()
      .then(() => {
        alert(`${item.productId?.name}이(가) 장바구니에서 삭제되었습니다.`);
      })
      .catch((error) => {
        alert("장바구니 삭제 실패: " + error);
      });
  };

  return (
    <div className='cart-container'>
      <div className='cart-box'>
        <div className='cart-header'>
          {item.productId?.name}
          <MdDeleteOutline 
            className="cart-delete-icon" 
            size={24} 
            onClick={deleteCart} // ✅ 함수 실행 방식 변경
            style={{ cursor: "pointer", color: "red" }}
          />
        </div>
        <Row className='cart-content'>
          <Col className='cart-image-section'>
            <img className='cart-image' src={item.productId?.image || "/default-image.png"} alt={item.productId?.name} />
            <div className='cart-product-info'>
              <span className='cart-product-name'>{item.productId?.name}</span>
              <span className='cart-product-price'>{(item.productId?.price || 0).toLocaleString()}원</span>
            </div>
          </Col>
          <Col className='cart-quantity'>
            <span>주문 수량: {item.qty} 개</span>
          </Col>
          <Col className='cart-price'>
            <span>상품 금액</span>
            <span className='cart-total-price'>{((item.productId?.price || 0) * item.qty).toLocaleString()}원</span>
            <button className='cart-order-btn' onClick={handlePurchase}>주문하기</button>
          </Col>
        </Row>
        <Row className='cart-footer'>
          <Col>
            <div className='cart-summary'>
              <span>총 주문 금액</span>
              <span className='cart-summary-price'>{((item.productId?.price || 0) * item.qty).toLocaleString()}원</span>
            </div>
            <PurchaseBtn onClick={handlePurchase} className='cart-purchase-btn'>
              {`${item.productId?.name} ${item.qty}건 주문하기`}
            </PurchaseBtn>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CartProductCard;
