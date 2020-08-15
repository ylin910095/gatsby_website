import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FaBars, FaGithub } from 'react-icons/fa'
import "./header.css"
import {MakeBurger, MakeGithub} from "./icons.js"

const DesktopHeader = () => {
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
        opacity: '0.86'
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `0.15rem 0.rem`,
        }}
      >
        <h1 style={{ margin: 0 ,  display:`inline`, fontSize:'2.3rem'}}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Yin Lin • <span lang="Chinese">林胤</span> 
          </Link>
        </h1>
        <ul style={{ display:`inline` }}>
            <li style={{ display:`inline` }}><a className="active" href="/" style={{fontSize:'1.5rem'}}>Home</a></li>
            <li style={{ display:`inline` }}><a href="/research" style={{fontSize:'1.5rem'}} >Research</a></li>
            <li style={{ display:`inline` }}><a href="/CV" style={{fontSize:'1.5rem'}} >CV</a></li>
            <li style={{ display:`inline` }}><a href="/contact" style={{fontSize:'1.5rem'}} >Contact</a></li>
            <li style={{ display:`inline`, textAlign: `right`}}>
              <MakeGithub />
            </li>
            
        </ul>
      </div>
      <hr style={{
        color: 'white',
        backgroundColor: 'white',
        height: '0.15rem',
        borderColor : 'white'
        }}/>
    </header>
  )
}

function DropMenu() {
  return (
    <div className="topnav">
      <ul style={{marginTop: '30px'}}>
        <li className="mobile"><a href="/" style={{fontSize:'1.5rem'}}>Home</a></li>
        <li className="mobile"><a href="/research" style={{fontSize:'1.5rem'}} >Research</a></li>
        <li className="mobile"><a href="/CV" style={{fontSize:'1.5rem'}} >CV</a></li>
        <li className="mobile"><a href="/contact" style={{fontSize:'1.5rem'}} >Contact</a></li>
      </ul>
    </div>
  )
}

function DropNothing() {
  return (<></>)
}


class MobileHeader extends React.Component {
  constructor(props) {
    super(props)
    // This binding is necessary to make `this` work in the callback
    this.state ={
      dropdownVis: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.dropdownVis){
      this.setState({dropdownVis: false})
    } else {
      this.setState({dropdownVis: true})
    }
  }  
  
  render() {
      return (
      <header
        style={{
          marginBottom: `1.45rem`,
          opacity: '0.86'
        }}
      >
        <div
          style={{
            margin: `auto`,
            padding: `0.15rem 0.rem`,
          }}
        >
          <h1 style={{ margin: 0 ,  display:`inline`, fontSize:'2.3rem'}}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Yin Lin • <span lang="Chinese">林胤</span> 
            </Link>
          </h1>
          <ul style={{ display:`inline` }}>
              <li style={{ display:`inline`}}><MakeBurger onClick={this.handleClick}></MakeBurger></li>
          </ul>
          {this.state.dropdownVis
           ? <DropMenu />
           : <></>
          }

        </div>
      </header>
    )
  }    
}

class Header extends React.Component {
  render(props){
    if (this.props.isMobile)
      return(<MobileHeader></MobileHeader>)
    else{
      return(<DesktopHeader></DesktopHeader>)
    }
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
