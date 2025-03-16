import React from 'react'
import { Container } from 'react-bootstrap'
import CarouselPage from './components/CarouselPage'
import SubMenu from './components/SubMenu'
const LandingPage = () => {
  return (
    <Container>
      <CarouselPage/>
      <SubMenu/>
    </Container>
  )
}

export default LandingPage