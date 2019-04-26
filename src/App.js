import React from 'react'
import Container from './Components/Container'
import Header from './Components/Header'
import Data from './Components/Data'
import Story from './Components/Story'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <Container>
        <Header />
        <Data />
        <Story />
        <Footer />
      </Container>
    </>
  )
}
