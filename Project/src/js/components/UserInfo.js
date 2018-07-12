import React from 'react';
import {Row, Col, Tabs, Card} from 'antd';
import PCHeader from './PCHeader';
import Footer from './Footer';

const base_url = "http://newsapi.gugujiankong.com/Handler.ashx?action=";

export default class UserInfo extends React.Component{
    constructor(){
        super();
        this.state = {
            bookmarks:[]
        }
    }

    componentWillMount(){
        var fetchOptions={
            method: 'GET'
        }
        fetch(base_url+"getuc&userid="+localStorage.userID,fetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({bookmarks:json});
            });
    }

    render(){
        // const bookmarksList = this.state.bookmarks.length ?
        //     this.state.bookmarks.map((bookmark)=>{
        //         <Card key={bookmark.uniquekey} title={bookmark.uniquekey} 
        //             extra={<a href={`/details/${bookmark.uniquekey}`}>View</a>}>
        //             <p>{bookmark.Title}</p>
        //         </Card>
        //         })
        //     :"No bookmarks yet.";

        return(
            <div>
                <PCHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <Tabs.TabPane key="1" tab="My Bookmarks">
                            Content:{
                                this.state.bookmarks.map((bookmark)=>{
                                    <Card key={bookmark.uniquekey} title={bookmark.uniquekey} 
                                        extra={<a href={`/details/${bookmark.uniquekey}`}>View</a>}>
                                        {bookmark.Title}
                                    </Card>})
                            }
                            </Tabs.TabPane>
                            <Tabs.TabPane key="2" tab="My Comments"></Tabs.TabPane>
                            <Tabs.TabPane key="3" tab="My Avatar"></Tabs.TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}