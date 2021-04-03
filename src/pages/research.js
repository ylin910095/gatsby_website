import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Research from "../contents/research.mdx"

import PageContainer from "../components/pagecontainer"
 
class ResearchPage extends PageContainer {
  render(props){
    return(
    <Layout isMobile={this.state.isMobile} 
            pagewidth={this.state.width}>
        <SEO title="Publications" />
        <Research />
    </Layout>
    )
  }
}

export default ResearchPage