import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContainer from "../components/pagecontainer"
import cv from "../assets/CV_yin_lin.pdf"

 
class CVPage extends PageContainer {
  render(props){
    return(
    <Layout isMobile={this.state.isMobile} 
            pagewidth={this.state.width}>
        <SEO title="CV" />
        <h3>
          <a href={cv} download="yin_lin_cv.pdf">CV</a> [PDF]
        </h3>
    </Layout>
    )
  }
}

export default CVPage