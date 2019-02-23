import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import SortLinksStyle from './sort-right-menu.scss'

let SortLinks = [
    {
        linkslabel:"Latest arrivals",
    },
    {
        linkslabel:"Trending",
    },
    {
        linkslabel:"Low to high",
    },
    {
        linkslabel:"High to low",
    }
]

const SortLinksBlock = (SortLinks &&
    Array.isArray(SortLinks)
    && SortLinks).map(item => (
        <a href="#">{item.linkslabel}</a>
    )) ||
    "Loading...";

    export default (props) => {
        return (
            <>
                <div className="sort-links-block float-right">
                    <div><b>Sort</b></div> 
                   {SortLinksBlock}
                </div>
            </>
        )
    }