import React from 'react'

const about = () => {
  return (
    <section className="about-us" id="about">
    <div className="section-header">
      <h1 className="section-heading">About Me</h1>
      <div className="underline" />
    </div>
    <div className="services">
      <div className="service">
        <div className="service-header">
          <i className="fas fa-volleyball-ball" />
          <h3>Interests</h3>
        </div>
        <p className="service-text">
          They include Playing Games both outdoor and online. On a casual day I
          would sing and have a good time with my friends. And yes I do click
          good pictures.
        </p>
      </div>
      <div className="service">
        <div className="service-header">
          <i className="fas fa-keyboard" />
          <h3>Technical Skills</h3>
        </div>
        <p className="service-text">
          HTML, CSS ,JAVASCRIPT, React Environment, DJANGO:- <b>Intermediate</b>
          <br />
          <br />
          Cpp, Python, C :-<b>Intermediate</b>
          <br />
          <br />
        </p>
      </div>
      <div className="service">
        <div className="service-header">
          <i className="far fa-eye" />
          <h3>Experiences</h3>
        </div>
        <p className="service-text">
        <b><i>2023 June - Current</i> as Front End Developer In College's Fest Website team
          </b>
          <br></br>
          <br></br>
          <b><i>2022 Dec - 2023 Jan</i> as Front End WebDev Intern  In{" "}
          <a href="https://www.linkedin.com/posts/aditya-raj-72b825223_i-recently-finished-my-first-ever-internship-activity-7025316947206520832-caR9?utm_source=share&utm_medium=member_desktop">
            Magnimus
          </a>{" "}
          (a fitness-based startup) 
          </b>
        </p>
      </div>
      <div className="service">
        <div className="service-header">
          <i className="fas fa-university" />
          <h3>Education</h3>
        </div>
        <p className="service-text">
          Currently I'm pursuing a Bachelor's of Technology degree{" "}
          <b>at Indian Institute of Technology Ropar</b>. I had done my
          schooling in Dav Public School, Khagaul, Patna, Bihar.
        </p>
      </div>
      <div className="about-us-img-wrapper">
        <img src="/linkedin.jpg" />
      </div>
    </div>
  </section>
  )
}

export default about
