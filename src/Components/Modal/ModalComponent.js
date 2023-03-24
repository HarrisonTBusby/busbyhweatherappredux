import React, { useState } from 'react';
import { Button, Modal, Col } from 'react-bootstrap';
import { getLocalStorage, removeFromLocalStorage } from '../../Services/LocalStorage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Modal/ModalComponent.css';
import btnSound from '../../Assets/Boss.mp3';

let audioRef;

function play() {
  audioRef.play();
}

function stop() {
  audioRef.pause();
}

export default function FavModal() {
  const [show, setShow] = useState(false);
  const [favoriteCities, setFavoriteCities] = useState([]);

  const handleClose = () => {
    setShow(false);
    stop();
  };
  const handleShow = () => {
    setShow(true);
    setFavoriteCities(getLocalStorage());
    play();
  };

  return (
    <div>
      <Button className='btnColor text-center' onClick={handleShow}>
        Favorites
      </Button>

      <Modal show={show} onHide={handleClose} className='modalBackground'>
        <Modal.Header closeButton>
          <Modal.Title>Favorites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {favoriteCities.map((city) => {
              return (
                <div>
                  <p>{city}</p>
                  <button
                    className='btnColor2'
                    onClick={() => {
                      setFavoriteCities(getLocalStorage());
                      removeFromLocalStorage(city);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <audio ref={(element) => (audioRef = element)}>
        <source src={btnSound} />
      </audio>
    </div>
  );
}
