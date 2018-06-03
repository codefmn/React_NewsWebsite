import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import MediaQuery from 'react-responsive';
import PCIndex from './components/PCIndex';
import MobileIndex from './components/MobileIndex';
import 'antd/dist/antd.css';

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <PCIndex />
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <MobileIndex />
                </MediaQuery>
            </div>
        );
    }
}

//entry
ReactDOM.render(
    <Root/>,
    document.getElementById('container')
);