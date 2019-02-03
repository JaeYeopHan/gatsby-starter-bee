import React, { Component } from 'react'

const src = 'https://utteranc.es/client.js'
const branch = 'master'

export class Utterences extends Component {
  constructor(props) {
    super(props)

    this.myRef = React.createRef()

    this.state = {
      pending: true,
    }
  }

  componentDidMount() {
    const { repo } = this.props

    const utterances = document.createElement('script')
    const utterancesConfig = {
      src,
      repo,
      branch,
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    utterances.onload = () => this.setState({ pending: false })
    this.myRef.current.appendChild(utterances)
  }

  render() {
    return (
      <div className="utterences" ref={this.myRef}>
        {this.state.pending && <div>Loading script...</div>}
      </div>
    )
  }
}
