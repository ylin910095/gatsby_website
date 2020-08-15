import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Mugshot from "../components/mugshot"
import SEO from "../components/seo"
import Bio from "../contents/index.mdx"
import PageContainer from "../components/pagecontainer"

const OneColFormat = (props) => {
  return (
    <Layout isMobile={props.isMobile} pagewidth={props.pagewidth}>
      <SEO title="Home" />
      <Mugshot style={{display: `block`,
                      width: `300px`,
                      borderRadius: `5%`, 
                      marginLeft: `auto`,
                      marginRight: `auto`,
                      marginBottom: `1.0rem`}}></Mugshot>
      <Bio />
    </Layout>
  )
}

const WrapFormat = (props) => {
  return (
    <Layout isMobile={props.isMobile} pagewidth={props.pagewidth}>
      <SEO title="Home" />
      <Mugshot style={{display: `inline-block`, 
                      float: `left`, // so the text can wrap around the image
                      width: `300px`,
                      borderRadius: `5%`, 
                      margin: `0rem 1rem 0.5rem 0rem`}}></Mugshot>
      <Bio />
    </Layout>
  )
}

class IndexPage extends PageContainer {
  render(props) {
    if (this.state.isMobile){
      return(<OneColFormat 
              isMobile={this.state.isMobile}
              pagewidth={this.state.width} />)
    } else {
      return (<WrapFormat isMobile={this.state.isMobile} 
                          pagewidth={this.state.width} />)
    }
  }
}

export default IndexPage
