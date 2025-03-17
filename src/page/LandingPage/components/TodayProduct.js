import React, { useEffect } from "react";
import "../style/Today.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../features/product/productSlice";

const TodayProduct = () => {
  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector((state) => state.products || {});

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="TodayProduct_box">
      <div className="today_title">
        <p>오늘의 행사</p> &nbsp;놓치지 마세요
      </div>

      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: "red" }}>오류 발생: {error}</p>}

      <div style={{ display: "flex", gap: "20px", overflowX: "auto" }}>
        {products.length > 0 ? (
          products.map((product) => (
            <div className="today_product" key={product._id}>
              <img
                src={product.image || "/images/default_image.jpg"}
                alt={product.name}
                className="today_product_image"
              />
              <p>{product.name || "상품명 없음"}</p>
            </div>
          ))
        ) : (
          <p>현재 진행 중인 행사가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default TodayProduct;
