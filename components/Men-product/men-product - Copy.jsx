import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import MenProductStyle from './men-product.scss';
import CategoryLinks from '../Left-menu/category-left-menu';
import DesignersLinks from '../Left-menu/designer-left-menu';
import SortLinks from '../Right-menu/sort-right-menu';

var MenProductListing = [
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
        image: "../../static/images/s024greige_front_1.jpg",
        productname: "Saint Laurent",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$890"
    },
    {
        image: "../../static/images/s029_white_navy_front.jpg",
        productname: "Saint Laurent",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$490"
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
        price: "$490"
    },
    {
        image: "../../static/images/s030_black_front.jpg",
        productname: "CMMN SWDN",
        desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
        price: "$790"
    }
];

const MenProductBlock = (MenProductListing &&
    Array.isArray(MenProductListing)
    && MenProductListing).map(item => (
        <Col md="3" sm="3">
            <div className="product-content-block">
                <img src={item.image} alt={item.image} />
                <div className="product-name">{item.productname}</div>
                <div className="product-discription">{item.desc}</div>
                <div className="price">{item.price}</div>
            </div>
        </Col>

    )) ||
    "Loading...";

export default (props) => {
    return (
        <>
            <div className="product-container">
                <Container>
                    <Row>
                        <Col md="2" sm="2">
                            <CategoryLinks />
                            <DesignersLinks />
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