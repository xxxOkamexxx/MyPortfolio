import { useState } from 'react';
import { Card, Placeholder, Row, Col } from 'react-bootstrap'

import {works} from '../service/workes'
import ModalWorkDisplay from './ModalWorkDisplay';




const Works = () => {
  const [myWork, setMyWork] = useState('')
  const [open, setOpen] = useState(false);
  
  
  const handleClose = () => {
    setOpen(false)
  };

  return (
    <div className='works-container'>
      <Row lg='3' sm='2' xs='1'>
          {works.map(work => (
            <Col key={work.id} >
              <Card 
                className='card' 
                onClick={() => {
                  setOpen(true)
                  setMyWork(work.title)
                }}
              >
                <img className='card-image' src={work.url} alt={work.title} />
                <h4 className='card-title'>{work.title}</h4>
                <p className="card-text">{work.category}</p>
                <p className='card-text'>{work.detail}</p>
                {/* {work.link && (
                  <a href={work.link} className='card-link' target='_blank'>{work.linkText}</a>
                )} */}
              </Card>
            </Col>
          ))}
      </Row>
      {open &&
        <ModalWorkDisplay 
          open={open}
          onClose={handleClose}
          myWork={myWork}
        />
      }
    </div>
  )
}

export default Works
