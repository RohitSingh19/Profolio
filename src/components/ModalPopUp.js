import { Modal, Button } from "react-bootstrap";
function ModalPopUp(props) {
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Just a random fact !!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>{props.text}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalPopUp;