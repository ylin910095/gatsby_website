import React from "react"
import { FaBars, FaGithub } from 'react-icons/fa'
import "./icons.css"

export const MakeGithub = () => {
    return(
      <span className="iconBorder">
        <a className="githublink" href="https://github.com/ylin910095">
          <FaGithub className="githubicon" size={"1.5rem"}/>
        </a>
      </span>
    )
}

export const MakeBurger = ({onClick}) => {
    return(
      <span className="burgerBorder" onClick={onClick}>
        <FaBars color={"white"} size={"1.5rem"}/>
      </span>
    )
}

