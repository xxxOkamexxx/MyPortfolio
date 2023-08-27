import React from 'react'
import { Card, Placeholder } from 'react-bootstrap'
import Work01 from '../assets/images/TMDB.png'
import Work02 from '../assets/images/projects.png'
import Work03 from '../assets/images/1day1page.png'

const Works = () => {

  const works = [
    {
      id: 1,
      title: 'TMDB',
      description: 'This application was created using React.js as part of my learning process to develop applications that interact with databases.',
      url: Work01,
      linkText: 'go to netlify',
      link:'https://chikagemolander-tmdb-app.netlify.app'
    },
    {
      id: 2,
      title: 'Projects',
      description: 'Codes created through school assignments and self-study',
      url: Work02,
      linkText: 'go to Github',
      link:'https://github.com/xxxOkamexxx'
    },
    {
      id: 3,
      title: 'UX design',
      description: 'When developing apps and websites, I thoroughly grasp user concerns and business objectives, using them as a foundation for generating ideas. Using these concepts, I formulate wireframes and prototypes.',
      url: Work03,
    },
  ]


  return (
    <div className='works-container'>
      {works.map(work => (
        <Card className='card' key={work.id}>
          <img className='card-image' src={work.url} alt={work.title} />
          <h4 className='card-title'>{work.title}</h4>
          <p className='card-text'>{work.description}</p>
          {work.link && (
            <a href={work.link} className='card-link'>{work.linkText}</a>
          )}
        </Card>
      ))}
      
    </div>
  )
}

export default Works
