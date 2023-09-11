import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const ModalWorkDisplay = ({open, onClose ,myWork}) => {

  return (
    <>
      <Modal 
        show={open} 
        onHide={onClose} 
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{myWork.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='modal-description-container'>
            <p>{myWork.category}</p>
            <p>{myWork.detail}</p>
            <p>{myWork.description}</p>
            { myWork.link && (
              <p><a href={myWork.link} target='_blank'>{myWork.linkText}</a></p>
            )}
          </div>

          <div className='modal-img-container'>
            <img src={myWork.worksDetailURL} className='modal-img'/>   
          </div>
        
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>    
    </>
  )
}

export default ModalWorkDisplay
