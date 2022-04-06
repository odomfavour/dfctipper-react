import React from 'react'
import { Modal } from 'react-bootstrap'
import checkedCircle from '../../images/check-circle.png'
import closeCircle from '../../images/close.png'

const SuccessModal = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} centered className='successModal text-white'>
    {/* <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header> */}
    <Modal.Body>
        <div className="d-flex justify-content-end">
            <img src={closeCircle} alt="cancel" className='img-fluid close-btn' onClick={handleClose}/>
        </div>
        <div className="py-3 text-center">
            <img src={checkedCircle} alt="success mark" className='img-fluid' />
            <div className="mt-3">
                <p>Thank you for creating the promotion. Your promotion is published</p>
            </div>
        </div>
    </Modal.Body>
    {/* <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer> */}
  </Modal>
  )
}

export default SuccessModal