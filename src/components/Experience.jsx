function Experience(){
  return(
    <section className="section">

      <h1 className="section-title">
        Experience
      </h1>

      <div className="timeline">

        <div className="timeline-item">

          <h2>
            Media Handling Team
          </h2>

          <h3
          style={{
            color:"#8B5CF6",
            marginTop:"10px"
          }}>
            Nature Club
          </h3>

          <p className="section-text"
          style={{marginTop:"15px"}}>
            Handling media activities,
            documentation and digital presence
            of the club.
          </p>

        </div>

        <div className="timeline-item">

          <h2>
            KRIP Research Intern
          </h2>

          <p
          className="section-text"
          style={{marginTop:"15px"}}>
            Worked on Smart Food Waste
            Management research project.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Experience;