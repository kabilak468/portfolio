import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

function Contact() {
  return (
    <section className="section">

      <h1 className="section-title">
        Contact
      </h1>

      <div className="contact-grid">

        <a
          href="mailto:kabilaperiyasamy46@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card">

            <FaEnvelope size={35} />

            <h3
              style={{ marginTop: "20px" }}
            >
              Gmail
            </h3>

            <p
              className="section-text"
              style={{ marginTop: "10px" }}
            >
              kabilaperiyasamy46@gmail.com
            </p>

          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/kabilak468"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card">

            <FaLinkedin size={35} />

            <h3
              style={{ marginTop: "20px" }}
            >
              LinkedIn
            </h3>

          </div>
        </a>

        <a
          href="https://github.com/kabilak468"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card">

            <FaGithub size={35} />

            <h3
              style={{ marginTop: "20px" }}
            >
              GitHub
            </h3>

          </div>
        </a>

        <a
          href="https://leetcode.com/u/Kabila_P/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card">

            <SiLeetcode size={35} />

            <h3
              style={{ marginTop: "20px" }}
            >
              LeetCode
            </h3>

          </div>
        </a>

        <a
          href="https://www.geeksforgeeks.org/profile/kabilaperio13q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card">

            <SiGeeksforgeeks size={35} />

            <h3
              style={{ marginTop: "20px" }}
            >
              GeeksForGeeks
            </h3>

          </div>
        </a>

      </div>

    </section>
  );
}

export default Contact;