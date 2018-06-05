import React from 'react';
import {Row,Col,Button,Menu,Icon,Form} from 'antd';

class PCHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current: "top",
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickname: "Ash",
            userID: 0
        }
    }

    render(){
        const {getFieldProps} = this.props.form;

        const userShow = this.state.hasLogined 
        ?
        <Menu.Item key="logout">
            <Icon type="user" />{this.state.userNickname}&nbsp;
            <Button type="primary">Account</Button>&nbsp;
            <Button type="ghost">Logout</Button>
        </Menu.Item> 
        :
        <Menu.Item key="register">
            <Icon type="user" />Sign Up
        </Menu.Item>;

        return(
            <header>
                <Row>
                    <Col span={1}></Col>
                    <Col span={6}>
                        <a href="/" className="logo">
                            <img src="./src/images/icon.png" alt="logo"/>
                            <span>News Website</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="top">
                                <Icon type="home"/> Top
                            </Menu.Item>
                            <Menu.Item key="sports">
                                <Icon type="rocket"/> Sports
                            </Menu.Item>
                            <Menu.Item key="entertainment">
                                <Icon type="video-camera"/> Entertainment
                            </Menu.Item>
                            <Menu.Item key="technology">
                                <Icon type="appstore"/> Technology
                            </Menu.Item>
                            {userShow}
                        </Menu>
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </header>
        );
    }
}

export default PCHeader = Form.create({})(PCHeader);