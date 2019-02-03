import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import { KOREAN, ENGLISH } from '../constants'
export default class AboutIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: ENGLISH,
    }
  }
  render() {
    const { lang } = this.state
    const { data } = this.props
    const resumes = data.allMarkdownRemark.edges

    const resume = resumes
      .filter(({ node }) => node.frontmatter.lang === lang)
      .map(({ node }) => node)[0]

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(
            3 / 4
          )}`,
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: resume.html }} />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            lang
          }
        }
      }
    }
  }
`
