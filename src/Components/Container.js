import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(10, 77px);
  grid-template-columns: repeat(3, 1fr) 30%;
  grid-gap: 1px;

  .red {
    background-color: red;
    font-size: 20px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    border-radius: 2px;
    height: 100%;
  }

  .header {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }

  .small-box-1 {
    grid-row: 2 / 4;
    grid-column: 1 / 2;
  }

  .search {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  .small-box-3 {
    grid-row: 2 / 4;
    grid-column: 3 / 4;
  }

  .browser {
    grid-row: 3/ 10;
    grid-column: 1/ 2;
    overflow: scroll;
  }

  .main-content {
    grid-row: 2 / 10;
    grid-column: 2 / 5;
  }

  .footer {
    grid-row: 10 / 11;
    grid-column: 1 / -1;
  }
`

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
