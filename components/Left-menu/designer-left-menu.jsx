import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import CategoryLinksStyle from './designer-left-menu.scss'

let DesignerLinks = [
    {
        linkslabel:"$525",
    },
    {
        linkslabel:"All Categories",
    },
    {
        linkslabel:"3.1 Phillip Lim",
    },
    {
        linkslabel:"11 By Boris Bidjan Saberi",
    },
    {
        linkslabel:"Clothing",
    },
    {
        linkslabel:"Phillip Lim",
    },
    {
        linkslabel:"424",
    },
    {
        linkslabel:"$525",
    },
    {
        linkslabel:"All Categories",
    },
    {
        linkslabel:"3.1 Phillip Lim",
    },
    {
        linkslabel:"11 By Boris Bidjan Saberi",
    },
    {
        linkslabel:"Clothing",
    },
    {
        linkslabel:"Phillip Lim",
    },
    {
        linkslabel:"424",
    },
    {
        linkslabel:"A-cold-wall",
    }
]

const DesignerLinksBlock = (DesignerLinks &&
    Array.isArray(DesignerLinks)
    && DesignerLinks).map(item => (
        <a href="#">{item.linkslabel}</a>
        
    )) ||
    "Loading...";




    export default (props) => {
        return (
            <>
                <div className="designer-links-block">
                <div><b>All designers</b></div>
                   {DesignerLinksBlock}
                </div>
            </>
        )
    }