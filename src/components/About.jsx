function About() {
  return (
    <section className="section">

      <h1 className="section-title">
        About Me
      </h1>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(350px,1fr))",
          gap:"30px"
        }}
      >

        <div className="card">

          <h2 style={{marginBottom:"25px"}}>
            My Journey
          </h2>

          <p className="section-text">
            I come from a farming background and have always
            believed in learning and growth through hard work.

            Currently pursuing Computer Science Engineering
            at Kumaraguru College of Technology, I aspire
            to build impactful technological solutions in
            AI and software development.

            I enjoy taking responsibilities, learning
            emerging technologies and contributing to
            meaningful projects.
          </p>

        </div>

        <div className="card">

          <h2>Strengths</h2>

          <ul
            style={{
              marginTop:"25px",
              lineHeight:"2.2",
              color:"#94A3B8"
            }}
          >
            <li>Taking ownership and responsibilities</li>
            <li>Problem solving mindset</li>
            <li>Continuous learner</li>
            <li>Adaptability</li>
            <li>Team collaboration</li>
          </ul>

          <h2
            style={{
              marginTop:"40px"
            }}
          >
            Growth Areas
          </h2>

          <ul
            style={{
              marginTop:"20px",
              lineHeight:"2.2",
              color:"#94A3B8"
            }}
          >
            <li>Public communication</li>
            <li>Professional networking</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default About;