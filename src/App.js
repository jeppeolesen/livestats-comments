import React, { Component } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import global from 'styles/global'
import { BaseCSS } from 'styled-bootstrap-grid'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import theme from 'styles/theme'

import Navigation from 'components/Navigation'
import PeriodStats from 'components/PeriodStats'
import PlayerProfile from 'components/PlayerProfile'
import PlayerComparison from 'components/PlayerComparison'
import TeamComparison from 'components/TeamComparison'
import Landing from 'components/Landing'

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
      <ThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <Wrapper>
            <Navigation />

            <Route path="/" exact component={Landing} />
            <Route path="/period-stats" component={PeriodStats} />
            <Route path="/player-profile" component={PlayerProfile} />
            <Route path="/player-comparison" component={PlayerComparison} />
            <Route path="/team-comparison" component={TeamComparison} />
            
            <BaseCSS />
            <GlobalStyles />
          </Wrapper>
        </Router>
      </ThemeProvider>
    );
  }
}
