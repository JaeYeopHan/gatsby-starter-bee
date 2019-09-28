<div align="center">

![](./assets/gatsby-starter-bee.png)

</div>

# gatsby-starter-bee

![](./assets/screenshot-pc.png)

[![Build Status](https://travis-ci.org/JaeYeopHan/gatsby-starter-bee.svg?branch=master)](https://travis-ci.org/JaeYeopHan/gatsby-starter-bee) [![Greenkeeper badge](https://badges.greenkeeper.io/JaeYeopHan/gatsby-starter-bee.svg)](https://greenkeeper.io/)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/JaeYeopHan/gatsby-starter-bee.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/JaeYeopHan/gatsby-starter-bee/alerts/)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100)](https://github.com/ebidel/lighthouse-badge)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4b1962ce-6206-4d8f-9516-63be92294198/deploy-status)](https://app.netlify.com/sites/gatsby-starter-bee/deploys)

<a href="https://twitter.com/JbeeLjyhanll">
<img alt="Twitter: JbeeLjyhanll" src="https://img.shields.io/twitter/follow/JbeeLjyhanll.svg?style=social" target="_blank" />
</a>

[한국어🇰🇷](./README.ko.md)

> Blog Starter Pack based on [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)

In this template...

- 💄 Code highlight with Fira Code font
- 🧙 CLI Tool
- 😄 Emoji (emojione)
- 🗣 Social share feature (Twitter, Facebook)
- 💬 Comment feature (disqus, utterances)
- ☕ 'Buy me a coffee' service
- 🤖 GA
- ⭐ Enhance UX
- ⚙ Configurable

> [Gatsby Starters Docs](https://www.gatsbyjs.org/starters/JaeYeopHan/gatsby-starter-bee/)

## Demo

- [Default Theme](https://gatsby-starter-bee.netlify.com/)

## Use case

- [JBEE.io](https://jbee.io)
- [Rinae's devlog](https://rinae.dev/)
- [Seungdols Company](https://seungdols.dev/)
- [Kooku's log](https://kooku.netlify.com/)
- [SOSOLOG](https://so-so.dev/)
- [delivan.dev](https://delivan.dev/)
- [Jungin's blog](https://jungin.netlify.com/)

> If you're using this template, Please Pull Request for `Use case`!

## 😎 Quick Start

### 1. Create a Gatsby site.

```sh
# create a new Gatsby site using the blog starter
$ npx gatsby new my-blog-starter https://github.com/JaeYeopHan/gatsby-starter-bee
```

> If you are not using `npx`, following [Gatsby Getting Started](https://www.gatsbyjs.org/docs/quick-start)

```sh
$ npm install -g gatsby-cli
$ gatsby new my-blog-starter https://github.com/JaeYeopHan/gatsby-starter-bee
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

:bulb: if you want to deploy github pages, add following script to package.json

```json
"scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master -r 'git@github.com:${your github id}/${github page name}.github.io.git'"
}
```

## 🧐 Customize!

### ⚙ Gatsby config

```
/root
├── gatsby-browser.js // font, polyfill, onClientRender ...
├── gatsby-config.js // Gatsby config
├── gatsby-meta-config.js // Template meta config
└── gatsby-node.js // Gatsby Node config
```

### ⛑ Structure

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

### 🎨 Style

You can customize color in `src/styles` directory.

```
src/styles
├── code.scss
├── dark-theme.scss
├── light-theme.scss
└── variables.scss
```

### 🍭 Tips (You can change...)

- Profile image! (replace file in `/content/assets/profile.png`)
- Favicon image! (replace file in `/content/assets/felog.png`)
- Header gradient! (\$theme-gradient `/styles/variables.scss`)
- Utterances repository! (replace repository address in `/gatsby-meta-config.js`)

## ☕ Like it?

<a href="https://www.buymeacoffee.com/jbee" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## 🤔 If...

If you are currently writing in the Medium, consider migration with [medium-to-own-blog](https://github.com/mathieudutour/medium-to-own-blog)!

## :bug: Bug reporting

[Issue](https://github.com/JaeYeopHan/gatsby-starter-bee/issues)

## 🎁 Contributing

[Contributing guide](./CONTRIBUTING.md)

## LICENSE

[MIT](./LICENSE)

<div align="center">

<sub><sup>Project by <a href="https://github.com/JaeYeopHan">@Jbee</a></sup></sub><small>✌</small>

</div>
