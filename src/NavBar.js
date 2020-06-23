import React from "react"
import "./index.css"

export default function NavBar(props) {
  const { children } = props
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  )
}
