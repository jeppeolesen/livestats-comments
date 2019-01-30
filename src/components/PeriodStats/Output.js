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
      period,
      home,
      away,
      homeSavePercentage,
      awaySavePercentage,
      homeFaceoffPercentage,
      awayFaceoffPercentage,
      homeSaves,
      awaySaves
    } = this.props

    return(
      <div>
        <CopyContainer>
          <Copy onClick={e => this.copyOutput(e)}>Kopier</Copy>
        </CopyContainer>

        <TextArea ref={this.outputRef} value={`
          <div style="width:100%;">
            <h2 style="text-align:center;">Kampstatistik efter ${period}. periode</h2>
            <div>
            
              <div style="display:flex;width:100%;padding:1em 0;font-weight:bold;text-align:center;background:#f5f5f5">
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${home.name}
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${away.name}
                </div>
              </div>
              
              <div style="display:flex;width:100%;padding:1em 0;font-weight:normal;text-align:center;">
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${home.goals}
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  Mål
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${away.goals}
                </div>
              </div>
              
              <div style="display:flex;width:100%;padding:1em 0;font-weight:normal;text-align:center;background:#f5f5f5;">
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${home.shots}
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  Skud
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${away.shots}
                </div>
              </div>
              
              <div style="display:flex;width:100%;padding:1em 0;font-weight:normal;text-align:center;">
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${homeSaves}
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  Redninger
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${awaySaves}
                </div>
              </div>

              <div style="display:flex;width:100%;padding:1em 0;font-weight:normal;text-align:center;background:#f5f5f5;">
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${homeSavePercentage}
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  Redningsprocent
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${awaySavePercentage}
                </div>
              </div>

              <div style="display:flex;width:100%;padding:1em 0;font-weight:normal;text-align:center;">
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${home.faceoffs}
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  Faceoffs vundet
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${away.faceoffs}
                </div>
              </div>

              <div style="display:flex;width:100%;padding:1em 0;font-weight:normal;text-align:center;background:#f5f5f5;">
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${homeFaceoffPercentage}%
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  Faceoffprocent
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${awayFaceoffPercentage}%
                </div>
              </div>

              <div style="display:flex;width:100%;padding:1em 0;font-weight:normal;text-align:center;">
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${home.icings}
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  Icings
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${away.icings}
                </div>
              </div>

              <div style="display:flex;width:100%;padding:1em 0;font-weight:normal;text-align:center;background:#f5f5f5;">
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${home.offsides}
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  Offsides
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${away.offsides}
                </div>
              </div>

              <div style="display:flex;width:100%;padding:1em 0;font-weight:normal;text-align:center;">
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${home.pim}
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  Udvisningsminutter
                </div>
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${away.pim}
                </div>
              </div>

              <div style="display:flex;width:100%;padding:1em 0;font-weight:normal;text-align:center;background:#f5f5f5;">
                <div style="flex:1;text-align:center;padding:0 1em;">
                  ${home.player} med ${home.playerShots} skud
                  </div>
                  <div style="flex:1;text-align:center;padding:0 1em;">
                  Flest skud af spiller
                  </div>
                  <div style="flex:1;text-align:center;padding:0 1em;">
                  ${away.player} med ${away.playerShots} skud
                </div>
              </div>
            
            </div>
          </div>
        `} />
      </div>
    )
  }
}
