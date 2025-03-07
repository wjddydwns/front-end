import React from 'react'
import '../style/common.style.css'
const Category = () => {
    const menuList = [
        "브랜드",
        "여성",
        "남성",
        "잡화/슈즈",
        "베스트",
        "골프"
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