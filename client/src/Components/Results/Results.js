import React from "react";
import "./Results.css";

const Results = props => {
    return (
        <div className="container">
            <h3>Results</h3>
            <ul className="list-group">
            {props.children}
            </ul>
        </div>
    )
};

export default Results;