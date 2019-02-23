import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import CategoryLinksStyle from './category-left-menu.scss'

let CategoryLinks = [
    {
        linkslabel: "Accessories",
        accessories: [
            {car: "Ford"},
            {car: "Ford 1"},
            {car: "Ford 2"}
        ]
    },
    {
        linkslabel: "Bags",
        accessories: [
            {car: "Ford"},
            {car: "Ford 1"},
            {car: "Ford 2"}
        ]
    },
    {
        linkslabel: "Clothing",
        accessories: [
            {car: "Ford"},
            {car: "Ford 1"},
            {car: "Ford 2"}
        ]
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
            {item.accessories && Array.isArray(item.accessories) &&
            <ul>
                {item.accessories.map(subCategory=>
                    <li>
                       <a href="#">{subCategory.car}</a>
                    </li>
                )}
                
                
            </ul>}
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