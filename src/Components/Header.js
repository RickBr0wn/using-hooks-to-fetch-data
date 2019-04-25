import React from 'react'
import styled from 'styled-components'
import Hero from '../Images/hackernews.png'

const StyledHeader = styled.section`
  img {
    width: 748px;
    height: 300px;
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <img src={Hero} />
    </StyledHeader>
  )
}
