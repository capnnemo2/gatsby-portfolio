import React, {ReactNode} from "react"
import Header from "./Header"
import Nav from "./Nav"

interface LayoutProps {
  children: ReactNode
}

const Layout = (children: LayoutProps) => {
  return (
    <div className="layout-grid">
      <Header />
      <Nav />
      {children.children}
    </div>
  )
}

export default Layout
