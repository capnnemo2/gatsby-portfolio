import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
