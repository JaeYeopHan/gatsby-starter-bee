import React from 'react'

import './index.scss'

export const ThumbnailContainer = React.memo(({ children }) => (
  <div className="thumbnail-container">{children}</div>
))
