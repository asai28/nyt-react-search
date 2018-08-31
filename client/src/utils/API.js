import axios from "axios";
import "./dotenv";

export default {

getArticle: function(query){
   axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=" + apiKey, {params: {q: query}}).then(function(response){
    return response;
}).catch(function(err){
    console.log(err);
});
}    
}