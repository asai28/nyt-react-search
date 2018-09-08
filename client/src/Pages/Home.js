import React from "react";
import {Button, Container, Form, FormGroup, Label, Input,  Table, Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";
import Moment from 'react-moment';
import API from "../utils/API";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: "",
            start: 0,
            end: 0,
            searchResults: [],
            modal: false,
            note: "",
            author: "",
            id: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.fetchResults = this.fetchResults.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            search: this.state.search.trim(),
            start: this.state.start.trim(),
            end: this.state.end.trim()
        });
        console.log(this.state);
        this.fetchResults(this.state.search,this.state.start, this.state.end );
    }

    toggle() {
        this.setState({
          modal: !this.state.modal,
          id: this.state.id
        });
      }

    fetchResults = (topic, start, end) => {
        API.getArticle(topic, start, end)
        .then(res => {
            this.setState({searchResults : res.data.response.docs});
            console.log(res.data.response.docs)
        })
        .catch(err => console.log(err));
    }

    saveResult = () => {

        API.saveArticle(this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err));

        this.toggle();
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
                <Input type="text" name="start" id="start" placeholder="Enter start date in format YYYYMMDD" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                <Label for="endYear">End Date</Label>
                <Input type="text" name="end" id="end" placeholder="Enter end date in format YYYYMMDD" onChange={this.handleInputChange} />
                </FormGroup>
                <Button onClick={this.handleSubmit}>Search</Button>
            </Form>
            </Container>
            
            <br />
            <Container>
            <h3>Results</h3>
                {this.state.searchResults ? 
                    <Table>
                <thead>
                <tr>
                    <th>Headline</th>
                    <th>Link URL</th>
                    <th>Date published</th>
                    <th>Save Notes</th>
                </tr>
                </thead>
                <tbody>
                
                    {
                    this.state.searchResults.map((searchResult, index) => 
                    <tr>
                    <td>{searchResult.headline.main}</td>
                    <td><a href={searchResult.web_url} alt="Link to site" target="_blank">{searchResult.web_url}</a></td>
                    <td><Moment format="YYYY/MM/DD">{searchResult.pub_date}</Moment></td>
                    <td><Button name="id" id={index} className="btn btn-danger" align="right" onClick={this.toggle}>Add a Note</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add a note</ModalHeader>
                        <ModalBody>
                        <div>
                        <FormGroup>
                            <Label for="author">Author</Label>
                            <Input type="text" name="author" id="author" placeholder="Enter your name" onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="note">Note</Label>
                            <Input type="text" name="note" id="note" placeholder="Enter a note" onChange={this.handleInputChange} />
                        </FormGroup>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.saveResult}>Save Note</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                        </Modal>
                    </td>
                    </tr>)
                    }
                
                </tbody>
            </Table> : <h3>No results to display</h3>
            }
            </Container>
            </div>
        )
    }
}

  export default Home;