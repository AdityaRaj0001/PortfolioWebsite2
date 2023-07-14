import React from 'react'
import SingleProject from './SingleProject'
import { ProjectsData } from './datasrc'
const projects = () => {
  return (
  <section className="section-3" id="projects">
  <h1 className="section-heading section-3-heading">My Projects</h1>
  <div className="underline" />
  <div className="projects-wrapper center">
    {
    ProjectsData.map((data)=>{
      return <SingleProject key={data.id} {...data}/>
    })
}
  </div>
</section>
  )
}

export default projects