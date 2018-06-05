import React from 'react';
import {Row,Col,Button,Menu,Icon,Form,Modal} from 'antd';

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

    showModal(value){
        this.setState({modalVisible: value});
    }

    handleClick(e){
        if(e.key="register"){
            this.setState({current:"register"});
            this.showModal(true);
        }else{
            this.setState({current:e.key});
        }
    }

    render(){
        const {getFieldDecorator} = this.props.form;

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
                <Modal title="User" visible={this.state.modalVisible}
                onCancel={()=>this.showModal(false)}
                onOk={()=>this.showModal(false)}
                cancelText="cancel" okText="Done">
                    <p>111</p>
                </Modal>

                <Row>
                    <Col span={1}></Col>
                    <Col span={6}>
                        <a href="/" className="logo">
                            <img src="./src/images/icon.png" alt="logo"/>
                            <span>News Website</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu selectedKeys={[this.state.current]} mode="horizontal"
                        onClick={this.handleClick.bind(this)}>
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