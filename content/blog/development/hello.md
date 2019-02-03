---
title: 'Welcome Bee starter'
date: 2019-2-1 16:21:13
category: 'development'
---

![](./images/hello.png)

## 1. Code highlighting

1. With [Fira Code](https://github.com/tonsky/FiraCode) font
2. Support highlighting with [prism](https://github.com/PrismJS/prism)
   2-1. Use inline highlighting

```js{3}
import React from 'react'

const TEMPLATE = 'gatsby-starter-bee'

class Foo extends React.Component {
  handleClick = val => {
    if (val === 'bar') {
      return 1
    } else if (val !== 'zoo') {
      return 2
    }
    console.log(`clicked`)
    return 3
  }

  render() {
    return <div>Welcome, Gatsby, ${TEMPLATE}</div>
  }
}
```

## 2. Support Markdown (h2)

1. With [Noto Sans](https://fonts.google.com/specimen/Noto+Sans) font
2. Support header anchoring

### h3

#### h4

##### h5

> quote!

**bold** _italic_

## Support light/dark mode

## 4. Support social sharing feature
