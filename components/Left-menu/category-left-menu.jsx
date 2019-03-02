import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import CategoryLinksStyle from './category-left-menu.scss'

let CategoryLinks = [
    {
        linkslabel: "Accessories",
        accessories: [
            {manaccessories: "Blankets"},
            {manaccessories: "Eyewear"},
            {manaccessories: "Gloves"},
            {manaccessories: "Hats"},
            {manaccessories: "Jewelry"}
        ]
    },
    {
        linkslabel: "Bags",
        accessories: [
            {manaccessories: "Blankets"},
            {manaccessories: "Eyewear"},
            {manaccessories: "Gloves"},
            {manaccessories: "Hats"},
            {manaccessories: "Jewelry"}
        ]
    },
    {
        linkslabel: "Clothing",
        accessories: [
            {manaccessories: "Blankets"},
            {manaccessories: "Eyewear"},
            {manaccessories: "Gloves"},
            {manaccessories: "Hats"},
            {manaccessories: "Jewelry"}
        ]
    },
    {
        linkslabel: "Shoes",
        accessories: [
            {manaccessories: "Blankets"},
            {manaccessories: "Eyewear"},
            {manaccessories: "Gloves"},
            {manaccessories: "Hats"},
            {manaccessories: "Jewelry"}
        ]
    }
    
]


const CategoryLinksBlock = (CategoryLinks &&
    Array.isArray(CategoryLinks)
    && CategoryLinks).map(item => (
        <li>
            <a href="#">{item.linkslabel}</a>
            {item.accessories && Array.isArray(item.accessories) &&
            <ul>
                {item.accessories.map(subCategory=>
                    <li>
                       <a href="#">{subCategory.manaccessories}</a>
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
                <div><a href="/all-category"><b>All categories</b></a></div>
                <ul>
                    {CategoryLinksBlock}
                </ul>
            </div>
        </>
    )
}