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

  &[type=radio] {
    width: auto;
  }
`

const Separator = styled.div`
  height: 1px;
  background: #ccc;
  margin: 2em 0 1em;
`

const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;

  ${Label} {
    margin: 0 2em 0 1em;
  }
`

export default class PlayerProfile extends Component {
  state = {
    type: 'player',
    number: 99,
    name: 'Wayne Gretzky',
    image: 'https://i.imgur.com/5hSLVz3.jpg',
    source: '',
    gp: 0,
    p: 0,
    g: 0,
    a: 0,
    gwg: 0,
    plus: 0,
    minus: 0,
    s: 0,
    foWon: 0,
    foLost: 0,
    pen: 0,
    min: 0,
    gpi: 0,
    mip: 0,
    sv: 0,
    ga: 0,
  }
  
  render() {
    const {
      type,
      number,
      name,
      image,
      source,
      gp,
      g,
      a,
      gwg,
      plus,
      minus,
      s,
      foWon,
      foLost,
      pen,
      min,
      gpi,
      mip,
      sv,
      ga,
    } = this.state

    return(
      <Container fluid>
        <Row>
        
          {/* Stats entry */}
          <Col col={6}>
            <Row>
              <Col>
                <Row>
                  <Col col={12}>
                    <RadioContainer>
                      <Input
                        type="radio"
                        name="type"
                        value="player"
                        onChange={() => this.setState({type: 'player'})}
                        checked={this.state.type === 'player'}
                        />
                      <Label htmlFor="player">Spiller</Label>
                      <Input
                        type="radio"
                        name="type"
                        value="goalie"
                        onChange={() => this.setState({type: 'goalie'})}
                        checked={this.state.type === 'goalie'}
                      />
                      <Label htmlFor="player">Målmand</Label>
                    </RadioContainer>
                  </Col>
                </Row>

                <Row>
                  <Col col={2}>
                    <Label>Nummer</Label>
                    <Input
                      type="text"
                      value={number}
                      onChange={e => this.setState({number: e.target.value})}
                    />
                  </Col>
                  <Col col={10}>
                    <Label>Navn</Label>
                    <Input
                      type="text"
                      value={name}
                      onChange={e => this.setState({name: e.target.value})}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col col={12}>
                    <Label>Billede</Label>
                    <Input
                      type="text"
                      value={image}
                      onChange={e => this.setState({image: e.target.value})}
                    />
                  </Col>
                </Row>
                
                <Row>
                  <Col col={12}>
                    <Label>Kilde</Label>
                    <Input
                      type="text"
                      value={source}
                      onChange={e => this.setState({source: e.target.value})}
                    />
                  </Col>
                </Row>

                <Separator />

                {type === 'player' ?
                  <div>
                    <Row>
                      <Col col={3}>
                        <Label>Kampe (GP)</Label>
                        <Input
                          type="number"
                          value={gp}
                          onChange={e => this.setState({gp: parseInt(e.target.value)})}
                        />
                      </Col>
                      <Col col={3}>
                        <Label>Mål (G)</Label>
                        <Input
                          type="number"
                          value={g}
                          onChange={e => this.setState({g: parseInt(e.target.value)})}
                        />
                      </Col>
                      <Col col={3}>
                        <Label>Assists (A)</Label>
                        <Input
                          type="number"
                          value={a}
                          onChange={e => this.setState({a: parseInt(e.target.value)})}
                        />
                      </Col>
                      <Col col={3}>
                        <Label>Afgørende mål (GWG)</Label>
                        <Input
                          type="number"
                          value={gwg}
                          onChange={e => this.setState({gwg: parseInt(e.target.value)})}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col col={3}>
                        <Label>Plus (+)</Label>
                        <Input
                          type="number"
                          value={plus}
                          onChange={e => this.setState({plus: parseInt(e.target.value)})}
                        />
                      </Col>
                      <Col col={3}>
                        <Label>Minus (-)</Label>
                        <Input
                          type="number"
                          value={minus}
                          onChange={e => this.setState({minus: parseInt(e.target.value)})}
                        />
                      </Col>
                      <Col col={3}>
                        <Label>Skud (S)</Label>
                        <Input
                          type="number"
                          value={s}
                          onChange={e => this.setState({s: parseInt(e.target.value)})}
                        />
                      </Col>
                      <Col col={3}>
                        <Label>Faceoffs vundet (FO+)</Label>
                        <Input
                          type="number"
                          value={foWon}
                          onChange={e => this.setState({foWon: parseInt(e.target.value)})}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col col={3}>
                        <Label>Faceoffs tabt (FO-)</Label>
                        <Input
                          type="number"
                          value={foLost}
                          onChange={e => this.setState({foLost: parseInt(e.target.value)})}
                        />
                      </Col>
                      <Col col={3}>
                        <Label>Udvisninger (PEN)</Label>
                        <Input
                          type="number"
                          value={pen}
                          onChange={e => this.setState({pen: parseInt(e.target.value)})}
                        />
                      </Col>
                      <Col col={3}>
                        <Label>Udvisningsminutter (MIN)</Label>
                        <Input
                          type="number"
                          value={min}
                          onChange={e => this.setState({min: parseInt(e.target.value)})}
                        />
                      </Col>
                    </Row>
                  </div>
                  :
                  <div>
                    <Row>
                      <Col col={3}>
                        <Label>Kampe spillet (GPI)</Label>
                        <Input
                          type="number"
                          value={gpi}
                          onChange={e => this.setState({gpi: parseInt(e.target.value)})}
                        />
                      </Col>
                      <Col col={3}>
                        <Label>Minutter spillet (MIP)</Label>
                        <Input
                          type="number"
                          value={mip}
                          onChange={e => this.setState({mip: parseFloat(e.target.value)})}
                        />
                      </Col>
                      <Col col={3}>
                        <Label>Redninger (S)</Label>
                        <Input
                          type="number"
                          value={sv}
                          onChange={e => this.setState({sv: parseInt(e.target.value)})}
                        />
                      </Col>
                      <Col col={3}>
                        <Label>Mål imod (GA)</Label>
                        <Input
                          type="number"
                          value={ga}
                          onChange={e => this.setState({ga: parseInt(e.target.value)})}
                        />
                      </Col>
                    </Row>
                  </div>
                }
                
              </Col>
            </Row>
          </Col>
          {/* End stats entry */}

          {/* Preview + output */}
          <Col col={6}>
            <Row>
              <Col>
                <Preview {...this.state} />
              </Col>
            </Row>
          </Col>
          {/* End preview */}

        </Row>
      </Container>
    )
  }
}
