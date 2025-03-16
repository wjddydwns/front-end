import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { getAdList } from "../../../features/ad/adSlice"; // Redux Thunk Import
import "../style/Carousel.css"; // 스타일 Import

const CarouselPage = () => {
  const dispatch = useDispatch();
  const { ads = [], loading, error } = useSelector((state) => state.ad || {}); // Redux State 가져오기

  useEffect(() => {
    dispatch(getAdList()); // 광고 데이터 불러오기
  }, [dispatch]);

  return (
    <div className="ad">
      <Container className="d-flex justify-content-center align-items-center">
        {loading && <p>로딩 중...</p>}
        {error && <p style={{ color: "red" }}>오류 발생: {error}</p>}
        {ads.length > 0 ? (
          <Carousel>
            {ads.map((ad, index) => (
              <Carousel.Item key={index}>
                <img
                  src={ad.ad_path} // 광고 이미지 URL
                  alt={`광고 ${index + 1}`}
                  className="d-flex w-100"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>등록된 광고가 없습니다.</p>
        )}
      </Container>
    </div>
  );
};

export default CarouselPage;
