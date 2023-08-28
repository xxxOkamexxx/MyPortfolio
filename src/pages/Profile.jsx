import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';

const Profile = () => {
  return (
    <div className='container'>
      
      <div className="profile_container 
  text-align: center;">
        {/* <h2 className='headline'>CHIKAGE TAKAHASHI-MOLANDER</h2> */}

        <div className='links_container'>
          <a 
            href="https://www.linkedin.com/in/chikage-takahashi-molander-542a71220/" 
            target='_blank'
          >
            <LinkedInIcon />
          </a>
          
          <a 
            href="mailto:chikage.t.molander@gmail.com"
          >
            <EmailIcon />
          </a>
          
          <a 
            href="https://github.com/xxxOkamexxx"
            target='_blank'
          >
            <GitHubIcon />
          </a>
        </div>

        <hr />
        <p>Creative web developer with strong design skills.
          Experience in architecture and fashion/textile design.
          Diploma as a frontend developer from Medieinstitutet.</p>
      

      </div>

      <Skills />    

      <Portfolio />

    </div>
  )
}

export default Profile
