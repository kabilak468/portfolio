import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks
} from "react-icons/si";

function Hero() {
  return (
    <section className="section hero">

      <div>

        <p
          style={{
            color:"#8B5CF6",
            fontSize:"1.1rem",
            marginBottom:"20px",
            fontWeight:"600"
          }}
        >
          HELLO, I'M
        </p>

        <h1 className="hero-title">
          P. <span className="highlight">Kabila</span>
        </h1>

        <h2 className="hero-subtitle">
          Computer Science Student • Python Developer • AI Explorer • IoT Enthusiast
        </h2>

        <p
          className="section-text"
          style={{
            maxWidth:"700px",
            marginTop:"35px"
          }}
        >
          A passionate Computer Science Engineering student at
          Kumaraguru College of Technology with a strong interest
          in Artificial Intelligence, Internet of Things and
          Software Development. I enjoy building innovative
          solutions that solve real-world problems and continuously
          improving my technical and leadership skills.
        </p>

        <div
          style={{
            display:"flex",
            gap:"20px",
            marginTop:"40px",
            flexWrap:"wrap"
          }}
        >
          <button className="btn">
            Explore Portfolio
          </button>

          <button className="btn btn-outline">
            Contact Me
          </button>
        </div>

        <div
          className="social-icons"
          style={{
            marginTop:"45px"
          }}
        >
          <a
            href="https://www.linkedin.com/in/kabilak468"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/kabilak468"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://leetcode.com/u/Kabila_P/"
            target="_blank"
          >
            <SiLeetcode />
          </a>

          <a
            href="https://www.geeksforgeeks.org/profile/kabilaperio13q"
            target="_blank"
          >
            <SiGeeksforgeeks />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;