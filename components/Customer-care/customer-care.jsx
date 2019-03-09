import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import MenProductStyle from './customer-care.scss';

export default class CustomerCare extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0
        };
    }

    toggle(index) {
        this.setState({
            current: index
        })
    }

    render() {
        return (

            <>
                <div className="customercare-container">
                    <Container>
                        <Row>
                            <Col md="2" sm="2">
                                <ul>
                                    <li><a href="#nogo" onClick={this.toggle.bind(this, 1)}>Product Information</a></li>
                                    <li><a href="#nogo" onClick={this.toggle.bind(this, 2)}>Payment Information</a></li>
                                    <li><a href="#nogo" onClick={this.toggle.bind(this, 3)}>Your Order</a></li>
                                    
                                </ul>
                            </Col>
                            <Col md="8" sm="8">
                                <div style={{ display: "block"}} className={`collapsible ${this.state.current === 1 ? 'open ' : ''}`}>
                                ghgfh gfhgfh gfhgfh gfhgf hgfhgfh
                                </div>
                                <div className={`collapsible ${this.state.current === 2 ? 'open ' : ''}`}>aasasText Payment Information...</div>
                                <div className={`collapsible ${this.state.current === 3 ? 'open ' : ''}`}>Your Order </div>
                            </Col>
                            <Col md="2" sm="2">
                                <div class="span3 customer-care-contact">
                                    <h2>Customer Care</h2>
                                    <p>Please call or SMS us for immediate answers to questions regarding orders and shipping.</p>
                                    <p class="phone-contact-information">
                                        Toll Free <a href="tel:+18776376002">+1 877 637 6002</a></p>
                                    <p class="phone-contact-information">English <a href="tel:+15146005818">+1 514 600 5818</a></p>
                                    <p class="phone-contact-information">French <a href="tel:+15147002078">+1 514 700 2078</a></p>
                                    <p class="available-times">We are available 24 hours a day, 7 days a week.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>

        )
    }
}












