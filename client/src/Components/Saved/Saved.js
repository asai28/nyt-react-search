import React from "react";
import "./Saved.css";

const Saved = props => {
    return (
        <div className="container">
            <h3>Saved</h3>
            <ul className="list-group">
            {props.children}
            </ul>
        </div>
    )
};

export default Saved;
