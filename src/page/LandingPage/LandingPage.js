import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import CarouselPage from './components/CarouselPage'
import SubMenu from './components/SubMenu'
import TodayProduct from './components/TodayProduct'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../features/product/productSlice'
import ProductCard from '../../common/product/ProductCard'
const LandingPage = () => {
  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector((state) => state.products || {});

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container>
      <CarouselPage/>
      <SubMenu/>
     <TodayProduct/>
    </Container>
  )
}

export default LandingPage