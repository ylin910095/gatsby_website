import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContainer from "../components/pagecontainer"
import { FaGithub, FaEnvelope} from 'react-icons/fa'

 
class ContactPage extends PageContainer {
  render(props){
    return(
    <Layout isMobile={this.state.isMobile} 
            pagewidth={this.state.width}>
        <SEO title="Contact" />
        <div>
            <div style={{display: `inline-block`, marginRight: `0.5rem`}}>
                <FaEnvelope size={"1.2rem"}/>
            </div>
            <div style={{display: `inline`}}>
                <a href="mailto:yin01@mit.edu">
                    yin01@mit.edu  
                </a>
            </div>
        </div>
        <div>
            <div style={{display: `inline`, marginRight: `0.5rem`}}>
                <FaGithub size={"1.2rem"}/>
            </div>
            <div style={{display: `inline`}}>
                <a href="https://github.com/ylin910095">
                github.com/ylin910095  
                </a>
            </div>
        </div>
    </Layout>
    )
  }
}

export default ContactPage