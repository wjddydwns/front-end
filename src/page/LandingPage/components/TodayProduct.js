import React, { useEffect } from "react";
import "../style/Today.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../features/product/productSlice";
import { Col, Container } from "react-bootstrap";
import ProductCard from "../../../common/product/ProductCard";

const TodayProduct = () => {
  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector((state) => state.products || {});

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container>
<div className="TodayProduct_box">
  <div className="today_title">
    <p>오늘의 행사</p>&nbsp;놓치지 마세요
  </div>

  <div className="today_product_list">
    {products.length > 0 ? (
      products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))
    ) : (
      <div className="text-align-center empty-bag">
        등록된 상품이 없습니다.
      </div>
    )}
  </div>
</div>
</Container>
  );
};

export default TodayProduct;
