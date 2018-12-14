import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import global from 'styles/global'
import { BaseCSS } from 'styled-bootstrap-grid'

import Navigation from 'components/Navigation/'
import PeriodStats from 'components/PeriodStats'

const Wrapper = styled.div`
  background: #F0F0F0;
  min-height: 100vh;
  padding-top: 75px;
`

const GlobalStyles = createGlobalStyle`
  ${global}
`

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navigation />
        
        <PeriodStats />
        
        <BaseCSS />
        <GlobalStyles />
      </Wrapper>
    );
  }
}
