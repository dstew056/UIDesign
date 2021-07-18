import help from './information.png';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navbar  = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <html>
            <nav className="navbar">
                <h1>
                    MusicBox
                </h1>
                <button className="btn btn-link" onClick={handleShow}><img src={help} style={{height: "30px", width:"30px"}}></img></button>
            </nav>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header>
            <Modal.Title>How to use this app</Modal.Title>
            </Modal.Header>
            <Modal.Body>This app will give you a starting point to generate song ideas. Simply pick a key, and either a 4 or 8 chord progression, and our algorithm will give you a progression! Please consider taking the time to fill out our feedback form. This information is very useful to us, and will help us to refine our algorithm over time.</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
             

    </html>


     );
}
 
export default Navbar ;