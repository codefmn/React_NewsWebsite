import React from 'react';
import {Row, Col} from 'antd';

export default class MobileHeader extends React.Component{
    render(){
        return(
            <header id="mobileHeader">
                <Row>
                    <Col span={24}>
                        <a href="/" className="mobileLogo">
                            <img src="./src/images/icon.png" alt="logo"/>
                            <span>News Website</span>
                        </a>
                    </Col>
                </Row>
            </header>
        )
    }
}