import React from 'react';
import {Tabs, Icon} from 'antd';

export default class MobileNav extends React.Component{
    render(){
        return(
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane key="1" tab={<span><Icon type="home"/> Top</span>}>
                    Content 1
                </Tabs.TabPane>
                <Tabs.TabPane key="2" tab={<span><Icon type="rocket"/> Sports</span>}>
                    Content 2
                </Tabs.TabPane>
                <Tabs.TabPane key="3" tab={<span><Icon type="video-camera"/> Entertainment</span>}>
                    Content 3
                </Tabs.TabPane>
                <Tabs.TabPane key="4" tab={<span><Icon type="appstore"/> Technology</span>}>
                    Content 4
                </Tabs.TabPane>
            </Tabs>
        );
    }
}