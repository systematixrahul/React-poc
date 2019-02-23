import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import CategoryLinksStyle from './category-left-menu.scss'

let CategoryLinks = [
    {
        linkslabel: "Accessories",
        accessories: [
            {
            car1: "Ford",
            car2: "Ford"
        }
    ]
    },
    {
        linkslabel: "Bags",
    },
    {
        linkslabel: "Clothing",
    },
    {
        linkslabel: "Shoes",
    }
    
]
//CategoryLinks[0].linkslabel.map(accessories => accessories.car1.map(cat => console.log(car1.name)));

const CategoryLinksBlock = (CategoryLinks &&
    Array.isArray(CategoryLinks)
    && CategoryLinks).map(item => (
        <li>
            <a href="#">{item.linkslabel}</a>
            <ul>
                <li>
                    <a href="#">{item.linkslabel.accessories}</a>
                </li>
                
            </ul>
        </li>
        

    )) ||
    "Loading...";

export default (props) => {
    return (
        <>
            <div className="category-links-block">
                <div><b>All categories</b></div>
                <ul>
                    {CategoryLinksBlock}
                </ul>
            </div>
        </>
    )
}