import React from 'react'

const SingleProject = ({name,tech_used,image,url}) => {
  return (
    <div className="project">
      <div className="project-text">
        <h2 className="project-name">{name}</h2>
        <h4 className="project-technologies">{tech_used}</h4>
      </div>
      <img src={image} className="project-img" />
      <a
        href={url}
        className="project-link"
        target="_blank"
      >
    Go to Website
      </a>
    </div>
  )
}

export default SingleProject