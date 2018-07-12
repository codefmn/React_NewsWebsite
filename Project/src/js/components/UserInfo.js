import React from 'react';
import axios from 'axios';
import {Row, Col, Tabs, Card} from 'antd';
import PCHeader from './PCHeader';
import Footer from './Footer';

const base_url = "http://newsapi.gugujiankong.com/Handler.ashx?action=";

export default class UserInfo extends React.Component{
    constructor(){
        super();
        this.state = {
            userComments:[],
            bookmarks:[]
        }
    }

    componentDidMount(){
        // var fetchOptions={
        //     method: 'GET'
        // }
        // fetch(base_url+"getuc&userid="+localStorage.userID,fetchOptions)
        //     .then(response=>response.json())
        //     .then(json=>{
        //         this.setState({bookmarks:json});
        //     });
        // fetch(base_url+"getusercomments&userid="+localStorage.userID,fetchOptions)
        //     .then(response=>response.json())
        //     .then(json=>{
        //         this.setState({userComments:json});
        //     });

        axios.get(base_url+"getuc&userid="+localStorage.userID)
            .then(response=>{
                this.setState({bookmarks:response.data});
            })
        axios.get(base_url+"getusercomments&userid="+localStorage.userID)
            .then(response=>{
                this.setState({userComments:response.data});
            })
    }

    render(){
        const bookmarksList = this.state.bookmarks.length ?
            this.state.bookmarks.map((bookmark)=>{
                <Card key={bookmark.uniquekey} title={bookmark.uniquekey} 
                    extra={<a href={`/details/${bookmark.uniquekey}`}>View</a>}>
                    <p>{bookmark.Title}</p>
                </Card>
                })
            :"No bookmarks yet.";

        const userCommentsList = this.state.userComments.length ?
            this.state.userComments.map((uComment,index)=>{
            <Card key={index} title={uComment.uniquekey} 
                extra={<a href={`/details/${uComment.uniquekey}`}>View</a>}>
                {uComment.Comments}
            </Card>})
            :"No comments yet.";

        return(
            <div>
                <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <Tabs.TabPane key="1" tab="My Bookmarks">
                                Content:{bookmarksList}
                            </Tabs.TabPane>
                            <Tabs.TabPane key="2" tab="My Comments">
                                Content:{userCommentsList}
                            </Tabs.TabPane>
                            <Tabs.TabPane key="3" tab="My Avatar">
                            </Tabs.TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}