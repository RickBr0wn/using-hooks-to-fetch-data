import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
