import React from 'react';
import PCHeader from './PCHeader';
import Footer from './Footer';
import PCNewsList from './PCNewsList';
import {Tabs} from 'antd';

export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader />
                <Tabs>
                    <Tabs.TabPane key="1" tab="World">
                        <PCNewsList type="guoji" count={10}/>
                    </Tabs.TabPane>
                    <Tabs.TabPane key="2" tab="Technology">
                        <PCNewsList type="keji" count={10}/>
                    </Tabs.TabPane>
                </Tabs>
                <Footer />
            </div>
        );
    }
}