import Work01 from '../assets/images/yogaHero.jpg'
import Work02 from '../assets/images/tront-cupcake-thumbnail.png'
import Work03 from '../assets/images/swapi.png'
import Work04 from '../assets/images/TMDB.png'
import Work05 from '../assets/images/projects.jpg'
import Works01a from '../assets/images/yoga.png'
import Works02a from '../assets/images/tront-cupcake.jpg'
import Works03a from '../assets/images/swapi2.png'
import Works04a from '../assets/images/TMDB2.png'

export const works = [
  {
    id: 1,
    title: 'Landing Page Design',
    category: 'Web Design',
    detail:'Figma, HTML/CSS, JavaScript',
    description: "This project involves the redesign of N-Yoga's website, a yoga studio located in Lund, Sweden. This studio offers a place of relaxation, tranquility, and growth, irrespective of one's background, religion, or tradition. The main goals included creating a clear and modern design, user-friendly navigation, high-quality content, easy course discovery, and effectively conveying the atmosphere of the yoga classes..",
    url: Work01,
    linkText: 'go to netlify (work in progress)',
    link: 'https://lp-design-yogastudio.netlify.app/',
    worksDetailURL: Works01a,
  },
  {
    id: 2,
    title: 'Landing Page ReDesign',
    category: 'Web Design',
    detail:'Figma',
    description: "This is a task to redesign the landing page of Tront Cupcake's website. The current landing page is not only difficult to read but also lacks a clear main heading and call-to-action (CTA). Additionally, important sections such as product listings are missing from the homepage, making it ineffective. The goal is to focus on messaging, visualization, and effective CTAs to improve the overall user experience.",
    url: Work02,
    linkText: null,
    link: null,
    worksDetailURL: Works02a,
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
    worksDetailURL: Works03a,
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
    worksDetailURL: Works04a,
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
    worksDetailURL:'',
  },
  
]