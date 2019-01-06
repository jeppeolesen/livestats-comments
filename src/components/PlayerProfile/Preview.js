import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import Output from './Output'

const Wrapper = styled.div`
  width: 100%;
`

const Heading = styled.h2`
  text-align: center;
`

const Table = styled.div`
  display: flex;
  margin-top: 2em;

  > div:nth-child(2) {
    text-align: center;
  }
`

const TableCol = styled.div`
  flex: 1;
  
  > div:nth-child(odd) {
    background: #f5f5f5;
  }
`

const Item = styled.div`
  padding: 1em;
`

const Image = styled.img`
  display: block;
  max-width: 100%;
`


export default class Preview extends Component {
  getPointsAverage() {
    const {g, a, gp} = this.props
    const result = ((g + a) / gp).toFixed(2)

    return result > 0 ? result : 0
  }

  getPlusMinus() {
    const {plus, minus} = this.props

    return plus - minus
  }

  getScoringPercetage() {
    const {g, s} = this.props
    const result = ((g * 100) / s).toFixed(2)

    return result > 0 ? result : 0
  }

  getFaceoffPercentage() {
    const {foWon, foLost} = this.props
    const foTotal = foWon + foLost
    const result = ((foWon * 100) / foTotal).toFixed(2)

    return result > 0 ? result : 0
  }

  getAveragePenalties() {
    const {pen, gp} = this.props
    const result = (pen / gp).toFixed(2)

    return result > 0 ? result : 0
  }

  getAveragePenaltyMinutes() {
    const {min, gp} = this.props
    const result = (min / gp).toFixed(2)

    return result > 0 ? result : 0
  }

  getTotalPoints() {
    const {g, a} = this.props
    
    return g + a
  }

  getShotsPerGame() {
    const {gp, s} = this.props
    const result = (s / gp).toFixed(2)

    return result > 0 ? result : 0
  }

  getSavePercetage() {
    const {sv, ga} = this.props
    const totalShots = sv + ga
    const result = ((sv * 100) / totalShots).toFixed(2)

    return result > 0 ? result : 0
  }

  getGoalsAgainstAverage() {
    const {ga, gpi} = this.props
    const result = (ga / gpi).toFixed(2)

    return result > 0 ? result : 0
  }

  getSavesPerGame() {
    const {sv, gpi} = this.props
    const result = (sv / gpi).toFixed(2)

    return result > 0 ? result : 0
  }
  
  render(){
    console.log(this.props)

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
    } = this.props
    
    return(
      <Wrapper>
        <Heading>Spillerprofil: #{number} {name}</Heading>
        
        <Container>
          <Row>
            <Col col={12}>
              <Image src={image} />
              <p style={{textAlign: 'center', fontSize: '10px'}}><i>Kilde: {source}</i></p>
            </Col>
            <Col col={12}>
              {type === 'player' ?
              <div>
                <Table>
                  <TableCol>
                    <Item>Kampe</Item>
                    <Item>Mål</Item>
                    <Item>Assists</Item>
                    <Item>Point</Item>
                    <Item>Point per kamp</Item>
                    <Item>Afgørende mål</Item>
                    <Item>Plus</Item>
                    <Item>Minus</Item>
                    <Item>Plus/Minus</Item>
                    <Item>Skud</Item>
                    <Item>Skud per kamp</Item>
                    <Item>Scoringsprocent</Item>
                    <Item>Faceoffs vundet</Item>
                    <Item>Faceoffs tabt</Item>
                    <Item>Faceoffprocent</Item>
                    <Item>Udvisninger</Item>
                    <Item>Udvisningsminutter</Item>
                    <Item>Udvisninger per kamp</Item>
                    <Item>Udvisningsminutter per kamp</Item>
                  </TableCol>
                  <TableCol>
                    <Item>{gp}</Item>
                    <Item>{g}</Item>
                    <Item>{a}</Item>
                    <Item>{this.getTotalPoints()}</Item>
                    <Item>{this.getPointsAverage()}</Item>
                    <Item>{gwg}</Item>
                    <Item>{plus}</Item>
                    <Item>{minus}</Item>
                    <Item>{this.getPlusMinus()}</Item>
                    <Item>{s}</Item>
                    <Item>{this.getShotsPerGame()}</Item>
                    <Item>{this.getSavePercetage()}%</Item>
                    <Item>{foWon}</Item>
                    <Item>{foLost}</Item>
                    <Item>{this.getFaceoffPercentage()}%</Item>
                    <Item>{pen}</Item>
                    <Item>{min}</Item>
                    <Item>{this.getAveragePenalties()}</Item>
                    <Item>{this.getAveragePenaltyMinutes()}</Item>
                  </TableCol>
                </Table>
              </div>
              :
              <div>
                <Table>
                  <TableCol>
                    <Item>Kampe spillet</Item>
                    <Item>Minutter spillet</Item>
                    <Item>Redninger</Item>
                    <Item>Mål imod</Item>
                    <Item>Redningsprocent</Item>
                    <Item>Redninger per kamp</Item>
                    <Item>Mål imod per kamp</Item>
                  </TableCol>
                  <TableCol>
                    <Item>{gpi}</Item>
                    <Item>{mip}</Item>
                    <Item>{sv}</Item>
                    <Item>{ga}</Item>
                    <Item>{this.getSavePercetage()}%</Item>
                    <Item>{this.getSavesPerGame()}</Item>
                    <Item>{this.getGoalsAgainstAverage()}</Item>
                  </TableCol>
                </Table>
              </div>
              }
            </Col>
          </Row>
        </Container>

        <Output
          {...this.props}
          p={this.getTotalPoints()}
          ppg={this.getPointsAverage()}
          plusMinus={this.getPlusMinus()}
          spg={this.getShotsPerGame()}
          sPct={this.getScoringPercetage()}
          foPct={this.getFaceoffPercentage()}
          avgPen={this.getAveragePenalties()}
          avgMin={this.getAveragePenaltyMinutes()}
          svpg={this.getSavesPerGame()}
          gaa={this.getGoalsAgainstAverage()}
          svPct={this.getSavePercetage()}
        />
      </Wrapper>
    )
  }
}
