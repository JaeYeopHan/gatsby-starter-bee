![](./assets/screenshot-pc.png)

# gatsby-starter-bee

> Blog Starter Pack based on [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)

In this template...

- 💄 Code highlight with Fira Code font
- 😄 Emoji (emojione)
- 🗣 Social share feature (Twitter, Facebook)
- 💬 Comment feature (disqus, utterances)
- ☕ 'Buy me a coffee' service
- 🧙 CLI Tool
- 🤖 GA
- ⭐ Enhance UX
- ⚙ Configurable

## Demo

- [Default Theme](https://gatsby-starter-bee.netlify.com/)

## Use case

- [JBEE.io](http://jbee.io)

## 😎 Quick Start

### 1. Create a Gatsby site.

```sh
# create a new Gatsby site using the blog starter
$ npx gatsby new my-blog-starter https://github.com/JaeYeopHan/gatsby-starter-bee
```

### 2. Start developing.

```sh
$ cd my-blog-starter/
$ npm start
# open localhost:8000
```

### 3. Add your content

You can write...

- contents to blog in `content/blog` directory.
- resume `content/__about` directory.

> With markdown syntax and some meta data

#### Support script for creating new post

![](assets/cli-tool-example.gif)

```sh
$ npm run post
```

### 4. Fix meta data

You can fix meta data of blog in `/gatsby-meta-config.js` file.

### 5. Publish with [netlify](https://netlify.com)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JaeYeopHab/gatsby-starter-bee)

if you want to deploy github pages, add following script to package.json

```json
"scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master -r 'git@github.com:${your github id}/${github page name}.github.io.git'"
}
```

## 🧐 Customize!

### Gatsby config

```
/root
├── gatsby-browser.js // font, polyfill, onClientRender ...
├── gatsby-config.js // Gatsby config
├── gatsby-meta-config.js // Template meta config
└── gatsby-node.js // Gatsby Node config
```

### Structure

```
src
├── components // Just component with styling
├── layout // home, post layout
├── pages // routing except post: /(home), /about
├── styles
│   ├── code.scss
│   ├── dark-theme.scss
│   ├── light-theme.scss
│   └── variables.scss
└── templates
    ├── blog-post.js
    └── home.js
```

### Style

You can customize color in `src/styles` directory.

```
src/styles
├── code.scss
├── dark-theme.scss
├── light-theme.scss
└── variables.scss
```

## :bug: Bug reporting

[Issue](https://github.com/JaeYeopHan/gatsby-starter-bee/issues)

## LICENSE

[MIT](./LICENSE)

<div align="center">

<sub><sup>Project by <a href="https://github.com/JaeYeopHan">@Jbee</a></sup></sub><small>✌</small>

</div>
