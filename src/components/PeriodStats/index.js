import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'

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
      pim: 0,
      player: '#99 Wayne Gretzky',
      playerShots: 0
    }
  }
  
  render() {
    const {
      period,
      home,
      away,
    } = this.state

    return(
      <Container fluid>
        <Row>
        
          {/* Stats entry */}
          <Col col={6}>
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
