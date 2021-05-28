<div align="center">

  <img src="./assets/gatsby-starter-bee.png" width="360px" />

</div>

[![Build Status](https://travis-ci.org/JaeYeopHan/gatsby-starter-bee.svg?branch=master)](https://travis-ci.org/JaeYeopHan/gatsby-starter-bee) [![Greenkeeper badge](https://badges.greenkeeper.io/JaeYeopHan/gatsby-starter-bee.svg)](https://greenkeeper.io/)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/JaeYeopHan/gatsby-starter-bee.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/JaeYeopHan/gatsby-starter-bee/alerts/)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100)](https://github.com/ebidel/lighthouse-badge)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4b1962ce-6206-4d8f-9516-63be92294198/deploy-status)](https://app.netlify.com/sites/gatsby-starter-bee/deploys)

<a href="https://twitter.com/JbeeLjyhanll">
<img alt="Twitter: JbeeLjyhanll" src="https://img.shields.io/twitter/follow/JbeeLjyhanll.svg?style=social" target="_blank" />
</a>

![screenshot](./assets/screenshot.png)

In this template...

- 💄 Fira Code 폰트로 코드 하이라이팅 기능
- 😄 Emoji 지원
- 🗣 Twitter, Facebook 등 SNS 공유 지원
- 💬 Disqus, utterances 댓글 기능 지원
- ☕ 'Buy me a coffee' 라는 후원 기능
- 🧙 포스트 작성을 위한 CLI 도구 지원
- 🤖 GA 지원
- ⭐ 여러 UX요소 추가
- ⚙ 별도 설정 파일을 통한 블로그 세부 사항 설정 지원

> [이 블로그 템플릿에 대한 정보](https://www.gatsbyjs.org/starters/JaeYeopHan/gatsby-starter-bee/)

## Demo

- [기본 테마 적용 템플릿 화면](https://gatsby-starter-bee.netlify.com/)

<details>
  <summary>Use case</summary>
  <p>
    <img src="./assets/demos.png" alt="demo-image">
    <ul>
      <li>JBEE.io: https://jbee.io</li>
      <li>Rinae's devlog: https://rinae.dev/</li>
      <li>Seungdols Company: https://seungdols.dev/</li>
      <li>Kooku's log: https://kooku.netlify.com/</li>
      <li>SOSOLOG: https://so-so.dev/</li>
      <li>delivan.dev: https://delivan.dev/</li>
      <li>Jungin's blog: https://jungin.netlify.com/</li>
      <li>Zero's blog: https://awesomezero.com/</li>
      <li>Jonathan's blog: https://www.learningsomethingnew.com/</li>
      <li>@deveely-log: https://deveely-log.netlify.com/</li>
      <li>Hanul's blog: https://hanul-dev.netlify.com/</li>
      <li>Hoons Blog: https://hoons-up.netlify.com/</li>
      <li>JWN.cool: https://jwn.cool</li>
      <li>ugaemi's dev note: https://ugaemi.github.io</li>
      <li>Minsu's Dev Log: https://alstn2468.github.io/</li>
      <li>Yungi's Dev Blog: https://yungis.dev/</li>
      <li>< Taenylog />: https://taeny.dev/</li>
      <li>brouk's devlog: https://brouk-devlog.netlify.com/</li>
      <li>CoodingPenguin's Repository: https://cooding-penguin.netlify.com/</li>
      <li>DevRappers.dev: https://devrappers.dev/</li>
      <li>Let's doodle: https://duduling-blog.netlify.app/</li>
      <li>Hong_Devlog: https://hong-dev.github.io/</li>
      <li>samsara-ku's devlog: https://samsara-ku.dev/</li>
      <li>muse.kim: https://muse.kim/</li>
      <li>Juunone's devlog: https://juunone.netlify.app/</li>
      <li>cereme.dev: https://cereme.dev</li>
      <li>taekki.dev: https://taekki.dev</li>
      <li>kkh913's Developer Blog: https://kkh913.github.io</li>
      <li>jeeneee's devlog: https://jeeneee.dev</li>
      <li>KSP Blog: https://ksp.now.sh</li>
      <li>bobs log: https://undefine.me</li>
      <li>Jane's PS Blog: https://janeljs.github.io</li>
      <li>hedrinker's devlog: https://hexdrinker.dev</li>
    </ul>
  </p>
</details>

> 이 템플릿을 사용하여 블로그를 만들었다면 위 '사용한 블로그' 리스트에 추가해주세요! PR을 통해 등록해주시면 됩니다!

## 😎 Quick Start

### 1. Gatsby 프로젝트를 시작

```sh
# 이 블로그 스타터를 사용하여 gatsby 프로젝트를 시작할 수 있습니다.
npx gatsby new my-blog-starter https://github.com/JaeYeopHan/gatsby-starter-bee
```

> 만약 `npx`를 사용하고 있지 않는다면, [Gatsby Getting Started](https://www.gatsbyjs.org/docs/quick-start) 글을 참고하거나 아래 커맨드를 실행해주세요.

```sh
npm install -g gatsby-cli
gatsby new my-blog-starter https://github.com/JaeYeopHan/gatsby-starter-bee
```

### 2. 이제 로컬에서 확인하실 수 있습니다

```sh
cd my-blog-starter/
npm start
# 브라우저에서 localhost:8000로 접근합니다.
```

### 3. 포스팅을 추가하세요

다음 두 곳에서 포스팅을 추가할 수 있습니다.

- 블로그 포스팅은 `content/blog` 디렉토리에 추가해주세요.
- 웹에 올려둘 이력서는 `content/__about` 디렉토리에 추가해주세요.

> 몇 가지의 메타데이터와 마크다운 문법으로 포스팅을 작성할 수 있습니다.

#### 새로운 포스트를 작성할 때 커맨드라인을 통해 할 수 있습니다

![cli-tool-example](assets/cli-tool-example.gif)

```sh
npm run post
```

위 커맨드를 입력하면 새로운 포스트가 생성됩니다.

👉 **gatsby-post-gen** CLI 도구를 사용합니다. (https://github.com/JaeYeopHan/gatsby-post-gen)

### 4. 메타데이터 수정

`/gatsby-meta-config.js` 파일에서 블로그를 설정하는 여러 요소를 수정할 수 있습니다.

### 5. [Netlify](https://netlify.com)로 배포

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JaeYeopHab/gatsby-starter-bee)

:bulb: github pages를 통해 배포하고 싶다면 아래 npm script를 `package.json`에 추가해주세요.

```json
"scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master -r 'git@github.com:${your github id}/${github page name}.github.io.git'"
}
```

> `gh-pages` 모듈이 필요할 경우 설치가 필요합니다.

## 🧐 입맛에 맞게 바꾸기

### ⚙ 설정

```sh
/root
├── gatsby-browser.js // font, polyfill, onClientRender ...
├── gatsby-config.js // Gatsby config
├── gatsby-meta-config.js // Template meta config
└── gatsby-node.js // Gatsby Node config
```

### ⛑ 구조

```sh
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

### 🎨 스타일

`src/styles` 디렉토리에서 CSS 속성들을 수정할 수 있습니다.

```sh
src/styles
├── code.scss
├── dark-theme.scss
├── light-theme.scss
└── variables.scss
```

### 🍭 꿀팁

- 프로필 사진! (replace file in `/content/assets/profile.png`)
- 파비콘 이미지! (replace file in `/content/assets/felog.png`)
- 헤더의 그라데이션! (\$theme-gradient `/styles/variables.scss`)
- Utterances를 위한 repository를 설정해주세요! (`/gatsby-meta-config.js`의 repository 주소를 교체해주세요.)
  - ⚠️ 이 가이드(https://utteranc.es/)를 꼭 확인해주세요.

## ☕ 마음에 드셨나요?

<a href="https://www.buymeacoffee.com/jbee" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## 🤔 만약에...

만약 현재 미디엄에서 블로그를 운영중이시라면 마이그레이션을 고려해보세요! [medium-to-own-blog](https://github.com/mathieudutour/medium-to-own-blog)!

## :bug: 버그제보

[Issue](https://github.com/JaeYeopHan/gatsby-starter-bee/issues)

## 🎁 기여하기

[Contributing guide](./CONTRIBUTING.md)

## LICENSE

[MIT](./LICENSE)

<div align="center">

<sub><sup>Project by <a href="https://github.com/JaeYeopHan">@Jbee</a></sup></sub><small>✌</small>

</div>
