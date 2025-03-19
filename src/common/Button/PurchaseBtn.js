import React from "react";
import styles from "../style/purchase.module.css"; // CSS 모듈 사용

const PurchaseBtn = ({ children ,onClick}) => {
  return (
    <button className={styles.purchaseButton}onClick={onClick}>
      {children} {/* ✅ 전달받은 텍스트를 버튼에 표시 */}
    </button>
  );
};

export default PurchaseBtn;
