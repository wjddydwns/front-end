import React from 'react'
import './Recipt.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { currencyFormat } from '../../../utils/number'
const OrderReceipt = ({cartList,totalPrice}) => {
    const location = useLocation()
    const navigate = useNavigate()

  return (
<div className="receipt">
  <p className="shop-name">STORE</p>
  <p className="info">

  </p>

  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Qty</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
    {cartList.map((item)=>(
            <tr>
                <td>{item.productId?.name}</td>
                <td>{item?.qty}</td>
                <td>{item.productId?.price.toLocaleString()}</td>
            </tr>
        ))}

    </tbody>
  </table>

  <div className="total">
    <p>Total:</p>
    <p>₩ {totalPrice.toLocaleString()}</p>
  </div>

  <p className="thanks">가능한 결제 수단 귀하가 결제 단계에 도달할 때까지 가격 및 배송료는 확인되지 않습니다.<br/>30일의 반품 가능 기간, 반품 수수료 및 미수취시 발생하는 추가 배송 요금 읽어보기 반품 및 환불 불가</p>
</div>

  )
}

export default OrderReceipt