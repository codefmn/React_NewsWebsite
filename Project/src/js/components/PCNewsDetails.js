import React from 'react';
import axios from 'axios';
import PCHeader from './PCHeader';
import Footer from './Footer';
import CommentsBlock from './CommentsBlock';

const base_url = "http://newsapi.gugujiankong.com/Handler.ashx?action=";

export default class PCNewsDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            newsItem:[]
        }
    }

    componentDidMount(){
        // var fetchOptions = {
        //     method: 'GET'
        // }
        // fetch(base_url+"getnewsitem&uniquekey="+
        // this.props.params.uniquekey,fetchOptions)
        // .then(response=>response.json())
        // .then(json=>{
        //     this.setState({newsItem:json});
        //     document.title = this.state.newsItem.title;
        // })

        axios.get(base_url+"getnewsitem&uniquekey="+this.props.params.uniquekey)
            .then(response=>{
                this.setState({newsItem:response.data});
                document.title = this.state.newsItem.title;
            })
    }

    createHtml(){
        return {__html: this.state.newsItem.pagecontent}
    }

    render(){
        return(
            <div>
                <PCHeader/>
                <div className="article" dangerouslySetInnerHTML={this.createHtml()} />
                <CommentsBlock ukey={this.props.params.uniquekey}/>
                <Footer/>
            </div>
        );
    }
}