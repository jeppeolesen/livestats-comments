import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from 'styles/theme'
import Logo from 'components/generic/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faSkating, faUserFriends, faColumns } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
  z-index: 999;
`

const NavContainer = styled.div`
  background: ${theme.colors.blue};
  position: relative;
  z-index: 2;
  width: 100%;
  height: 75px;
  display: flex;
`

const Item = styled.div`
  flex: 2;
  justify-content: center;
  align-items: center;
  display: flex;
`

const EdgeItem = styled(Item)`
  flex: 0.25;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 15px;
`

const LogoContainer = styled(Item)`
  svg {
    transform: scale(0.3)
  }
`

const Line = styled.div`
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
  background: white;
`

const Burger = styled.div`
  padding: 10px;
  width: 50px;
  position: relative;
  
  div:first-child {
    top: 0;
    transform: ${props => props.active ? 'translateY(9px) rotate(45deg)' : 'rotate(0)'};
  }

  div:nth-child(2) {
    top: 9px;
    display: ${props => props.active ? 'none' : 'block'};
  }

  div:nth-child(3) {
    top: 18px;
    transform: ${props => props.active ? 'translateY(-9px) rotate(-45deg)' : 'rotate(0)'};
  }
`

const OverlayWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #222;
  position: absolute;
  top: 0;
  left: 0;
`

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
`

const GridItem = styled(Link)`
  width: 300px;
  height: 150px;
  margin: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fafafa;
  text-decoration: none;
  
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 150px;
    width: 1px;
    background: #444;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &:first-child:after {
    display: none;
  }

  &:hover {
    color: ${theme.colors.blue};
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 60px;
`

const Title = styled.h1`
  font-size: 18px;
  letter-spacing: 0.025em;
`

export default class Navigation extends Component {
  state = {
    navActive: true
  }

  render() {
    const { navActive } = this.state

    return (
      <Wrapper>
        <NavContainer>
          <EdgeItem />
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <EdgeItem>
            <Burger
              active={navActive}
              onClick={() => this.setState({navActive: !navActive})}
            >
              <Line />
              <Line />
              <Line />
            </Burger>
          </EdgeItem>
        </NavContainer>
        {navActive &&
          <OverlayWrapper>
            <Grid>
              <GridItem
                to="/period-stats"
                onClick={() => this.setState({navActive: !navActive})}
              >
                <div>
                  <Icon icon={faTable} />
                  <Title>Periode / Kamp</Title>
                </div>
              </GridItem>
              <GridItem
                to="/player-profile"
                onClick={() => this.setState({navActive: !navActive})}
              >
                <div>
                  <Icon icon={faSkating} />
                  <Title>Spillerprofil</Title>
                </div>
              </GridItem>
              <GridItem
                to="/player-comparison"
                onClick={() => this.setState({navActive: !navActive})}
              >
                <div>
                  <Icon icon={faUserFriends} />
                  <Title>Spillersammenligning</Title>
                </div>
              </GridItem>
              <GridItem
                to="/team-comparison"
                onClick={() => this.setState({navActive: !navActive})}
              >
                <div>
                  <Icon icon={faColumns} />
                  <Title>Holdsammenligning</Title>
                </div>
              </GridItem>
            </Grid>
          </OverlayWrapper>
        }
      </Wrapper>
    )
  }
}
