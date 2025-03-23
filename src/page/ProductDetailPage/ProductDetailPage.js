import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../features/product/productSlice";
import { Col, Container, Row, Form } from "react-bootstrap";
import "./ProductDetailPage.css";
import PurchaseBtn from "../../common/Button/PurchaseBtn";
import { addToCart } from "../../features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const { selectedProduct, loading, error } = useSelector((state) => state.products || {});
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [id, dispatch]);

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
    dispatch(addToCart({ id, size, qty: quantity }));
    alert("장바구니에 추가 되었습니다.");
  };

  return (
    <Container>
      <div className="product-detail-container">
        {loading && <p>로딩 중...</p>}
        {error && <p style={{ color: "red" }}>오류 발생: {error}</p>}

        {selectedProduct && (
          <Row className="product-detail">
            <Col lg={6} className="mb-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="product-image"
              />
            </Col>

            <Col lg={6}>
              <div className="detail_text">
                <h1>{selectedProduct.name || "상품명 없음"}</h1>
                <p>
                  <span className="price-text">
                    {selectedProduct.price ? `${selectedProduct.price.toLocaleString()}원` : "가격 정보 없음"}
                  </span>
                </p>

                <Form.Group className="mb-3" controlId="sizeSelect">
                  <Form.Label>사이즈 선택</Form.Label>
                  <Form.Select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    required
                  >
                    <option value="">사이즈 선택</option>
                    {selectedProduct.stock &&
                      Object.keys(selectedProduct.stock).map((optionSize) => (
                        <option key={optionSize} value={optionSize}>
                          {optionSize} (재고: {selectedProduct.stock[optionSize]})
                        </option>
                      ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="quantitySelect">
                  <Form.Label>수량 선택</Form.Label>
                  <Form.Control
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    min="1"
                    max={selectedProduct.stock?.[size] || 1}
                  />
                </Form.Group>

                <p className="mt-3">{selectedProduct.description}</p>

                <div className="mt-4">
                  <PurchaseBtn onClick={handlePurchase}>장바구니에 담기</PurchaseBtn>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </Container>
  );
};

export default ProductDetail;
