import React from 'react'

export const Item = ({ title, category, selectCategory }) => (
  <li
    className="item"
    role="tab"
    aria-selected={category === title ? 'true' : 'false'}
  >
    <div onClick={() => selectCategory(title)}>{title}</div>
  </li>
)
