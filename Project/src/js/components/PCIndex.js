import React from 'react';
import PCHeader from './PCHeader';
import Footer from './Footer';
import PCNewsList from './PCNewsList';
import {Row, Col, Tabs} from 'antd';

export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader />
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <Tabs.TabPane key="1" tab="World">
                                <PCNewsList type="guoji" count={10}/>
                            </Tabs.TabPane>
                            <Tabs.TabPane key="2" tab="Technology">
                                <PCNewsList type="keji" count={10}/>
                            </Tabs.TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Footer />
            </div>
        );
    }
}