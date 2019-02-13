import React, { Component } from 'react';
import { Container, Col, Row } from 'react-grid-system';
import './Reading.css';
import Book from './Book';

export default class Reading extends Component {
    render() {
        return (
            <Container-Fluid>
                <Row>
                    <Col xs={12} className='title'>
                        <h2 className='reading-title'>Currently Reading</h2>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Container-Fluid>
                        <Row>
                
                            <Col xs={12} md={3}>
                                
                            </Col>
                
                        </Row>
                    </Container-Fluid>
                </Row>
            </Container-Fluid>
        )
    }
}