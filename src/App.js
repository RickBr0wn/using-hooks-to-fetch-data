import React from 'react'
import { StyledGrid } from './Components/Grid'
import Header from './Components/Header'
import Data from './Components/Data'
// import Story from './Components/Story'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <StyledGrid>
        <Header />
        <Data />
        {/* <Story /> */}
        <Footer />
      </StyledGrid>
    </>
  )
}
