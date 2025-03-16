import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getAdList } from "../../../features/ad/adSlice";

const AdTable = () => {
  const dispatch = useDispatch();
  const { ads = [], loading, error } = useSelector((state) => state.ad); // undefined 방지

  useEffect(() => {
    dispatch(getAdList());
  }, [dispatch]);

  return (
    <div style={{ marginTop: "10px" }}>
      <h3>광고 목록</h3>
      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: "red" }}>오류 발생: {error}</p>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>광고 경로</th>
          </tr>
        </thead>
        <tbody>
          {ads.length > 0 ? (
            ads.map((ad, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ad.ad_path}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default AdTable;
