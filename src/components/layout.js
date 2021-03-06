/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { CustomMDXProvider } from "./mdx_color.js"
import Header from "./header"
import "./layout.css"
import "./mdx_color.css"

// Code highlight configuration with gatsby-remark-highlight-code
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

// For latex rendering
require(`katex/dist/katex.min.css`)

deckDeckGoHighlightElement();

// Disable SSR so the webpage doesnt have to render twice
// for mobile devices (because default is desktop 960px width)
class NoSSR extends React.Component {
  state = {
    isClient: false
  }
  componentDidMount() {
     this.setState({ isClient: true })
  }
  render() {
    const { isClient } = this.state
    const { children } = this.props
    return isClient ? children : null;
  }
}

class Layout extends React.Component {
  render(props){
    const data = StaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return (
      <NoSSR>
      <CustomMDXProvider>
        <div style={{ maxWidth: this.props.pagewidth, margin: `0 auto`,}}>
          <Header isMobile={this.props.isMobile}></Header>
          <div
            style={{
              margin: `0 auto`,
              padding: `0.0rem 0.0rem`,
            }}
          >
            <main>
              <div style={{marginTop: `2rem`}}>
                {this.props.children}
              </div>
            </main>
          </div>
        </div>
      </CustomMDXProvider>
      </NoSSR>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
