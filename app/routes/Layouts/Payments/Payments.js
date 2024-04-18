import React from 'react'
import {
  PaymentsTable
} from './../../Tables/ExtendedTable/components';
import { Container, Row, Col } from './../../../components';
export const Payments = () => (
    <Container>
       <Row className="mb-5"> 
            <Col>
                <PaymentsTable />
            </Col>
        </Row>

      
    </Container>
);
