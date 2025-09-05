import React from "react";

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
            I enjoy music, playing sports like volleyball, table tennis or
            cricket. I try to hit the gym as often as I can. I like to travel or
            just hangout with my friends at the movies. and yes I do play pc
            games and I'm a fan of mini militia also because I play it really
            well. I enjoy a lot of music.
          </p>
        </div>
        <div className="service">
          <div className="service-header">
            <i className="fas fa-keyboard" />
            <h3>Technical Skills</h3>
          </div>
          <p className="service-text">
            NextJs, NestJs, ReactJs, Threejs, Tailwind CSS, GSAP, ShacCN,
            Express, NodeJs, Postgres, Prisma, Docker, SwaggerAPI, WebRTC,
            websockets, Hostinger, Git, CPP, C, Javascript and Typescript are
            the languages/tools I've worked with and I'm comfortable.
          </p>
        </div>
        <div className="service">
          <div className="service-header">
            <i className="far fa-eye" />
            <h3>Experiences</h3>
          </div>
          <p className="service-text">
            <b>
              <i>2024 Jan - Current</i> as Web Development Lead at{" "}
              <a
                href="https://crewtm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-link"
              >
                CREW
              </a>
            </b>
            <br />
            <br />
            <b>
              <i>2024 July - 2024 Dec</i> as Full Stack Developer at{" "}
              <a
                href="https://medinos.in"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-link"
              >
                Medino's
              </a>
            </b>
            <br />
            <br />
            <b>
              <i>2023 Nov - 2024 Feb</i> as Head of Development, In College Tech
              Fest Team
            </b>
            <br />
            <br />
            <b>
              <i>2023 Aug - 2023 Oct</i> as a Freelance Frontend Developer for{" "}
              <a
                href="https://gokapture.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-link"
              >
                GoKapture
              </a>
            </b>
            <br />
            <br />
            <b>
              <i>2023 June - 2023 Oct</i> as Front End Developer in College Cult
              Fest Website Team
            </b>
            <br />
            <br />
            <b>
              <i>2022 Dec - 2023 Jan</i> as Front End WebDev Intern in{" "}
              <a
                href="https://www.linkedin.com/posts/aditya-raj-72b825223_i-recently-finished-my-first-ever-internship-activity-7025316947206520832-caR9?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-link"
              >
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
            I completed my <b>Bachelor's of Technology</b> at{" "}
            <b>Indian Institute of Technology Ropar</b> in May 2025. I had done my schooling
            in Dav Public School, Khagaul, Patna.
          </p>
        </div>
        <div className="about-us-img-wrapper">
          <img src="/linkedin.jpg" />
        </div>
      </div>
    </section>
  );
};

export default about;
