import React from 'react'

import './index.scss'

export const SponsorButton = ({ sponsorId }) => (
  <div className="sponsor-button">
    <a
      className="bmc-button"
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.buymeacoffee.com/${sponsorId}`}
    >
      <img
        src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span>Buy me a coffee</span>
    </a>
  </div>
)
