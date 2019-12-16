import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import RegisterNewCar from "../common/RegisterNewCar";
import SearchCarRegistration from "../common/SearchCarRegistration";

const GovernmentPage = () => {

    return (
        <div>
            <RegisterNewCar />
            <SearchCarRegistration />
        </div>
    );
}


export default GovernmentPage;