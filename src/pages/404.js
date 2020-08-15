import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContainer from "../components/pagecontainer"
 
class NotFoundPage extends PageContainer {
  render(props){
    return(
    <Layout isMobile={this.state.isMobile} 
            pagewidth={this.state.width}>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
    </Layout>
    )
  }
}

export default NotFoundPage