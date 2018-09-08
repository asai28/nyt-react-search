import React from "react";
import axios from "axios";

var keys = require("../keys");
console.log(process.env);

export default {

getArticle: (query, begin_date, end_date) => {
   return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=5c7ebdeb23d84167b5e4c923e06fd2ab", {params: {q: query, begin_date: begin_date, end_date: end_date}})
}    
}