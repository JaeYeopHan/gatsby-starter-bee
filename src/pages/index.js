import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { uniq } from 'lodash'

import { Layout } from '../layout'
import { Bio } from '../components/bio'
import { Head } from '../components/head'
import { Category } from '../components/category'
import Home from '../templates/home'

import * as Dom from '../utils/dom'
import { SCROLL_Y, HOME_TITLE, CATEGORY_TYPE } from '../constants'

let categoryPosition

export default ({ data, location }) => {
  const [currentCategory, setCategory] = useState(CATEGORY_TYPE.ALL)
  const { siteMetadata } = data.site
  const { countOfInitialPost } = siteMetadata.configs
  const posts = data.allMarkdownRemark.edges
  const category = uniq(posts.map(({ node }) => node.frontmatter.category))

  useEffect(() => {
    categoryPosition = Dom.getElementPosition('#category')(SCROLL_Y)
  }, [])

  const selectCategory = (e, item) => {
    e.preventDefault()

    if (window.scrollY > categoryPosition) {
      window.scrollTo(0, categoryPosition)
    }
    return setCategory(item)
  }

  return (
    <Layout location={location} title={siteMetadata.title}>
      <Head title={HOME_TITLE} keywords={siteMetadata.keywords} />
      <Bio />
      <Category
        category={category}
        currentCategory={currentCategory}
        selectCategory={selectCategory}
      />
      <Home
        currentCategory={currentCategory}
        countOfInitialPost={countOfInitialPost}
        posts={posts}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        configs {
          countOfInitialPost
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
          }
        }
      }
    }
  }
`
