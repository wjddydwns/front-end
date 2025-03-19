import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../features/product/productSlice";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "./ProductDetailPage.css";
import PurchaseBtn from "../../common/Button/PurchaseBtn";
import { addToCart } from "../../features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams(); // URL에서 상품 ID 가져오기
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [id, dispatch]);

  // 🔹 Redux에서 상품 상세 정보 가져오기
  const { selectedProduct, loading, error } = useSelector((state) => state.products || {});

  // 🔹 선택된 사이즈 및 수량 상태
  const [size, setSize] = useState(""); 
  const [quantity, setQuantity] = useState(1);

  // 🔹 장바구니 추가 함수
  const handlePurchase = () => {
    if (!size) {
      alert("사이즈를 선택해주세요.");
      return;
    }
    if (!user) {
      alert("로그인 후 이용해주세요.");
      navigate('/login');
      return;
    }
    dispatch(addToCart({ id, size, qty: quantity })); // ✅ 수량도 함께 전달
    alert("장바구니에 추가 되었습니다.")
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
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      required
                    >
                      <option value="">사이즈 선택</option>
                      {selectedProduct.stock &&
                        Object.keys(selectedProduct.stock).map((optionSize) => ( // ✅ 변수명 변경
                          <option key={optionSize} value={optionSize}>
                            {optionSize} (재고: {selectedProduct.stock[optionSize]})
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
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1"
                      max={selectedProduct.stock?.[size] || 1} // ✅ 선택한 사이즈의 재고를 반영
                    />
                  </Form.Group>
                  <p style={{marginTop:"10px"}}>{selectedProduct.description}</p>
                  {/* 🔹 장바구니 버튼 */}
                  <div style={{marginTop:"100px"}}>
                  <PurchaseBtn onClick={handlePurchase}>
                    장바구니에 담기
                  </PurchaseBtn>
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
