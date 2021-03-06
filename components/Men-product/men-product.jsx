import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import MenProductStyle from './men-product.scss';
import CategoryLinks from '../Left-menu/category-left-menu';
import DesignersLinks from '../Left-menu/designer-left-menu';
import SortLinks from '../Right-menu/sort-right-menu';
import {Link} from '../../routes';

var MenProductListing = [
    {
        image: "../../static/images/s024greige_front_1.jpg",
        productname: "Rahul Saint Laurent",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$890"
    },
    {
        image: "../../static/images/s024greige_front_1.jpg",
        productname: "Saint Laurent",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$890"
    },
    {
        image: "../../static/images/s024greige_front_1.jpg",
        productname: "Saint Laurent",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$890"
    },
    {
        image: "../../static/images/s024greige_front_1.jpg",
        productname: "Saint Laurent",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$890"
    },
    {
        image: "../../static/images/s029_white_navy_front.jpg",
        productname: "Saint Laurent",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$590"
    },
    {
        image: "../../static/images/s024greige_front_1.jpg",
        productname: "Saint Laurent",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$890"
    },
    {
        image: "../../static/images/s024greige_front_1.jpg",
        productname: "Saint Laurent",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$590"
    },
    {
        image: "../../static/images/s029_white_navy_front.jpg",
        productname: "Saint Laurent",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$390"
    },
    {
        image: "../../static/images/s030_black_front.jpg",
        productname: "CMMN SWDN",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$590"
    }
];


export default class Welcome extends React.Component {
    render() {

        const MenProductBlock = (MenProductListing &&
            Array.isArray(MenProductListing)
            && MenProductListing).map(item => (
                <Col md="3" sm="3">
                <Link href="/men-product-detail">
                    <div className="product-content-block">
                        <img src={item.image} alt={item.image} />
                        <div className="product-name">{item.productname}</div>
                        <div className="product-discription">{item.desc}</div>
                        <div className="price">{item.price}</div>
                    </div>
                    </Link>
                </Col>
        
            )) ||
            "Loading...";
            return (
                <>
                    <div className="product-container">
                        <Container>
                            <Row>
                                <Col md="2" sm="2">
                                    <CategoryLinks />
                                    <DesignersLinks />
                                    <ul>
                                        <li> Male </li>
                                        <li> Female </li>
                                    </ul>
                                </Col>
                                <Col md="8" sm="8">
                                    <Row>
                                        {MenProductBlock}
                                    </Row>
                                </Col>
                                <Col md="2" sm="2">
                                    <SortLinks />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>
            )
    }
  }



