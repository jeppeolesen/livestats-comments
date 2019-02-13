import React, { Component } from 'react'
import styled from 'styled-components'

const TextArea = styled.textarea`
  margin-top: 3em;
  display: block;
  width: 100%;
  height: 25em;
`
const CopyContainer = styled.div`
  text-align: center;
  margin: 2em 0;
`

const Copy = styled.button`
  padding: 1em 3em;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  border: none;
  letter-spacing: 0.05em;
  font-family: ${props => props.theme.fonts.base};
  background: ${props => props.theme.colors.blue};

  &:active {
    background: black;
  }
`

export default class Output extends Component {
  constructor(props) {
    super(props)

    this.outputRef = React.createRef()
  }
  
  copyOutput(e) {
    this.outputRef.current.select()

    document.execCommand('copy')

    e.target.focus()
  }
  
  render() {
    const {
      type,
      title,
      dob,
      shoots,
      height,
      weight,
      number,
      name,
      image,
      source,
      gp,
      p,
      g,
      a,
      ppg,
      gwg,
      plus,
      minus,
      plusMinus,
      s,
      spg,
      sPct,
      foWon,
      foLost,
      foPct,
      pen,
      avgPen,
      min,
      avgMin,
      gpi,
      mip,
      sv,
      ga,
      gaa,
      svpg,
      svPct
    } = this.props

    return(
      <div>
        <CopyContainer>
          <Copy onClick={e => this.copyOutput(e)}>Kopier</Copy>
        </CopyContainer>
        
        <TextArea ref={this.outputRef} value={
          type === 'player' ? `
            <div style="width:100%">
              <h2 style="text-align:center;">${title}: #${number} ${name}</h2>
              <div style="text-align: center">
                <img src=${image}" style="max-width: 100%; display: block; margin: 0 auto;" />
                <p style="font-size: 11px; font-style: italic">Kilde: ${source}</p>
              </div>
              <div style="display: flex;">
                <div style="flex: 1;">
                  <div style="padding: 1em; background: #f5f5f5;">Fødselsdato</div>
                  <div style="padding: 1em;">Fatning</div>
                  <div style="padding: 1em; background: #f5f5f5;">Højde</div>
                  <div style="padding: 1em;">Vægt</div>
                  <div style="padding: 1em; background: #f5f5f5;">Kampe</div>
                  <div style="padding: 1em;">Mål</div>
                  <div style="padding: 1em; background: #f5f5f5;">Assists</div>
                  <div style="padding: 1em;">Point</div>
                  <div style="padding: 1em; background: #f5f5f5;">Point per kamp</div>
                  <div style="padding: 1em;">Afgørende mål</div>
                  <div style="padding: 1em; background: #f5f5f5;">Plus</div>
                  <div style="padding: 1em;">Minus</div>
                  <div style="padding: 1em; background: #f5f5f5;">Plus/Minus</div>
                  <div style="padding: 1em;">Skud</div>
                  <div style="padding: 1em; background: #f5f5f5;">Skud per kamp</div>
                  <div style="padding: 1em;">Scoringsprocent</div>
                  <div style="padding: 1em; background: #f5f5f5;">Faceoffs vundet</div>
                  <div style="padding: 1em;">Faceoffs tabt</div>
                  <div style="padding: 1em; background: #f5f5f5;">Faceoffprocent</div>
                  <div style="padding: 1em;">Udvisninger</div>
                  <div style="padding: 1em; background: #f5f5f5;">Udvisninger per kamp</div>
                  <div style="padding: 1em;">Udvisningsminutter</div>
                  <div style="padding: 1em; background: #f5f5f5;">Udvisningsminutter per kamp</div>
                </div>
                <div style="flex: 1; text-align: center;">
                  <div style="padding: 1em; background: #f5f5f5;">${dob}</div>
                  <div style="padding: 1em;">${shoots}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${height}</div>
                  <div style="padding: 1em;">${weight}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${gp}</div>
                  <div style="padding: 1em;">${g}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${a}</div>
                  <div style="padding: 1em;">${p}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${ppg}</div>
                  <div style="padding: 1em;">${gwg}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${plus}</div>
                  <div style="padding: 1em;">-${minus}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${plusMinus}</div>
                  <div style="padding: 1em;">${s}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${spg}</div>
                  <div style="padding: 1em;">${sPct}%</div>
                  <div style="padding: 1em; background: #f5f5f5;">${foWon}</div>
                  <div style="padding: 1em;">${foLost}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${foPct}%</div>
                  <div style="padding: 1em;">${pen}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${avgPen}</div>
                  <div style="padding: 1em;">${min}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${avgMin}</div>
                </div>
              </div>
            </div>
          ` : `
            <div style="width:100%">
              <h2 style="text-align:center;">Spillerprofil: #${number} ${name}</h2>
              <div style="text-align: center">
                <img src=${image}" style="max-width: 100%; display: block; margin: 0 auto;" />
                <p style="font-size: 11px; font-style: italic">Kilde: ${source}</p>
              </div>
              <div style="display: flex;">
                <div style="flex: 1;">
                  <div style="padding: 1em; background: #f5f5f5;">Fødselsdato</div>
                  <div style="padding: 1em;">Fatning</div>
                  <div style="padding: 1em; background: #f5f5f5;">Højde</div>
                  <div style="padding: 1em;">Vægt</div>
                  <div style="padding: 1em; background: #f5f5f5;">Kampe spillet</div>
                  <div style="padding: 1em;">Minutter spillet</div>
                  <div style="padding: 1em; background: #f5f5f5;">Redninger</div>
                  <div style="padding: 1em;">Mål imod</div>
                  <div style="padding: 1em; background: #f5f5f5;">Redningsprocent</div>
                  <div style="padding: 1em;">Redninger per kamp</div>
                  <div style="padding: 1em; background: #f5f5f5;">Mål imod per kamp</div>
                </div>
                <div style="flex: 1; text-align: center;">
                  <div style="padding: 1em; background: #f5f5f5;">${dob}</div>
                  <div style="padding: 1em;">${shoots}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${height}</div>
                  <div style="padding: 1em;">${weight}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${gpi}</div>
                  <div style="padding: 1em;">${mip}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${sv}</div>
                  <div style="padding: 1em;">${ga}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${svPct}%</div>
                  <div style="padding: 1em;">${svpg}</div>
                  <div style="padding: 1em; background: #f5f5f5;">${gaa}</div>
                </div>
              </div>
            </div>
          `
        } />
      </div>
    )
  }
}
