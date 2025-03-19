import React from 'react';
import './TotalPrice.css';
import { useNavigate } from 'react-router-dom';

const TotalPrice = ({ totalPrice }) => { // ✅ 소문자로 변경
  const navigate =useNavigate()
  return (
    <div className='bottom_bar'>
      <div className='flex_box'>
      총 {totalPrice.toLocaleString()}원
      <div className='bar_order' onClick={()=>navigate('/order')}>주문하기</div>
      </div>
    
    </div>
  );
};

export default TotalPrice;
