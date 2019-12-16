import React, { useState } from 'react';
import {Button, Form } from 'react-bootstrap';
import DatePicker from '../common/DatePicker';
import { approveCarService } from "../api/api";

const ServiceApprove: React.FC = () => {

    const [approvalId, setApprovalID] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [approvalDate, setApprovalDate] = useState(0);

    const handleServiceSubmit = (e: any) => {
        e.preventDefault();
        approveCarService(regNumber, approvalDate, approvalId);
    }
    const handleServiceDateChange = (date: Date) => {
        if (date instanceof Date && date.getTime) {
            setApprovalDate(date.getTime());
        }
    }
    const handleRegNumberChange = (e: any) => {
        const value = e.target.value as string;
        setRegNumber(value);
    }
    const handleApprovalIDChange = (e: any) => {
        const value = e.target.value as string;
        setApprovalID(value);
    }
    return (
        <Form  onSubmit={handleServiceSubmit}>
            <Form.Label>Service Approval</Form.Label>
            <Form.Group>
                <Form.Label>Reg number</Form.Label>
                <Form.Control type="text" placeholder="Enter Car Reg number" onChange={handleRegNumberChange}/>
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Approval ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Service Approval ID" onChange={handleApprovalIDChange} />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <DatePicker onChange={handleServiceDateChange} />

            <Button onClick={handleServiceSubmit} >Approve</Button>
        </Form>
    );
}
export default ServiceApprove;