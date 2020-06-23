import React, { useState } from "react"
import "./index.css"

export default function NavItem(props) {
  const [open, setOpen] = useState(false)
  const { icon, children } = props

  function handleClick() {
    setOpen(!open)
  }
  return (
    <li className="nav-item">
      <a href="#f" className="icon-button" onClick={handleClick}>
        {icon}
      </a>
      {open && children}
    </li>
  )
}
