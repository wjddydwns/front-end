import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../page/LandingPage/style/Today.css";

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showProduct=(id)=>{
    navigate(`/product/${id}`)
  }
  return (
    <div className='today_product' onClick={()=>showProduct(item._id)}>
              <img
                src={item.image}
                alt={item.name}
                className="today_product_image"
              />
              <p>{item.name || "상품명 없음"}</p>
            </div>
  )
}

export default ProductCard