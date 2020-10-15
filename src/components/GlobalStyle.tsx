import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, div#root {
    font-family: 'Kanit', san-serif;
    height: 200vh;
    width: 100vw;

    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
`

export default GlobalStyle
