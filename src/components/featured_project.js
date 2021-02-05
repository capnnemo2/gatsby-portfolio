import React from "react"

export default props => {
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
