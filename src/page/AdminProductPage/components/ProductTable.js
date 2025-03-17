import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../features/product/productSlice";
import Table from "react-bootstrap/Table";
import "./style/ProductTable.css"; // CSS 파일 추가

const ProductTable = () => {
  const dispatch = useDispatch();
  
  // 🔹 Redux 상태 가져올 때 기본값 설정 (undefined 방지)
  const { products = [], loading, error } = useSelector((state) => state.products || {});

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h3>상품 목록</h3>

      {/* 로딩 상태 표시 */}
      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: "red" }}>오류 발생: {error}</p>}

      {/* 상품 테이블 */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>썸네일</th>
            <th>SKU</th>
            <th>상품명</th>
            <th>카테고리</th>
            <th>가격</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                
                {/* 🔹 썸네일 추가 (기본 이미지 설정) */}
                <td>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-thumbnail" 
                  />
                </td>
                
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{(product.price || 0).toLocaleString()}원</td>
                <td>{product.status === "active" ? "✅ 활성화" : "❌ 비활성화"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">등록된 상품이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
