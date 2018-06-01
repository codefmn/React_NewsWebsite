import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css';

export default class Root extends React.Component{
    render(){
        return(
            <div>Init</div>
        );
    }
}

//entry
ReactDOM.render(
    <Root/>,
    document.getElementById('container')
);