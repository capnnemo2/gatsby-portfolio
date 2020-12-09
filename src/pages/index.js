import React from "react"
import Header from "../components/Header"
import Nav from "../components/Nav"

import "./index.css"

export default function Home() {
  return (
    <div className="index-grid">
      <Header />
      <Nav />
      <p className="index">
        Hello! Welcome to an experiment. We (the royal "we" because there's only
        one of us) are learning to use CSS grid inside of our first Gatsby
        project. What do you think?
      </p>
    </div>
  )
}
