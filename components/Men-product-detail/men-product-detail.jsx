import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import MenProductStyle from './men-product-detail.scss';
import CategoryLinks from '../Left-menu/category-left-menu';
import DesignersLinks from '../Left-menu/designer-left-menu';


var MenProductDetail = [
    {
        image: "../../static/images/s024greige_side.jpg",
        productname: "GOLF SKORT WITH BUTTONS",
        desc: "Gorgeous fabric and fit makes this chic yet functional skort a wardrobe staple",
        price: "$185"
    },
    
   
];


export default class ProductDetail extends React.Component {
    render() {
        const MenProductDetailBlock = (MenProductDetail &&
            Array.isArray(MenProductDetail)
            && MenProductDetail).map(item => (
                    <div className="product-content-block">
                        <img src={item.image} alt={item.image} />
                        <div className="product-name">{item.productname}</div>
                        <div className="product-discription">{item.desc}</div>
                        <div className="price">{item.price}</div>
                    </div>       
            )) ||
            "Loading...";
            return (
                <>
                    <div className="product-container">
                        <Container>
                            <Row>
                                <Col md="3" sm="3">

                                </Col>
                                <Col md="8" sm="8">
                                    <Row>
                                        {MenProductDetailBlock}
                                    </Row>
                                </Col>
                                <Col md="3" sm="3">
                          
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>
            )
    }
  }



