import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Row, Col, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  updateProduct,
} from "../../../features/product/productSlice";

const initialFormData = {
  name: "",
  sku: "",
  stock: [],
  image: "",
  description: "",
  category: [],
  status: "active",
  price: 0,
};

const ProductModal = ({ mode, showModal, handleClose }) => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.products);

  const [formData, setFormData] = useState({ ...initialFormData });

  useEffect(() => {


    if (showModal) {
      if (mode === "edit" && selectedProduct) {
        const stockArray = Object.entries(selectedProduct.stock || {}).map(
          ([size, quantity]) => ({
            size,
            quantity,
          })
        );

        setFormData({
          ...selectedProduct,
          stock: stockArray,
        });
      } else {
        setFormData({ ...initialFormData });
      }
    }
  }, [showModal, mode, selectedProduct]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCategoryChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormData({ ...formData, category: selectedOptions });
  };

  const handleStockChange = (index, field, value) => {
    const newStock = [...formData.stock];
    newStock[index][field] = field === "quantity" ? Number(value) : value;
    setFormData({ ...formData, stock: newStock });
  };

  const handleAddStock = () => {
    setFormData({
      ...formData,
      stock: [...formData.stock, { size: "", quantity: 0 }],
    });
  };

  const handleRemoveStock = (index) => {
    const newStock = formData.stock.filter((_, i) => i !== index);
    setFormData({ ...formData, stock: newStock });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const stockObject = formData.stock.reduce((acc, item) => {
      if (item.size) acc[item.size] = item.quantity;
      return acc;
    }, {});

    const payload = {
      ...formData,
      stock: stockObject,
    };

    if (mode === "new") {
      dispatch(createProduct(payload));
    } else {
      dispatch(updateProduct({ ...payload, id: selectedProduct._id }));
    }

    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{mode === "edit" ? "상품 수정" : "상품 등록"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* SKU & 상품명 */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="sku">
              <Form.Label>SKU</Form.Label>
              <FormControl
                type="text"
                value={formData.sku}
                onChange={handleChange}
                required
                disabled={mode === "edit"}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="name">
              <Form.Label>상품명</Form.Label>
              <FormControl
                type="text"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          {/* 이미지 URL */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="image">
              <Form.Label>이미지</Form.Label>
              <FormControl
                type="text"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          {/* 상품 설명 */}
          <Row>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>상품 설명</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          {/* 카테고리 & 상태 */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="category">
              <Form.Label>카테고리</Form.Label>
              <Form.Select
                multiple
                value={formData.category}
                onChange={handleCategoryChange}
              >
                <option value="drink">음료</option>
                <option value="food">식품</option>
                <option value="closet">의류</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="status">
              <Form.Label>상품 상태</Form.Label>
              <Form.Select
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="active">활성화</option>
                <option value="disactive">비활성화</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {/* 재고 관리 */}
          <Row>
            <Form.Group className="mb-3" controlId="stock">
              <Form.Label>재고</Form.Label>
              <Button size="sm" onClick={handleAddStock} className="ms-2 mb-2">
                추가 +
              </Button>
              {formData.stock.map((item, index) => (
                <Row key={index} className="align-items-center mb-2">
                  <Col sm={4}>
                    <Form.Select
                      value={item.size}
                      onChange={(e) =>
                        handleStockChange(index, "size", e.target.value)
                      }
                    >
                      <option value="">사이즈 선택</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                    </Form.Select>
                  </Col>
                  <Col sm={4}>
                    <FormControl
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleStockChange(index, "quantity", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={2}>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveStock(index)}
                    >
                      삭제
                    </Button>
                  </Col>
                </Row>
              ))}
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            {mode === "edit" ? "수정" : "등록"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
