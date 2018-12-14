import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Output from './Output'

const Wrapper = styled.div`
  width: 100%;
`

const Heading = styled.h2`
  text-align: center;
`

const Table = styled.div`

  > div:nth-child(odd) {
    background: #f5f5f5;
  }
`

const Row = styled.div`
  width: 100%;
  display: flex;
  padding: 1em 0;
`

const Header = styled(Row)`
  font-weight: 600;
  text-align: center;
`

const Item = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 1em;
`


export default class Preview extends Component {
  static propTypes = {
    period: PropTypes.number.isRequired,
    home: PropTypes.object.isRequired,
    away: PropTypes.object.isRequired
  }

  state = {
    homeSavePercentage: 0,
    awaySavePercentage: 0,
    totalFaceoffs: 0,
    homeFaceoffPercentage: 0,
    awayFaceoffPercentage: 0
  }

  getSavePercentage(team) {
    const data = team === 'home' ? this.props.away : this.props.home

    let savePercentage = null

    if(!data.goals && !data.shots) {
      savePercentage = '-'
    } else if(!data.goals) {
      savePercentage = '100%'
    } else {
      savePercentage = `${(100 - ((data.goals / data.shots) * 100)).toFixed(1)}%`
    }

    return savePercentage
  }

  getSaves(team) {
    const data = team === 'home' ? this.props.away : this.props.home

    return data.shots - data.goals
  }

  getFaceoffPercentage() {
    const { home, away } = this.props

    const totalFaceoffs = parseFloat(home.faceoffs) + parseFloat(away.faceoffs)
    const homeFaceoffPercentage = (home.faceoffs / totalFaceoffs * 100).toFixed(1)
    const awayFaceoffPercentage = (100 - homeFaceoffPercentage).toFixed(1)

    this.setState({
      totalFaceoffs,
      homeFaceoffPercentage,
      awayFaceoffPercentage
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps !== this.props) {
      this.getFaceoffPercentage()
    }
  }
  
  render(){
    const {
      period,
      home,
      away
    } = this.props

    const {
      homeFaceoffPercentage,
      awayFaceoffPercentage
    } = this.state

    return(
      <Wrapper>
        <Heading>Kampstatistik efter {period}. periode</Heading>
        <Table>
          <Header>
            <Item>{home.name}</Item>
            <Item></Item>
            <Item>{away.name}</Item>
          </Header>
          <Row>
            <Item>{home.goals}</Item>
            <Item>Mål</Item>
            <Item>{away.goals}</Item>
          </Row>
          <Row>
            <Item>{home.shots}</Item>
            <Item>Skud</Item>
            <Item>{away.shots}</Item>
          </Row>
          <Row>
            <Item>{this.getSaves('home')}</Item>
            <Item>Redninger</Item>
            <Item>{this.getSaves('away')}</Item>
          </Row>
          <Row>
            <Item>{this.getSavePercentage('home')}</Item>
            <Item>Redningsprocent</Item>
            <Item>{this.getSavePercentage('away')}</Item>
          </Row>
          <Row>
            <Item>{home.faceoffs}</Item>
            <Item>Faceoffs vundet</Item>
            <Item>{away.faceoffs}</Item>
          </Row>
          <Row>
            <Item>{homeFaceoffPercentage}%</Item>
            <Item>Faceoffprocent</Item>
            <Item>{awayFaceoffPercentage}%</Item>
          </Row>
          <Row>
            <Item>{home.icings}</Item>
            <Item>Icings</Item>
            <Item>{away.icings}</Item>
          </Row>
          <Row>
            <Item>{home.offsides}</Item>
            <Item>Offsides</Item>
            <Item>{away.offsides}</Item>
          </Row>
          <Row>
            <Item>{home.pim}</Item>
            <Item>Udvisningsminutter</Item>
            <Item>{away.pim}</Item>
          </Row>
          <Row>
            <Item>{home.player} med {home.playerShots} skud</Item>
            <Item>Flest skud af spiller</Item>
            <Item>{away.player} med {away.playerShots} skud</Item>
          </Row>
        </Table>

        <Output
          period={period}
          home={home}
          away={away}
          homeSavePercentage={this.getSavePercentage('home')}
          awaySavePercentage={this.getSavePercentage('away')}
          homeFaceoffPercentage={homeFaceoffPercentage}
          awayFaceoffPercentage={awayFaceoffPercentage}
          homeSaves={this.getSaves('home')}
          awaySaves={this.getSaves('away')}
        />
      </Wrapper>
    )
  }
}
