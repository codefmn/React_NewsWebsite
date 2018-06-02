import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import PCIndex from './components/PCIndex';
import 'antd/dist/antd.css';

export default class Root extends React.Component{
    render(){
        return(
            <div>
                <PCIndex />
            </div>
        );
    }
}

//entry
ReactDOM.render(
    <Root/>,
    document.getElementById('container')
);