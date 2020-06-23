import React, { useState, useEffect, useRef } from "react"
import "./index.css"
import DropDownItem from "./DropDownItem"
import { ReactComponent as CogIcon } from "./icons/cog.svg"
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg"
import { CSSTransition } from "react-transition-group"
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg"
//import { ReactComponent as BoltIcon } from "./icons/bolt.svg"

export default function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState("main")
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function SwitchMenu(menu) {
    setActiveMenu(menu)
  }

  function catchHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={catchHeight}
      >
        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
            switchMenu={SwitchMenu}
          >
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={catchHeight}
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowIcon />}
            goToMenu="main"
            switchMenu={SwitchMenu}
          />

          <DropDownItem>Settings</DropDownItem>
          <DropDownItem leftIcon="🦘">Kangaroo</DropDownItem>
          <DropDownItem leftIcon="🐸">Frog</DropDownItem>
          <DropDownItem leftIcon="🦋">Horse?</DropDownItem>
          <DropDownItem leftIcon="🦔">Hedgehog</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  )
}
