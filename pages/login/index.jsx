import React from "react";
import Header from "../../components/Header/header";
import LoginContent from "../../components/Login/login";
import SignupContent from "../../components/Registration/registration";
import { Container, Row, Col } from 'reactstrap';
import Footer from "../../components/Footer/footer"

const LoginSignupContentBlock = props => (
    <div>
        <Header />
        <Container>
                    <Row>
                        <Col md="6" sm="62">
                            <LoginContent /> 
                        </Col>
                        <Col md="6" sm="6">
                            <SignupContent />
                        </Col>
                       
                    </Row>
                </Container>

        
        <Footer />
    </div>
  );

  export default LoginSignupContentBlock;