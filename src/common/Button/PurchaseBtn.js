import React from "react";
import styles from "../style/purchase.module.css"; // CSS 모듈 사용

const PurchaseBtn = ({ onClick }) => {
  return (
    <button className={styles.purchaseButton} onClick={onClick}>
      구매하기
    </button>
  );
};

export default PurchaseBtn;
