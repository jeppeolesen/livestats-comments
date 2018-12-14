import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 75px;
  background: white;
  border-bottom: 1px solid #ccc;
`

const Item = styled.div`
  flex: 1;
`

const Logo = styled(Item)`
  background: #3ba8ce;
`

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <Logo />
      </Wrapper>
    )
  }
}
