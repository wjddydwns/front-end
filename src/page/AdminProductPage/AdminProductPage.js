import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ProductModal from "./components/ProductModal";
import ProductTable from "./components/ProductTable";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../features/product/productSlice";
import { useSelector } from "react-redux";

const AdminProductPage = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("new");
  const { products} = useSelector((state) => state.products);
  const handleCloseModal = () => {
    dispatch(setSelectedProduct(null)); // 선택된 상품 초기화
    setShowModal(false);
  };

  const openEditForm = (product) => {
    setMode("edit");
    dispatch(setSelectedProduct(product));
    setShowModal(true);
  };

  const openCreateForm = () => {
    setMode("new");
    dispatch(setSelectedProduct(null)); // 이전 데이터 초기화
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <h2>상품 관리 페이지</h2>
      <Button variant="primary" className="mb-3" onClick={openCreateForm}>
        상품 등록하기
      </Button>

      <ProductTable openEditForm={openEditForm} data={products}/>
      <ProductModal showModal={showModal} mode={mode} handleClose={handleCloseModal} />
    </div>
  );
};

export default AdminProductPage;
