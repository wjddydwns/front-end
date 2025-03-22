import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../features/product/productSlice";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const ProductTable = ({ data,openEditForm }) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>SKU</th>
          <th>상품명</th>
          <th>카테고리</th>
          <th>가격</th>
          <th>상태</th>
          <th>작업</th>
        </tr>
      </thead>
      <tbody>
  {data.map((product) => (
    <tr key={product._id}>
      <td>{product.sku}</td>
      <td>{product.name}</td>
      <td>{Array.isArray(product.category) ? product.category.join(", ") : product.category}</td>
      <td>{(product.price || 0).toLocaleString()}원</td>
      <td>{product.status === "active" ? "활성" : "비활성"}</td>
      <td>
        <Button variant="warning" size="sm" onClick={() => openEditForm(product)}>
          수정
        </Button>
      </td>
    </tr>
  ))}
</tbody>

    </Table>
  );
};

export default ProductTable;
