import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { getGamesList, getGameStats } from 'api/api'
import { toJs } from 'utils/xml'

import Preview from './Preview'

const Label = styled.label`
  display: block;
  margin: 2em 0 0.5em;
`

const Input = styled.input`
  width: 100%;
  padding: 0.5em;
  outline: none;
`

const Separator = styled.div`
  height: 1px;
  background: #ccc;
  margin: 2em 0 1em;
`

const SelectorContainer = styled.div`
  display: flex;

  button {
    flex-shrink: 0;
    margin-left: 1em;
    margin-top: 1em;
  }
`

const DateSelector = styled.select`
  width: 100%;
  margin-top: 1em;
  height: 2em;
`

export default class PeriodStats extends Component {
  state = {
    period: 1,
    home: {
      name: 'Hjemme',
      goals: 0,
      shots: 0,
      faceoffs: 0,
      icings: 0,
      offsides: 0,
      pen: 0,
      pim: 0,
      player: '#99 Wayne Gretzky',
      playerShots: 0
    },
    away: {
      name: 'Ude',
      goals: 0,
      shots: 0,
      faceoffs: 0,
      icings: 0,
      offsides: 0,
      pen: 0,
      pim: 0,
      player: '#99 Wayne Gretzky',
      playerShots: 0
    },
    games: [],
    selectedGame: 0,
    loadingGames: true,
    loadingStats: false
  }

  componentDidMount() {
    getGamesList().then(data => {
      const raw = toJs(data)
      const reduced = raw.NewDataSet.Table
      let xml = ''

      reduced.map(entry => {
        return xml += entry[Object.keys(entry)]['_text']
      })

      const parsedList = toJs(xml)
      let finalList = []

      parsedList.xmlGameListAll.map(game => {
        return finalList.push({
          ID: game._attributes.GameID,
          date: game._attributes.GameDate,
          home: game._attributes.Hometeam,
          away: game._attributes.Awayteam
        })
      })

      this.setState({ games: finalList })
      return this.setState({ loadingGames: false })
    })
  }

  getGameStats() {
    this.setState({ loadingStats: true })
    
    getGameStats(this.state.selectedGame).then(response => {
      const data = toJs(response)
      const homeData = data.InGameStatisticsPerPeriod.periodStats.GameTotal.Team[0]
      const awayData = data.InGameStatisticsPerPeriod.periodStats.GameTotal.Team[1]
      const home = this.state.home
      const away = this.state.away
      const games = this.state.games
      const gameInfo = games.find(game => game.ID === this.state.selectedGame)

      this.setState({
        home: {
          ...home,
          name: gameInfo.home,
          goals: parseInt(homeData.Goals._text),
          shots: parseInt(homeData.Shots._text),
          faceoffs: parseInt(homeData.FaceOffsWon._text),
          pen: parseInt(homeData.Penalties._text),
          pim: parseInt(homeData.PenaltyMinutes._text),
        },
        away: {
          ...away,
          name: gameInfo.away,
          goals: parseInt(awayData.Goals._text),
          shots: parseInt(awayData.Shots._text),
          faceoffs: parseInt(awayData.FaceOffsWon._text),
          pen: parseInt(awayData.Penalties._text),
          pim: parseInt(awayData.PenaltyMinutes._text),
        }
      })

      return this.setState({ loadingStats: false })
    })
  }
  
  render() {
    const {
      period,
      home,
      away,
      loadingGames,
      loadingStats,
    } = this.state

    return(
      <Container fluid>
        <Row>
        
          {/* Stats entry */}
          <Col col={6}>
            <Row>
              <Col>
                {loadingGames ? (
                  <Label>Henter kampe...</Label>
                ) : (
                  <div>
                    <Label>Vælg kamp</Label>
                    <SelectorContainer>
                      <DateSelector onChange={e => this.setState({selectedGame: e.target.value})}>
                        <option value={0} key={0}>---</option>
                        {this.state.games.map(game => {
                          return(
                            <option value={game.ID} key={game.ID}>
                              {new Date(game.date).toLocaleDateString()}, {game.home} - {game.away}
                            </option>
                          )
                        })}
                      </DateSelector>
                      <button onClick={e => this.getGameStats()}>Hent stats</button>
                    </SelectorContainer>
                  </div>
                )}
              </Col>
            </Row>

            {loadingStats &&
              <Row>
                <Col>
                  <Label>Henter stats...</Label>
                </Col>
              </Row>
            }

            <Separator />

            <Row>
              <Col>
                <Row>
                  <Col col={6}>
                    <Label>Hjemmehold</Label>
                    <Input
                      type="text"
                      value={home.name}
                      onChange={
                        e => this.setState({
                          home: {
                            ...home,
                            name: e.target.value
                          }
                        })
                      }
                    />
                  </Col>
                  <Col col={6}>
                    <Label>Udehold</Label>
                    <Input
                      type="text"
                      value={away.name}
                      onChange={
                        e => this.setState({
                          away: {
                            ...away,
                            name: e.target.value
                          }
                        })
                      }
                    />
                  </Col>
                </Row>
                
                <Label>Periode nr.</Label>
                <Input
                  type="number"
                  value={period}
                  onChange={e => this.setState({period: e.target.value})}
                />
              </Col>
            </Row>

            <Separator />
            
            <Row>
              <Col col={6}>
                <h3>{home.name}</h3>

                <Label>Mål</Label>
                <Input
                  type="number"
                  value={home.goals}
                  onChange={
                    e => this.setState({
                      home: {
                        ...home,
                        goals: e.target.value
                      }
                    })
                  }
                />
                
                <Label>Skud</Label>
                <Input
                  type="number"
                  value={home.shots}
                  onChange={
                    e => this.setState({
                      home: {
                        ...home,
                        shots: e.target.value
                      }
                    })
                  }
                />

                <Label>Faceoffs</Label>
                <Input
                  type="number"
                  value={home.faceoffs}
                  onChange={
                    e => this.setState({
                      home: {
                        ...home,
                        faceoffs: e.target.value
                      }
                    })
                  }
                />

                <Label>Icings</Label>
                <Input
                  type="number"
                  value={home.icings}
                  onChange={
                    e => this.setState({
                      home: {
                        ...home,
                        icings: e.target.value
                      }
                    })
                  }
                />

                <Label>Offsides</Label>
                <Input
                  type="number"
                  value={home.offsides}
                  onChange={
                    e => this.setState({
                      home: {
                        ...home,
                        offsides: e.target.value
                      }
                    })
                  }
                />

                <Label>Udvisninger</Label>
                <Input
                  type="number"
                  value={home.pen}
                  onChange={
                    e => this.setState({
                      home: {
                        ...home,
                        pen: e.target.value
                      }
                    })
                  }
                />

                <Label>Udvisningsminutter</Label>
                <Input
                  type="number"
                  value={home.pim}
                  onChange={
                    e => this.setState({
                      home: {
                        ...home,
                        pim: e.target.value
                      }
                    })
                  }
                />

                <Row>
                  <Col>
                    <Label>Flest skud på mål</Label>
                  </Col>
                </Row>
                <Row>
                  <Col col={8}>
                    <Input
                      type="text"
                      value={home.player}
                      onChange={
                        e => this.setState({
                          home: {
                            ...home,
                            player: e.target.value
                          }
                        })
                      }
                    />
                  </Col>
                  <Col col={4}>
                    <Input
                      type="number"
                      value={home.playerShots}
                      onChange={
                        e => this.setState({
                          home: {
                            ...home,
                            playerShots: e.target.value
                          }
                        })
                      }
                    />
                  </Col>
                </Row>
              </Col>
              
              <Col col={6}>
                <h3>{away.name}</h3>

                <Label>Mål</Label>
                <Input
                  type="number"
                  value={away.goals}
                  onChange={
                    e => this.setState({
                      away: {
                        ...away,
                        goals: e.target.value
                      }
                    })
                  }
                />
                
                <Label>Skud</Label>
                <Input
                  type="number"
                  value={away.shots}
                  onChange={
                    e => this.setState({
                      away: {
                        ...away,
                        shots: e.target.value
                      }
                    })
                  }
                />

                <Label>Faceoffs</Label>
                <Input
                  type="number"
                  value={away.faceoffs}
                  onChange={
                    e => this.setState({
                      away: {
                        ...away,
                        faceoffs: e.target.value
                      }
                    })
                  }
                />

                <Label>Icings</Label>
                <Input
                  type="number"
                  value={away.icings}
                  onChange={
                    e => this.setState({
                      away: {
                        ...away,
                        icings: e.target.value
                      }
                    })
                  }
                />

                <Label>Offsides</Label>
                <Input
                  type="number"
                  value={away.offsides}
                  onChange={
                    e => this.setState({
                      away: {
                        ...away,
                        offsides: e.target.value
                      }
                    })
                  }
                />

                <Label>Udvisninger</Label>
                <Input
                  type="number"
                  value={away.pen}
                  onChange={
                    e => this.setState({
                      away: {
                        ...away,
                        pen: e.target.value
                      }
                    })
                  }
                />

                <Label>Udvisningsminutter</Label>
                <Input
                  type="number"
                  value={away.pim}
                  onChange={
                    e => this.setState({
                      away: {
                        ...away,
                        pim: e.target.value
                      }
                    })
                  }
                />

                <Row>
                  <Col>
                    <Label>Flest skud på mål</Label>
                  </Col>
                </Row>
                <Row>
                  <Col col={8}>
                    <Input
                      type="text"
                      value={away.player}
                      onChange={
                        e => this.setState({
                          away: {
                            ...away,
                            player: e.target.value
                          }
                        })
                      }
                    />
                  </Col>
                  <Col col={4}>
                    <Input
                      type="number"
                      value={away.playerShots}
                      onChange={
                        e => this.setState({
                          away: {
                            ...away,
                            playerShots: e.target.value
                          }
                        })
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* End stats entry */}

          {/* Preview + output */}
          <Col col={6}>
            <Row>
              <Col>
                <Preview
                  period={period}
                  home={home}
                  away={away}
                />
              </Col>
            </Row>
          </Col>
          {/* End preview */}

        </Row>
      </Container>
    )
  }
}
