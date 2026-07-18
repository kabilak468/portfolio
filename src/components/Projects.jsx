function Projects(){

  return(

    <section className="section">

      <h1 className="section-title">
        Projects
      </h1>

      <div className="project-grid">

        <div className="card">

          <h2>
            🚍 Smart Bus Tracking IVR
          </h2>

          <p
          className="section-text"
          style={{marginTop:"20px"}}>
            Voice-based bus tracking system
            providing ETA information.
          </p>

        </div>

        <div className="card">

          <h2>
            🍽 Smart Food Waste Management
          </h2>

          <p
          className="section-text"
          style={{marginTop:"20px"}}>
            IoT based food waste monitoring
            system using sensors.
          </p>

        </div>

        <div className="card">

          <h2>
            🐍 Python Projects
          </h2>

          <p
          className="section-text"
          style={{marginTop:"20px"}}>
            To Do List, Password Generator,
            Contact Book applications.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Projects;