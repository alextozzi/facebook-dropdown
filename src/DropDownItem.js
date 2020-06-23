import React from "react"
import "./index.css"

export default function DropDownItem(props) {
  const { children, leftIcon, rightIcon, goToMenu, switchMenu } = props
  return (
    <a
      href="#f"
      className="menu-item"
      onClick={() => goToMenu && switchMenu(goToMenu)}
    >
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  )
}
