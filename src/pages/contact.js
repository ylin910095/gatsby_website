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
                <a href="mailto:&#121;&#105;&#110;&#048;&#049;&#064;&#117;&#099;&#104;&#105;&#099;&#097;&#103;&#111;&#046;&#101;&#100;&#117;">
                    &#121;&#105;&#110;&#048;&#049;&#064;&#117;&#099;&#104;&#105;&#099;&#097;&#103;&#111;&#046;&#101;&#100;&#117;  
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