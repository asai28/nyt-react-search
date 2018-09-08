import React from "react";
import {Button, Container, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from "reactstrap";
import API from "../utils/API";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: "",
            start: 0,
            end: 0,
            searchResults: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.fetchResults = this.fetchResults.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            search: this.state.search,
            start: this.state.start,
            end: this.state.end
        });
        console.log(this.state);
        this.fetchResults();
    }

    fetchResults = (topic, start, end) => {
        API.getArticle(topic, start, end)
        .then(res => this.setState({searchResults : res.data.response.docs}))
        .catch(err => console.log(err));
    }

    handleInputChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <div>
            <Container>
            <h3>Search</h3>
            <Form>
                <FormGroup>
                <Label for="topic">Topic</Label>
                <Input type="text" name="search" id="topic" placeholder="Enter topic to search" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                <Label for="startYear">Start Date</Label>
                <Input type="text" name="start" id="startDate" placeholder="Enter start date in format YYYYMMDD" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                <Label for="endYear">Email</Label>
                <Input type="text" name="end" id="endDate" placeholder="Enter end date in format YYYYMMDD" onChange={this.handleInputChange} />
                </FormGroup>
                <Button onClick={this.handleSubmit}>Search</Button>
                </Form>
            </Container>
            
            <br />
            <Container>
            <h3>Results</h3>
            <ListGroup>
                {
                    this.state.searchResults.map(searchResult => <ListGroupItem>{searchResult.headline.main}</ListGroupItem>)
                }
                
            </ListGroup>
            </Container>
            </div>
        )
    }
}

  export default Home;