import React from 'react'
import Profile from '../assets/images/profile.jpg'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      <div className='aboutMe-details'>
        <div className="img-container">
          <img src={Profile} alt="" className='aboutMe-img'/>
        </div>

        <div className="detail-container">
          <p><strong>Chikage Takahashi-Molander</strong></p>
          <p>After studying architectural design in Japan and gaining experience as an architect, I pursued fashion and textile design in Sweden. Following internships in the apparel industry, I established a career as a freelance textile/fashion designer and pattern maker. Additionally, I am active as a fashion illustrator. In 2021, I embarked on the Front-End Developer program at Medieinstitutet in Malmö, graduating in May 2023.<br />
          <br/>
          One of my strengths is my constant desire to take on challenges and my unwavering commitment to self-improvement. Currently, I am actively seeking opportunities in the roles of Front-End Developer or UX/UI Designer.</p>
        </div>
      </div>
      <div className='links_container'>
          <a 
            href="https://www.linkedin.com/in/chikage-takahashi-molander-542a71220/" 
            target='_blank'
          >
            <LinkedInIcon style={{width:'40px', height:'40px', backgroundColor:'white', borderRadius:'20px', padding:'4px'}} />
           
          </a>
          
          <a 
            href="mailto:chikage.t.molander@gmail.com"
          >
            <EmailIcon style={{width:'40px', height:'40px', backgroundColor:'white', borderRadius:'20px', padding:'4px'}} />
          </a>
          
          <a 
            href="https://github.com/xxxOkamexxx"
            target='_blank'
          >
            <GitHubIcon style={{width:'40px', height:'40px', backgroundColor:'white', borderRadius:'20px', padding:'4px'}} />
          </a>
        </div>
      
    </div>
  )
}

export default AboutMe
