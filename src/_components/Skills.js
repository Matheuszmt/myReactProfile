import './Skills.css'

function Skills () {
  return (
    <div className="skills">
      {/* FRONT: Hard Skills */}
      <div className="skills-front">
        <div className="skills-front-content">
            <h1>Hard Skills</h1>
          <p>Back-end : Java</p>
          <p>Banco de dados: MySQL</p>
          <p>Desenvolvimento web: HTML, CSS, React</p>
          <p>Versionamento: Git, GitHub</p>
          <p>Cloud Computing: AWS</p>
        </div>
      </div>

      {/* BACK: Soft Skills */}
      <div className="skills-back">
        <h1>Soft Skills</h1>
        <p>Comunicação</p>
        <p>Trabalho em equipe</p>
        <p>Adaptabilidade</p>
        <p>Organização</p>
      </div>
    </div>
  )
}

export default Skills
