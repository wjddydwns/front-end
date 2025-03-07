import React, { useState } from 'react'
import './Regist.css'
import { registerUser } from '../../features/user/userSlice';
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router"

const Regist = () => {
    const dispatch = useDispatch()
    const [passwordError, setPasswordError] = useState("")
    const [policyError, setPolicyError] = useState(false)

    // 폼 데이터 상태
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        confirmpassword: "",
        policy: false,
    });

    const navigate = useNavigate()

    const register = (event) => {
        event.preventDefault()
        const { name, email, password, confirmpassword, policy } = formData;

        // 비밀번호 확인 로직
        if (password !== confirmpassword) {
            setPasswordError("비밀번호가 일치하지 않습니다.");
            return;
        }
        if (!policy) {
            setPolicyError(true);
            return;
        }

        setPasswordError(""); // ✅ 공백 문자열이 아니라 빈 문자열로 설정
        setPolicyError(false); // ✅ 오류 초기화

        // Redux 액션 호출
        dispatch(registerUser({ name, email, password, navigate }));
    }

    const handleChange = (event) => {
        event.preventDefault();
        let { id, value, type, checked } = event.target;

        if (id === "confirmpassword" && passwordError) setPasswordError("");

        if (type === "checkbox") {
            if (policyError) setPolicyError(false);
            setFormData((prevState) => ({ ...prevState, [id]: checked }));
        } else {
            setFormData((prevState) => ({ ...prevState, [id]: value }));
        }
    }

    return (
        <div className='regist_wrapper'>
            <Container className="w-50">
                <h1>회원가입</h1>
                <Form onSubmit={register}>
                    <Form.Group className="mb-3 d-flex">
                        <Form.Label className='w-50'>이메일</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            placeholder="이메일을 입력해주세요"
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex">
                        <Form.Label className='w-50'>이름</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            placeholder="이름을 입력해주세요"
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex">
                        <Form.Label className='w-50'>비밀번호</Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            placeholder="비밀번호를 입력해주세요"
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex">
                        <Form.Label className='w-50'>비밀번호 확인</Form.Label>
                        <Form.Control
                            type="password"
                            id="confirmpassword"
                            placeholder="비밀번호를 한번 더 입력해주세요"
                            onChange={handleChange}
                            required
                            isInvalid={passwordError !== ""}
                        />
                        <Form.Control.Feedback type="invalid">
                            {passwordError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="이용약관에 동의합니다"
                            id="policy"
                            onChange={handleChange}
                            isInvalid={policyError}
                            checked={formData.policy}
                        />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        회원가입
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default Regist;
