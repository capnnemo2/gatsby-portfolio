import React from "react";

interface ProjectProps {
  title: string;
  tech_used: string[];
  description: string;
  screenshot: { src: string; alt: string };
  links: { name: string; link: string }[];
}

export default (props: ProjectProps) => {
  return (
    <div className="project-box">
      <h3>{props.title}</h3>
      <div className="flex">
        <ul>
          {props.tech_used.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <img
          src={props.screenshot.src}
          alt={props.screenshot.alt}
          className="project-screenshot"
        />
      </div>

      <p>{props.description}</p>

      <div className="flex">
        {props.links.map((link, i) => (
          <a key={i} href={link.link} rel="noopener noreferrer" target="_blank">
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
