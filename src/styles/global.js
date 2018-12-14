import styledNormalize from 'styled-normalize'

import fonts from './fonts'

export default`
  ${styledNormalize}

  ${fonts}

  html, body {
    font-family: 'Open Sans', serif;
    font-size: 14px;
    font-weight: 300;
  }

  h1, h2, h3, h4 {
    font-weight: 300;
  }

  h1 {
    font-size: 3.998rem;
  }

  h2 {
    font-size: 2.827rem;
  }

  h3 {
    font-size: 1.999rem;
  }

  h4 {
    font-size: 1.414rem;
  }
`
