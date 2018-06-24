import React from 'react';

const base_url = "http://newsapi.gugujiankong.com/Handler.ashx?action=";

export default class PCNewsDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            newsItem:[]
        }
    }

    componentDidMount(){
        var fetchOptions = {
            method: 'GET'
        }
        fetch(base_url+"getnewsitem&uniquekey="+
        this.props.params.uniquekey,fetchOptions)
        .then(response=>response.json())
        .then(json=>{
            this.setState({newsItem:json});
            document.title = this.state.newsItem.title;
        })
    }

    createHtml(){
        return {__html: this.state.newsItem.pagecontent}
    }

    render(){
        return(
            <div className="article" dangerouslySetInnerHTML={this.createHtml()} />
        );
    }
}