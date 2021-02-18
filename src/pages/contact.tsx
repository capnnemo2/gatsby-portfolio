import React from "react";
import Layout from "../components/Layout";
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default () => {
  return (
    <Layout>
      <div className="content">
        <p>
          We're not surprised you want to get in touch with Ben. Due to an
          overflow of physical fanmail, however, we insist on digital
          correspondence. You can send an email, check him out on GitHub, and/or
          connect on LinkedIn.
        </p>
        <p>
          Don't be shy. Feel free to peruse my GitHub, check me out on LinkedIn,
          and send me an email.
        </p>
        <div className="flex spread">
          <a
            aria-label="send Ben an email link"
            href="mailto:benjammin234@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaEnvelopeSquare
              className="contact-icon"
              title="Send Ben an email"
            />
          </a>
          <a
            aria-label="go to Ben's GitHub"
            href="https://github.com/capnnemo2"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithubSquare
              className="contact-icon"
              title="Check out Ben's GitHub"
            />
          </a>
          <a
            aria-label="Link to Ben's LinkedIn"
            href="https://www.linkedin.com/in/ben--hernandez/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin
              className="contact-icon"
              title="Check Ben out on LinkedIn"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
};
