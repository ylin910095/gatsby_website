import React from "react"

function getPageSize() {
  const desktopWidth = 960; // in px
  const minWidth = 300;
  const mobilePad = 20;
  if (typeof window == `undefined`) {
    return [-1, false];
  } else if (window.innerWidth >= desktopWidth) {
    return [desktopWidth, false]
  } else if (window.innerWidth > minWidth) {
    return [window.innerWidth-mobilePad, true]
  } else {
    return [minWidth - mobilePad, true]
  }
}

class PageContainer extends React.Component {
  constructor(props) {
    super(props)
    var [width, isMobile] = getPageSize();
    this.state = {
      width: width, // default width
      isMobile: isMobile
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
    var [width, isMobile] = getPageSize();
    this.setState({ width: width, isMobile: isMobile})
  }
}
export default PageContainer