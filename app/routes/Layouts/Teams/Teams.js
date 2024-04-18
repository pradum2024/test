import React, { useState } from 'react';
import { Container, Input, Label, Row, Col } from './../../../components';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {
    TeamsTable
} from './../../Tables/ExtendedTable/components';
export const Teams = () => {
    const [showModal, setShowModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const divClass = `team-container ${isHovered ? 'bg-white pb-3 pt-3 px-2 shadow' : 'mt-2'}`;

    return (
        <Container>
            <Row className="mb-5">
                <Col>
                    <TeamsTable />
                </Col>
            </Row>

            <div className={divClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ cursor: "pointer", transition: ' 0.3s ease' }} onClick={handleOpenModal}>
                <h4 className='text-secondary'>
                    <span className='bg-white pl-3 py-2 mr-2 '><i className="fa fa-plus fa-fw mr-3" /></span>Add a new team
                </h4>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header className=' bg-primary ' closeButton>
                    <Modal.Title className='text-white'>Add a new team</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Label>Team name</Label>
                    <Input name='name' type='text' />
                    <p><span className='text-warning'><i className="fa fa-font fa-fw" /></span>Must be between 1 and 128 characters long.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};
