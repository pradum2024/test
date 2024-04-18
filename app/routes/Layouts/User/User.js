import React from 'react'
import {
  UserTable
} from './../../Tables/ExtendedTable/components';
import { Container, Row, Col } from './../../../components';
export const User = () => (
    <Container>
       <Row className="mb-5"> 
            <Col>
                <UserTable />
            </Col>
        </Row>

      
    </Container>
);
