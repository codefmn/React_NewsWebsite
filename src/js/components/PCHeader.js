import React from 'react';
import {Row,Col,Menu,Icon} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

export default class PCHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current: "top",
        }
    }

    render(){
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
                        <Menu selectedKeys={this.state.current} mode="horizontal">
                            <MenuItem key="top">
                                <Icon type="appstore"/> Top
                            </MenuItem>
                            <MenuItem key="sports">
                                <Icon type="appstore"/> Sports
                            </MenuItem>
                            <MenuItem key="entertainment">
                                <Icon type="appstore"/> Entertainment
                            </MenuItem>
                            <MenuItem key="technology">
                                <Icon type="appstore"/> Technology
                            </MenuItem>
                        </Menu>
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </header>
        );
    }
}