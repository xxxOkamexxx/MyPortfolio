import React from 'react'
import { Card, Placeholder } from 'react-bootstrap'

const Works = () => {
  const works = [
    {
      id: 1,
      title: 'TMDB',
      description: 'Assignment to create a movie app that uses React to retrieve data from an API',
      url: 'src/assets/images/TMDB.png',
      linkText: 'go to netlify',
      link:'https://chikagemolander-tmdb-app.netlify.app'
    },
    {
      id: 2,
      title: 'Projects',
      description: 'Codes created through school assignments and self-study',
      url: 'src/assets/images/projects.png',
      linkText: 'go to Github',
      link:'https://github.com/xxxOkamexxx'
    },
    {
      id: 3,
      title: 'UX design',
      description: 'I am engaging in an initiative for learning UX design, which involves redesigning past apps or websites I have created and tracing existing websites, aiming to complete one page per day.',
      url: 'src/assets/images/1day1page.png',
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
