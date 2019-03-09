import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import footerContentStyle from "./footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="12" sm="12">
                        <ul className="footer-container">
                            <li><a href="/customer-care">customer care</a></li>
                            <li><a href="#">locations</a></li>
                            <li><a href="#">Editorial Archive</a></li>
                            <li><a href="#">careers</a></li>
                            <li><a href="#">affiliates</a></li>
                            <li><a href="#">sitemap</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Footer;