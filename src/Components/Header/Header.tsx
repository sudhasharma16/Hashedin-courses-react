import React from 'react'
import logo from "../../assets/react_logo.jpg"
import "./style.css"

interface Props {
    heading: string
}
const Header: React.FC<Props> = ({heading}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid m-2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <h6 style={{color: "white"}}>{heading}</h6>
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row ms-auto me-3">
            <li className="nav-item me-3 me-lg-0">
                <img src={logo} className="rounded-circle" height="45"
              alt="" loading="lazy" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header

