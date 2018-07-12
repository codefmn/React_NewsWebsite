import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

const base_url = "http://newsapi.gugujiankong.com/Handler.ashx?action=";

export default class PCNewsList extends React.Component{
    constructor(){
        super();
        this.state={
            news:[]
        }
    }

    componentDidMount(){
        // var fetchOptions = {
        //     method: 'GET'
        // }
        // fetch(base_url+"getnews&type="+this.props.type
        // +"&count="+this.props.count, fetchOptions)
        // .then(response=>response.json())
        // .then(json=>this.setState({news:json}));

        axios.get(base_url+"getnews&type="+this.props.type+"&count="+this.props.count)
            .then(response=>{
                this.setState({news:response.data});
            })
    }

    render(){
        // const newsList = 
        // // this.state.news.length ?
        //     this.state.news.map((value,index)=>
        //         <li key={index}>
        //             <Link to={`details/${value.uniquekey}`} target="_blank">
        //                 {value.title}
        //             </Link>
        //         </li>)
        // // : "none";
        
        return(
                <ul>
                    {this.state.news.map(oneNews=>
                    <li key={oneNews.uniquekey}>
                        <Link to={`details/${oneNews.uniquekey}`} target="_blank">
                            {oneNews.title}
                        </Link>
                    </li>)}
                </ul>
        );
    
    }
}