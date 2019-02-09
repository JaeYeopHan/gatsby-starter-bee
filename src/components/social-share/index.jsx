import React, { Component } from 'react'
import { FacebookIcon } from './facebook-icon'
import { TwitterIcon } from './twitter-icon'
import { shareToTwitter, shareToFacebook } from '../../utils/share'

import './index.scss'

export const SocialShare = ({ title, author }) => {
  const onClickTwitterIcon = e => {
    e.preventDefault()

    return shareToTwitter(
      window.location.href,
      `Recommend on "${title}" written by @${author}`
    )
  }

  const onClickFacebookIcon = e => {
    e.preventDefault()
    return shareToFacebook(window.location.href)
  }

  return (
    <div className="social-share">
      <FacebookIcon onClick={onClickFacebookIcon} />
      <TwitterIcon onClick={onClickTwitterIcon} />
    </div>
  )
}
