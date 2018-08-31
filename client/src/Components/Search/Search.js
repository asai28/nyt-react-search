import React from "react";
import Grid from "../Grid/index";
import Button from "../Button/index";
import Input from "../Input/index";

const Search = props => {
    return (
        <div>
        <Grid>
        <Input name={props.name}>Topic</Input>
        <Input name={props.name}>Start Year</Input>
        <Input name={props.name}>End Year</Input>
        <Button>Search</Button>
        </Grid>
        </div>
    )
};


export default Search;