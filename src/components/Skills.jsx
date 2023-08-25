import React from 'react'
import { skills } from '../service/skills'

const Skills = () => {
  return (
    <div className="skills-container">
      <h3 className="headline">Skills</h3>
      <div className="skills-box">
        {skills.map((skill, i) => 
        <div className="skill" key={i}>
          <span> {skill}</span>
        </div>
        )}        
      </div>
    </div>  
  )
}

export default Skills
