import React from "react";
import "./Search.css"

const Search = props => {
    return (
        <div className="container">
        <h3>Search</h3>
        <form>
                <div className="form-group">
                    <label htmlFor="Topic">Topic</label>
                    <input type="text" className="form-control" placeholder="Enter topic" search={props.search} onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="startYear">Start Year</label>
                    <input type="text" className="form-control" placeholder="Enter start year" startDate={props.startDate} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="endYear">End Year</label>
                    <input type="text" className="form-control" placeholder="Enter end year" endDate={props.endDate} onChange={this.handleInputChange} />
                </div>
                <button className="btn btn-primary" onClick={() => this.handleClick}>Search</button>
        </form>
        </div>
    )
};


export default Search;