import React from "react";
import "./Saved.css";

const SavedItem = props => {
    return (
        <div>
        <div className="row">
        <span className="item">{props.title}</span>
        <button className="btn btn-danger">Delete</button>
        </div>
        <div className="row">
        <input type="text" name="notes" />
        </div>
        </div>
    )
}

export default SavedItem;