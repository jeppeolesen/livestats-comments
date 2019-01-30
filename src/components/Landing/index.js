import React, { Component } from 'react'
import styled from 'styled-components'
import theme from 'styles/theme'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #111;
`

const TitleContainer = styled.div`
  position: fixed;
  bottom: 100px;
  left: 100px;
`

const Title = styled.h1`
  font-size: 120px;
  color: white;
  margin: 0;
  line-height: 110px;
  text-transform: uppercase;
  font-family: ${theme.fonts.display};
  font-weight: 400;
`

const Version = styled.p`
  font-size: 14px;
  color: #555;
`

export default class Landing extends Component {
  render() {
    return(
      <Wrapper>
        <TitleContainer>
          <Title>Metal</Title>
          <Title>Ligaen</Title>
          <Version>Live Update Tool, v{process.env.REACT_APP_VERSION}</Version>
        </TitleContainer>
      </Wrapper>
    )
  }
}
