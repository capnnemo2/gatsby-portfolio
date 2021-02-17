import React from "react"
import Layout from "../components/Layout"
import project_store from "../project_store"
import Featured_project from "../components/featured_project"

export default () => {
  const projects = project_store.projects
  return (
    <Layout>
      <div className="content">
        <p>
          These projects were imagined within Ben's brain and crafted with his
          very own two hands. Incredible. Your eyes have been truly blessed this
          day.
        </p>
        {projects.map(project => (
          <Featured_project
            key={project.id}
            title={project.title}
            tech_used={project.tech_used}
            description={project.description}
            screenshot={project.screenshot}
            links={project.links}
          />
        ))}
      </div>
    </Layout>
  )
}
