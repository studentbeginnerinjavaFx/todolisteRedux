import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Edit } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";
const Edit_task = ({ el }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newDescription, setNewDescription] = useState(el.description);
  const handlechange = (e) => {
    setNewDescription(e.target.value);
  };
  let id = el.id;
  const handleClick = () => {
    dispatch(Edit({ newDescription, id }));
    handleClose();
  };

  return (
    <>
      <Button
        variant="outline-danger"
        onClick={handleShow}
        className="mb-2 ms-2 pt-1"
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            defaultValue={el.description}
            onChange={handlechange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit_task;
