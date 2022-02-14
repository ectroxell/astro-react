import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: #E1E1E6;
  }
`
export const Button = styled.button`
  margin: 12px;
  padding: 6px;
  font-family: 'Lato', sans-serif;
  background-color: #7364c4;
  font-size: 14px;
  border-radius: 15%;
  border: none;
  color: #E1E1E6;
`
