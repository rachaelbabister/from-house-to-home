import React from "react";
import { Modal, Button } from "react-bootstrap";
import btnStyles from "../styles/Buttons.module.css";

const ConfirmDelete = ({ show, onHide, onConfirm, title, body }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide} className={`${btnStyles.Button}`} >
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm} className={`${btnStyles.Button} ${btnStyles.Delete}`} >
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDelete;
