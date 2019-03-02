import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from 'reactstrap';
import headerStyle from "./header.scss";
import globalStyle from "../../components/Global/Global.scss";
import {Link} from '../../routes';


class Header extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Systematix</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet" />
                    <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
                </Helmet>
                <Container className="header">
                    <Row>
                        <Col md="5" sm="5">
                            <ul>
                                <li><Link href="/men-product"><a>Men</a></Link></li>
                                <li><Link href="/#"><a>Women</a></Link></li>
                                <li><Link href="/#"><a>Search</a></Link></li>
                            </ul>
                        </Col>
                        <Col md="2" sm="2" ><div className="logo"><Link href="/index"><a>Systematix</a></Link></div></Col>
                        <Col md="5" sm="5">
                            <ul className="float-right">
                                <li><a href="#">English</a></li>
                                <li><a href="/login">Login</a></li>
                                <li><a href="#">Wishlist</a></li>
                                <li><a href="#">shopping bag (0)</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};
export default Header;