import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ProductModal from "./components/ProductModal"; // 모달 컴포넌트 import
import ProductTable from "./components/ProductTable";

const AdminProductPage = () => {
  const [showModal, setShowModal] = useState(false); // 모달 상태 관리

  return (
    <div>
      <h1>상품 등록 페이지</h1>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        상품 등록하기
      </Button>

      {/* 모달 컴포넌트 */}
      <ProductModal show={showModal} handleClose={() => setShowModal(false)} />
        <ProductTable/>
    </div>
  );
};

export default AdminProductPage;
