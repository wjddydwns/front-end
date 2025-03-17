import React from "react";
import "../style/common.style.css"; // 스타일 파일 추가

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">네이버 이용약관</a> | <a href="#">네이버페이 이용약관</a> |{" "}
        <a href="#">개인정보처리방침</a> | <a href="#">법적고지 및 주의사항</a> |{" "}
        <a href="#">입점안내</a> | <a href="#">쇼핑몰도 노출안내</a>
      </div>

      <div className="footer-links">
        <a href="#">쇼핑파트너센터</a> | <a href="#">스마트스토어센터</a> |{" "}
        <a href="#">전자금융거래약관</a> | <a href="#">안전거래센터</a> |{" "}
        <a href="#">쇼핑원미</a> | <a href="#">고객센터</a>
      </div>

      <p className="footer-text">
        네이버는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 정보, 거래에 관한 의무와 책임은
        판매자에게 있습니다.
      </p>

      <p className="footer-text">
        사업자등록번호: 220-81-62517 | 통신판매업신고번호: 제2006-경기성남-0692호 | 대표이사: 최수연
      </p>

      <p className="footer-text">
        주소: 경기도 성남시 분당구 정자일로 95, NAVER 1784, 13561 | 이메일:{" "}
        <a href="mailto:helpcustomer@naver.com">helpcustomer@naver.com</a>
      </p>

      <p className="footer-text">
        대표전화: 1588-3819 |{" "}
        <a href="#">1:1 문의 바로가기</a> | 호스팅 서비스 제공: NAVER Cloud
      </p>

      <p className="footer-copyright">
        <span className="naver-logo">NAVER</span> Copyright ⓒNAVER Corp. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
