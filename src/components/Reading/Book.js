import React, { Component } from 'react';
import BookImage from '../star.jpg';
import { ContainerFluid, Row, Col } from 'react-grid-system';

export default class Book extends Component {
    render() {
        return (
            <Container-Fluid>
                <Row className='book-div'>
                    <Col xs={12}>
                        <img className='book-img' src={BookImage} alt='A book image' />
                    </Col>
                    <Col xs={12} className='book-text'>
                        <p className='book-title'>The Start Touched Queen</p>
                    </Col>
                    <Col xs={12} className='book-text'>
                        <p className='book-author'>Roshani Ghokshi</p>
                    </Col>
                </Row>
            </Container-Fluid>
        )
    }
}
