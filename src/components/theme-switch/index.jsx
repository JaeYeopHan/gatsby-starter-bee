import React, { Component } from 'react'
import Switch from 'react-switch'

import * as Dom from '../../utils/dom'
import { THEME } from '../../constants'

import './index.scss'

function getTheme(checked) {
  return checked ? THEME.DARK : THEME.LIGHT
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT)
      Dom.removeClassToBody(THEME.DARK)
      break
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK)
      Dom.removeClassToBody(THEME.LIGHT)
      break
    }
  }
}

export class ThemeSwitch extends Component {
  constructor() {
    super()

    this.state = {
      checked: false,
      theme: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const checked = Dom.hasClassOfBody(THEME.DARK)

    this.handleChange(checked)
  }

  handleChange(checked) {
    const theme = getTheme(checked)

    this.setState({ checked, theme })
    toggleTheme(theme)
  }

  render() {
    return (
      <div className="switch-container">
        <label htmlFor="normal-switch">
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            id="normal-switch"
            height={24}
            width={48}
            checkedIcon={<div className="icon checkedIcon">D</div>}
            uncheckedIcon={<div className="icon uncheckedIcon">L</div>}
            offColor={'#d9dfe2'}
            offHandleColor={'#fff'}
            onColor={'#999'}
            onHandleColor={'#282c35'}
          />
        </label>
      </div>
    )
  }
}
