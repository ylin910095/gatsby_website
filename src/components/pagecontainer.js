import React from "react"

class PageContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 1000, // default width
      isMobile: false
    }
  }
  
  componentDidMount() {
    this.handleWindowSizeChange() // Set width
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    const desktopWidth = 960; // in px
    const minWidth = 300;
    const mobilePad = 20;
    if (window.innerWidth >= desktopWidth) {
      this.setState({ width: desktopWidth, isMobile: false})
    } else if (window.innerWidth > minWidth) {
      this.setState({ width: window.innerWidth-mobilePad, isMobile: true})
    } else (
      this.setState({ width: minWidth-mobilePad, isMobile: true})
    )
  }
}

export default PageContainer