import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  // 옵션 객체 정의
  const options = {


  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className='showdiv' onClick={handleShow}>
        <MdOutlineKeyboardDoubleArrowRight size={40} color='white'/>
      </div>

      {/* Offcanvas에 options 적용 */}
      <Offcanvas className="offcanvas_box"show={show} onHide={handleClose} {...options}>
        <Offcanvas.Header closeButton className='bg-white' style={{borderBottom:"2px solid gray"}}>
         
          <Offcanvas.Title onClick={()=>{navigate('/')}}>
            <img className="adminPage_logo" src='https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/dECe/image/FJE1g1ITRbf8ktXbWdoVJNiWHlE.png'
            style={{cursor:"pointer"}}/>
          </Offcanvas.Title>
          </Offcanvas.Header>
          <Container>
        <Offcanvas.Body>
          <div className='admin_menu'>상품 페이지</div>
        </Offcanvas.Body>
        <Offcanvas.Body>
          <div className='admin_menu' onClick={()=>{navigate('/admin/ad')}}>광고 페이지</div>
        </Offcanvas.Body>
        <Offcanvas.Body>
          <div className='admin_menu'>오더 페이지</div>
        </Offcanvas.Body>
          </Container>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
