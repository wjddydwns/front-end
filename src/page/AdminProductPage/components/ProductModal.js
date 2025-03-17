import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Row, Col, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createProduct, getProducts } from "../../../features/product/productSlice"; // Redux 액션 import

const ProductModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  // 초기 상태
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState([]);
  const [status, setStatus] = useState("active");

  // 재고 항목 추가
  const handleAddStock = () => {
    setStock([...stock, { size: "", quantity: "" }]);
  };

  // 재고 항목 수정
  const handleStockChange = (index, field, value) => {
    const updatedStock = [...stock];
    updatedStock[index][field] = value;
    setStock(updatedStock);
  };

  // 재고 항목 삭제
  const handleRemoveStock = (index) => {
    setStock(stock.filter((_, i) => i !== index));
  };

  // 상품 등록 핸들러
  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 방지

    // 재고 객체 변환 { "S": 10, "M": 5 } 형태로 변환
    const formattedStock = stock.reduce((acc, item) => {
      if (item.size && item.quantity) {
        acc[item.size] = parseInt(item.quantity, 10);
      }
      return acc;
    }, {});

    const productData = {
      sku,
      name,
      image,
      category,
      description,
      price: Number(price), // 숫자로 변환
      stock: formattedStock,
      status,
    };

    console.log("Product Data:", productData);

    dispatch(createProduct(productData))
      .unwrap()
      .then(() => {
        alert("상품이 등록되었습니다.");
        handleClose(); // 모달 닫기
        // 입력 필드 초기화
        setSku("");
        setName("");
        setImage("");
        setCategory("");
        setDescription("");
        setPrice("");
        setStock([]);
        setStatus("active");
      })
      .catch((error) => {
        alert("상품 등록 실패: " + error);
      });
  };


  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="example-custom-modal-styling-title"
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          상품 등록
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="form-container">
          {/* SKU & 상품명 */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="sku">
              <Form.Label>Sku</Form.Label>
              <FormControl
                type="text"
                placeholder="SKU를 입력하세요."
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="name">
              <Form.Label>상품명</Form.Label>
              <FormControl
                type="text"
                placeholder="상품명을 입력하세요."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          {/* 가격 입력 */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="price">
              <Form.Label>가격</Form.Label>
              <FormControl
                type="number"
                placeholder="가격을 입력하세요."
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          {/* 이미지 입력 */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="image">
              <Form.Label>이미지</Form.Label>
              <FormControl
                type="text"
                placeholder="이미지url을 입력하세요."
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          {/* 상품 설명 */}
          <Row>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>상품 설명</Form.Label>
              <Form.Control
                type="text"
                placeholder="상품을 설명해주세요"
                as="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={3}
              />
            </Form.Group>
          </Row>

          {/* 카테고리 선택 */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="category">
              <Form.Label>카테고리</Form.Label>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>카테고리 선택</option>
                <option value="drink">음료 (Drink)</option>
                <option value="food">식품 (Food)</option>
                <option value="closet">의류 (Closet)</option>
              </Form.Select>
            </Form.Group>

            {/* 상태 선택 (Active / Disactive) */}
            <Form.Group as={Col} controlId="status">
              <Form.Label>상품 상태</Form.Label>
              <Form.Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="active">활성화 (Active)</option>
                <option value="disactive">비활성화 (Disactive)</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {/* 재고 추가 기능 */}
          <Row>
            <Form.Group className="mb-3" controlId="stock">
              <Form.Label className="mb-1">재고</Form.Label>
              <Button size="sm" onClick={handleAddStock}>
                추가 +
              </Button>
              <div className="mt-2">
                {stock.map((item, index) => (
                  <Row key={index} className="align-items-center mt-2">
                    <Col sm={4}>
                      <Form.Select
                        value={item.size}
                        onChange={(e) => handleStockChange(index, "size", e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          사이즈 선택
                        </option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </Form.Select>
                    </Col>
                    <Col sm={4}>
                      <FormControl
                        type="number"
                        placeholder="수량 입력"
                        min="0"
                        value={item.quantity}
                        onChange={(e) => handleStockChange(index, "quantity", e.target.value)}
                        required
                      />
                    </Col>
                    <Col sm={2}>
                      <Button variant="danger" size="sm" onClick={() => handleRemoveStock(index)}>
                        삭제
                      </Button>
                    </Col>
                  </Row>
                ))}
              </div>
            </Form.Group>
          </Row>

          {/* 등록 버튼 */}
          <Button variant="primary" type="submit">
            등록
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
