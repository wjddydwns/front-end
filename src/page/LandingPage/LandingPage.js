import React from 'react'
import { Container } from 'react-bootstrap'
import CarouselPage from './components/CarouselPage'
import SubMenu from './components/SubMenu'
import TodayProduct from './components/TodayProduct'
const LandingPage = () => {
  return (
    <Container>
      <CarouselPage/>
      <SubMenu/>
      <TodayProduct/>
    </Container>
  )
}

export default LandingPage