import React from "react"
import Header from "../components/Header"
import Nav from "../components/Nav"

import "./index.css"

export default function Home() {
  return (
    <div className="grid">
      <Nav />
      <Header />
      <p className="index">Hello!</p>
    </div>
  )
}
