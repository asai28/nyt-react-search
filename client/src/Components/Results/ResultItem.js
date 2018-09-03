import React from "react";
import "./Results.css";

const ResultItem = props => {
    return (
        <div id={props.id}>
        <span className="item">{props.title}</span><br/>
        <span>{props.date}</span><br/>
        <button className="btn btn-success">Save</button>
        </div>
    )
}

export default ResultItem;