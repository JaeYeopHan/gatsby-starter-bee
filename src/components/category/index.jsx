import React from 'react'

import { Item } from './item'
import { rhythm } from '../../utils/typography'

import './index.scss'

export const Category = ({ categories, category, selectCategory }) => {
  return (
    <ul
      className="category-container"
      role="tablist"
      id="category"
      style={{
        margin: `0 -${rhythm(3 / 4)}`,
      }}
    >
      <Item title={'All'} category={category} selectCategory={selectCategory} />
      {categories.map((item, idx) => (
        <Item
          key={idx}
          title={item}
          category={category}
          selectCategory={selectCategory}
        />
      ))}
    </ul>
  )
}
