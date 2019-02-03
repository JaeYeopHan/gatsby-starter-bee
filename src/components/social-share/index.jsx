import React, { Component } from 'react'
import { FacebookIcon } from './facebook-icon'
import { TwitterIcon } from './twitter-icon'
import { shareToTwitter, shareToFacebook } from '../../utils/share'

import './index.scss'

export class SocialShare extends Component {
  onClickTwitterIcon(e) {
    e.preventDefault()
    const url = window.location.href
    const { title, author } = this.props
    const text = `Recommend on "${title}" written by @${author}`

    return shareToTwitter(url, text)
  }

  onClickFacebookIcon(e) {
    e.preventDefault()
    const url = window.location.href

    return shareToFacebook(url)
  }

  render() {
    return (
      <div className="social-share">
        <FacebookIcon onClick={this.onClickFacebookIcon.bind(this)} />
        <TwitterIcon onClick={this.onClickTwitterIcon.bind(this)} />
      </div>
    )
  }
}
