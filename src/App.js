import React, { Component } from 'react'
import styled from 'styled-components'

import Navigation from './components/Navigation/'

const Wrapper = styled.div`
  background: #F0F0F0;
  min-height: 100vh;
`

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navigation />
        <h1>Hello</h1>
      </Wrapper>
    );
  }
}
