import React, { Component } from 'react'
import styled from 'styled-components'
import theme from 'styles/theme'
import Logo from 'components/generic/Logo'

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
  justify-content: center;
  align-items: center;
  display: flex;
`

const LogoContainer = styled(Item)`
  background: ${theme.colors.blue};

  svg {
    transform: scale(0.3)
  }
`

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Wrapper>
    )
  }
}
