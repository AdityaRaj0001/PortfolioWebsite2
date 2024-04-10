import React from 'react';

const Contact = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <section id="contact" className="contact">
      <div id="social-media">
        <p>Find Me on social media</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/meadityaraj0001/">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com/AdityaR95118819">
            <img src="/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/aditya-raj-72b825223/">
            <img src="/linkedin-icon.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="floating-bg" />
      <div className="copyright">
        Website Built by Addy | © {year} | All Rights reserved
      </div>
    </section>
  );
};

export default Contact;
