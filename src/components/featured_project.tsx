import React from "react"

interface ProjectProps {
  title: string,
  tech_used: string[],
  description: string,
  screenshot: string,
  links: {name: string, link: string}[]
}

export default (props: ProjectProps) => {
  return (
    <div className="project-box">
      <h3>{props.title}</h3>
      <ul>
        {props.tech_used.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      <p>{props.description}</p>
      <p>{props.screenshot}</p>
      <div className="flex">
        {props.links.map((link, i) => (
          <p key={i}>{link.name}</p>
        ))}
      </div>
    </div>
  )
}
