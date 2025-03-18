import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../features/product/productSlice";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "./ProductDetailPage.css";
import PurchaseBtn from "../../common/Button/PurchaseBtn";

const ProductDetail = () => {
  const { id } = useParams(); // URL에서 상품 ID 가져오기
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [id, dispatch]);

  // 🔹 Redux에서 상품 상세 정보 가져오기
  const { selectedProduct, loading, error } = useSelector((state) => state.products || {});

  // 🔹 선택된 사이즈 및 수량 상태
  const [selectedSize, setSelectedSize] = useState(""); 
  const [quantity, setQuantity] = useState(1);

  // 🔹 장바구니 추가 함수
  const handlePurchase = () => {
    if (!selectedSize) {
      alert("사이즈를 선택해주세요.");
      return;
    }
    alert(`구매 페이지로 이동: ${selectedProduct.name} - 사이즈: ${selectedSize}, 수량: ${quantity}`);
  };
  

  return (
    <Container>
      <div className="product-detail-container">
        {/* 로딩 중 표시 */}
        {loading && <p>로딩 중...</p>}
        {/* 오류 발생 시 표시 */}
        {error && <p style={{ color: "red" }}>오류 발생: {error}</p>}

        {/* 🔹 상품 정보 표시 */}
        {selectedProduct && (
          <Row>
            <Row>
              <Col>
                <div style={{ backgroundColor: "#f4f2fe", height: "56px" }}></div>
              </Col>
            </Row>
            <div className="product-detail">
              <Col>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="product-image"
                />
              </Col>
              <Col>
                <div className="detail_text">
                  <h1>{selectedProduct.name || "상품명 없음"}</h1>
                  <p>
                    <span className="price-text">
                      {selectedProduct.price ? `${selectedProduct.price.toLocaleString()}원` : "가격 정보 없음"}
                    </span>
                  </p>

                  {/* 🔹 사이즈 선택 */}
                  <Form.Group controlId="sizeSelect">
                    <Form.Label>사이즈 선택</Form.Label>
                    <Form.Select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      required
                    >
                      <option value="">사이즈 선택</option>
                      {selectedProduct.stock &&
                        Object.keys(selectedProduct.stock).map((size) => (
                          <option key={size} value={size}>
                            {size} (재고: {selectedProduct.stock[size]})
                          </option>
                        ))}
                    </Form.Select>
                  </Form.Group>

                  {/* 🔹 수량 선택 */}
                  <Form.Group controlId="quantitySelect">
                    <Form.Label>수량 선택</Form.Label>
                    <Form.Control
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                      min="1"
                      max={selectedProduct.stock?.[selectedSize] || 1} // 선택한 사이즈의 재고보다 많은 수량을 선택하지 못하도록 제한
                    />
                  </Form.Group>
                  <p style={{marginTop:"10px"}}>{selectedProduct.description}</p>
                  {/* 🔹 장바구니 버튼 */}
                  <div style={{marginTop:"100px"}}>
                  <PurchaseBtn onClick={handlePurchase} />
                  </div>
                  
                </div>
              </Col>
            </div>
          </Row>
        )}
      </div>
    </Container>
  );
};

export default ProductDetail;
