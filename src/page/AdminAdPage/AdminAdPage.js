import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { createAd } from '../../features/ad/adSlice';
import AdTable from './components/AdTable';
import CarouselPage from '../LandingPage/components/CarouselPage';

const AdminAdPage = () => {
    const [ad_path, setAd] = useState('');
    const dispatch = useDispatch();

    const handleAdPath = (event) => {
        event.preventDefault(); // 기본 동작 방지
        const trimmedAdPath = ad_path.trim();

        // 입력값이 공백이거나, http/https로 시작하지 않는 경우 거절
        if (!trimmedAdPath) {
            alert("이미지 주소를 입력하세요.");
            return;
        }
        if (!/^https?:\/\//.test(trimmedAdPath)) { // 정규식을 사용하여 `http://` 또는 `https://` 검사
            alert("올바른 이미지 URL을 입력하세요. (http:// 또는 https:// 로 시작해야 합니다.)");
            return;
        }

        dispatch(createAd({ ad_path: trimmedAdPath })) // Redux로 광고 데이터 전송
            .then(() => {
                setAd(''); // 전송 후 입력 필드 초기화
            });
    };

    return (
        <div>
            <h1>광고 관리 페이지</h1>
            <Form onSubmit={handleAdPath}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>이미지 주소 URL</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="이미지 주소값을 입력하세요"
                        value={ad_path} // 입력값 유지
                        onChange={(event) => setAd(event.target.value)} 
                    />
                </Form.Group>
                <Button type="submit">전송</Button>
            </Form>
            
            <div>
                <AdTable />
            </div>
            <div>
                <CarouselPage />
            </div>
        </div>
    );
};

export default AdminAdPage;
