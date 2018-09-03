import React from "react";
import Title from "./Components/Title/index";
import Search from "./Components/Search/index";
import Results from "./Components/Results";
import ResultItem from "./Components/Results/ResultItem";
import Saved from "./Components/Saved/index";
import SavedItem from "./Components/Saved/SavedItem";
import API from "./utils/API";
import Input from "./Components/Input/index";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: "",
            startdate: 0,
            enddate: 0,
            articles: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }


    handleSubmit = event => {
        event.preventDefault();
        API.getArticle("Obama", "20170101", "20180101")
        .then(res => this.setState({ articles: res.data.response.docs }))
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
            <Title />
            {/* <Search search={this.state.search} startdate={this.state.startdate} enddate={this.state.enddate} /> */}
            <div className="container">
        <h3>Search</h3>
        <form>
                <div className="form-group">
                    <label htmlFor="Topic">Topic</label>
                    <input className="form-control" placeholder="Enter a topic to search" search={this.state.search} onChange={this.handleInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="startYear">Start Year</label>
                    <input className="form-control"  placeholder="Enter start year" startdate={this.state.startdate} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="endYear">End Year</label>
                    <input className="form-control"  placeholder="Enter end year" enddate={this.state.enddate} onChange={this.handleInputChange}/>
                </div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
        </form>
        </div>
            <Results>
                {(this.state.articles)? this.state.articles.map(article => <li className="list-group-item"><ResultItem 
                    key = {article._id}
                    id = {article._id}
                    title = {article.headline.main}
                    date = {article.pub_date}
                    saved = {false}
                /></li>) : <h4>No articles to display</h4>}
            </Results>
            <Saved>
                {(this.state.articles.saved) ? this.state.articles.map(article => <li className="list-group-item"><SavedItem 
                    key = {article._id}
                    id = {article._id}
                    title = {article.headline.main}
                    saved = {article.saved}
                    notes = {article.notes}
                /></li>): <h4>No saved articles</h4>}
            </Saved>
            </div>
        )
    }

}

export default App;