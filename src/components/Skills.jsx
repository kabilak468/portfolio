function Skills() {

  const skills = [
    "Python",
    "C",
    "Java Basics",
    "Artificial Intelligence",
    "Internet of Things",
    "Git & GitHub",
    "VS Code",
    "Arduino IDE",
    "Software Development"
  ];

  return (
    <section className="section">

      <h1 className="section-title">
        Skills
      </h1>

      <div className="skill-grid">

        {
          skills.map((skill,index)=>(

            <div
              key={index}
              className="skill-chip"
            >
              {skill}
            </div>

          ))
        }

      </div>

    </section>
  );
}

export default Skills;