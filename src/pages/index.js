// import React from "react"
// import { Router } from "@reach/router"
// import Header from "../components/Header"
// import Nav from "../components/Nav"
// import Home from "./home"
// import About from "./about"
// import Projects from "./projects"
// import Contact from "./contact"
// import Default404 from "./404"

// import "./index.css"

// export default () => {
//   return (
//     <div className="index-grid">
//       <Header />
//       <Nav />
//       <Router basepath="/">
//         <Home path="/" />
//         <About path="/about" />
//         <Projects path="/projects" />
//         <Contact path="/contact" />
//         <Default404 default />
//       </Router>
//       {/* <p className="index">
//         Hello! Welcome to an experiment. We (the royal "we" because there's only
//         one of us) are learning to use CSS grid inside of our first Gatsby
//         project. What do you think?
//       </p> */}
//     </div>
//   )
// }

import React from "react"
import Layout from "../components/Layout"

import project_store from "../project_store"

import "./index.css"

const Index = () => {
  console.log(project_store.projects[0])
  return (
    <Layout>
      <div className="content">
        <p>
          Obviously this site is still in very early development so that Ben can
          learn Gatsby. That's right, even with all that his brain contains,
          there is room for more. Bring on the Gatsby!
        </p>
        <p>
          He's amazing. Seriously, you won't believe how good this guy is. But
          we're going to tell you anyway.
        </p>
        <p>Now we're just adding extra text to see how grid treats this div.</p>
        <p>
          Unfortunately, it looks like adding more to this section of the grid
          is stretching the nav portion, which is interesting—and currently
          confusing...
        </p>
        <p>UPDATE: grid issue resolved. For now. Stay tuned.</p>
      </div>
    </Layout>
  )
}

export default Index
