import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PurchaseBar.css'

const Purchasebar = ({ totalPrice }) => { // ✅ 소문자로 변경
  const navigate =useNavigate()
  return (
    <div className='p_bottom_bar'>
      <div className='flex_box'>
      총 {totalPrice.toLocaleString()}원
      <div className='bar_order'>결제하기</div>
      </div>
    
    </div>
  );
};

export default Purchasebar;
