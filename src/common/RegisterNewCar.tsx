import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { registerNewCar } from "../api/api";
import DatePciker from "./DatePicker";
import DatePicker from "./DatePicker";

const RegisterNewCar: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    const [currentRegNumber, setRegnumber] = useState("");
    const [currentPurchaseDate, setCurrentPurchaseDate] = useState(0);
    const [isRegistering, setIsRegistering] = useState(false);

    const closeModal = () => {
        setShowModal(false);
        setRegnumber("");
        setCurrentPurchaseDate(0);
    }

    const handleRegNumberChange = (e: any) => {
        e.preventDefault();
        const value = e.target.value as string;
        setRegnumber(value.trim());
    }

    const handlePurchaseDateChange = (date: Date) => {
        if (date instanceof Date && date.getTime) {
            setCurrentPurchaseDate(date.getTime());
        }
    }

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        // todo: some validation on both values
        setIsRegistering(true);
        registerNewCar(currentRegNumber, currentPurchaseDate).then(() => {
            closeModal();
        }, err => {
            console.log("oops!");
        })
    }

    const isCurrentRegNumberValid = () => currentRegNumber.length === 8;

    return (
        <div>
            <Button onClick={() => setShowModal(true)}>Register new car</Button>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Registera a new car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Label>Registration number:</Form.Label>
                        <Form.Control
                            isValid={isCurrentRegNumberValid()} 
                            isInvalid={!isCurrentRegNumberValid()}
                            type="text"
                            value={currentRegNumber}
                            placeholder="EV123456"
                            onChange={handleRegNumberChange}
                        />
                        <br />
                        <Form.Label>Purchase date:</Form.Label>
                        <DatePicker onChange={handlePurchaseDateChange} />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={isRegistering} variant="primary" onClick={handleFormSubmit}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RegisterNewCar;