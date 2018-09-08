import React from "react";
import Title from "./Components/Title/index";
import API from "./utils/API";
import Home from "./Pages/Home";
import Saved from "./Pages/Saved";
import NoMatch from "./Pages/NoMatch";
//import Input from "./Components/Input/index";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
            <Router>
            <div>
            <Title />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/saved" component={Saved}/>
                <Route component={NoMatch}/>
            </Switch>
            </div>
            </Router>
        )
    }

}

export default App;