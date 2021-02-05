import React from "react"
import Header from "./Header"
import Nav from "./Nav"

const Layout = props => {
  return (
    <div className="layout-grid">
      <Header />
      <Nav />
      {props.children}
    </div>
  )
}

export default Layout
