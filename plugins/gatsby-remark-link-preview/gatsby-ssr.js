import React from 'react'

import { defaultOption, ID } from './shared/defaultOption'

export const onRenderBody = ({ setHeadComponents }, pluginOption) => {
  const options = { ...defaultOption, ...pluginOption }

  const styles = `
    .preview-notion-container {
      cursor: pointer;
      user-select: none;
      transition: background 120ms ease-in 0s;
      width: 100%;
      display: flex;
      align-items: stretch;
      text-align: left;
      overflow: hidden;
      position: relative;
      color: inherit;
      fill: inherit;
      -webkit-box-shadow: 0px 2px 14px 1px rgba(127,127,127,0.2);
      box-shadow: 0px 2px 14px 1px rgba(127,127,127,0.2);
      border-radius: 3px;
      max-height: 120px;
    }

    .preview-notion-wrapper {
      flex: 4 1 320px;
      padding: 12px 14px 14px;
      width: calc(100% - 6px);
      min-height: 60px;
    }

    .preview-notion-title {
      font-size: 14px;
      line-height: 20px;
      color: rgb(55, 53, 47);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 2px;
    }

    .preview-notion-description {
      font-size: 12px;
      line-height: 16px;
      color: rgba(55, 53, 47, 0.6);
      height: 32px;
      overflow: hidden;
    }

    .preview-notion-url {
      display: flex;
      margin-top: 6px;
    }

    .preview-notion-favicon {
      width: 16px;
      height: 16px;
      min-width: 16px;
      margin-right: 6px;
    }

    .preview-notion-link {
      font-size: 12px;
      line-height: 16px;
      color: rgb(55, 53, 47);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .preview-notion-image-wrapper {
      flex: 1 1 120px;
      min-height: 80px;
      display: block;
      position: relative;
    }

    .preview-notion-image {
      display: block;
      object-fit: cover;
      border-radius: 1px;
      width: 100%;
      height: 100%;
      background-image: cover;
    }
  `

  const style = (
    <style id={ID} key={ID} type="text/css">
      {styles}
    </style>
  )

  return setHeadComponents([style])
}
