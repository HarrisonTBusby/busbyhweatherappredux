import React, { useState } from 'react';
import {Button, Modal,Col} from 'react-bootstrap';
import {getLocalStorage, removeFromLocalStorage} from '../../Services/LocalStorage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Modal/ModalComponent.css';



export default function FavModal() {
  const [show, setShow] = useState(false);
  const [favoriteCities, setFavoriteCities] = useState([]);
  


  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)
    setFavoriteCities(getLocalStorage())};

  return (
    <>
      <Button className='btnColor text-center' onClick={handleShow}>
        Favorites
      </Button>

      <Modal show={show} onHide={handleClose} className='modalBackground'>
        <Modal.Header closeButton>
          <Modal.Title>Favorites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Col>
            {favoriteCities.map(city => {
                return (
                    <div>
                    <p>{city}</p>
                    <button className='btnColor2' onClick={() => {
                        setFavoriteCities(getLocalStorage())
                        removeFromLocalStorage(city)}}>Delete</button>
                    </div>
                )
            })}
            </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}