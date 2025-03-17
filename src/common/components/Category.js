import React from 'react'
import '../style/common.style.css'
const Category = () => {
    const menuList = [
        "홈",
        "오늘행사",
        "FOR YOU",
        "베스트",
        "N배송",
        "패션뷰티"
    ]
  return (
    <div className='category'>
     {menuList.map((menu,index)=>(
        <button key={index}>{menu}</button>
     ))}
    </div>
  )
}

export default Category