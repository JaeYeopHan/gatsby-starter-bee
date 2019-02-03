import React from 'react'

export const PostContainer = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
)
