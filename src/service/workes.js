import Work01 from '../assets/images/yogaHero.jpg'
import Work02 from '../assets/images/b2bHero.png'
import Work03 from '../assets/images/swapi.png'
import Work04 from '../assets/images/TMDB.png'
import Work05 from '../assets/images/projects.png'
import Works01a from '../assets/images/yogapc.jpg'
import Works01b from '../assets/images/yogamobil.jpg'
import Works02a from '../assets/images/b2bpc.png'
import Works02b from '../assets/images/b2bmobil.png'

export const works = [
  {
    id: 1,
    title: 'Landing Page Design',
    category: 'UX Design',
    detail:'Figma',
    description: "I redesigned an actual website (randomly chosen) as a project for learning Figma and UX design.",
    url: Work01,
    linkText: '',
    link:'/work/01',
    worksDetailURL:[Works01a, Works01b],
  },
  {
    id: 2,
    title: 'Landing Page Design',
    category: 'UX Design',
    detail:'Figma',
    description: "I redesigned an actual website (randomly chosen) as a project for learning Figma and UX design.",
    url: Work02,
    linkText: '',
    link:'/work/02',
    worksDetailURL:[Works02a, Works02b],
  },
  {
    id: 3,
    title: 'Coding: The Star Wars API',
    category: 'Front-End',
    detail:'React.js',
    description: 'This application was created using React.js as part of my learning process to develop applications that interact with databases.',
    url: Work03,
    linkText: 'go to netlify',
    link:'https://dapper-naiad-d7fe3b.netlify.app',
    worksDetailURL:[],
  },
  {
    id: 4,
    title: 'Coding: The Movie DB',
    category: 'Front-End',
    detail:'React.js',
    description: 'This application was created using React.js as part of my learning process to develop applications that interact with databases.',
    url: Work04,
    linkText: 'go to netlify',
    link:'https://chikagemolander-tmdb-app.netlify.app',
    worksDetailURL:[],
  },
  {
    id: 5,
    title: 'Coding',
    category: 'Front-End',
    detail:'gitHub',
    description: 'Codes created through school assignments and self-study',
    url: Work05,
    linkText: 'go to Github',
    link:'https://github.com/xxxOkamexxx',
    worksDetailURL:[],
  },
  
]