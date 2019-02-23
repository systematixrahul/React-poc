import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import homeContentStyle from "./home.scss";
class Home extends Component {
    render() {
        const numbers = ['1', '2', '3', '4', '5'];

        return (
            <div>
            <div className="home-container">
                <Container>
                    <Row>
                        <Col md="6" sm="6">
                            <img src="../static/images/jewelry-1189605.jpg" />
                            <div className="home-top-block">
                                <h4 className="block-heading"><label>Fashion</label>
                                <span>Blue Paradise: SSENSE in Hawai‘i</span>
                                </h4>
                                <label className="ed-CategoryDate-category">Fashion</label>
                               <p>Photographer Brendan George Ko Takes Us To Oahu</p>
                            </div>
                        </Col>
                        <Col md="6" sm="6">
                            <img src="../static/images/jewelry-1189605.jpg" />
                            <div className="home-top-block">
                                <h4 className="block-heading"><label>Fashion</label>
                                <span>Blue Paradise: SSENSE in Hawai‘i</span>
                                </h4>
                                <label className="ed-CategoryDate-category">Fashion</label>
                               <p>Photographer Brendan George Ko Takes Us To Oahu</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="home-mid-container">
            <Container>
                    <Row>
                        <Col md="4" sm="4">
                            <img src="../static/images/jewelry-series-2-1516742.jpg" />
                            <div className="home-top-block">
                                <h4 className="block-heading"><label>Fashion</label>
                                <span>Blue Paradise: SSENSE in Hawai‘i</span>
                                </h4>
                                <label className="ed-CategoryDate-category">Fashion</label>
                               <p>Photographer Brendan George Ko Takes Us To Oahu</p>
                            </div>
                        </Col>
                        <Col md="4" sm="4">
                            <img src="../static/images/jewelry-series-2-1516742.jpg" />
                            <div className="home-top-block">
                                <h4 className="block-heading"><label>Fashion</label>
                                <span>Blue Paradise: SSENSE in Hawai‘i</span>
                                </h4>
                                <label className="ed-CategoryDate-category">Fashion</label>
                               <p>Photographer Brendan George Ko Takes Us To Oahu</p>
                            </div>
                        </Col>
                        <Col md="4" sm="4">
                            <img src="../static/images/jewelry-series-2-1516742.jpg" />
                            <div className="home-top-block">
                                <h4 className="block-heading"><label>Fashion</label>
                                <span>Blue Paradise: SSENSE in Hawai‘i</span>
                                </h4>
                                <label className="ed-CategoryDate-category">Fashion</label>
                               <p>Photographer Brendan George Ko Takes Us To Oahu</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        )
    }
}
export default Home;