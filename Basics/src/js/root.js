import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import List from './components/List';
import Details from './components/Details';
import {Router,Route,hashHistory} from 'react-router';

export default class Root extends React.Component{
    render(){
        return(
            // <Index/>
            <Router history={hashHistory}>
                {/* http://localhost:8080/ */}
                <Route component={Index} path="/">
                    <Route component={Details} path="details"></Route>
                </Route>
                <Route component={List} path="list"></Route>
            </Router>
        );
    }
}

//entry
ReactDOM.render(
    <Root/>,
    document.getElementById('container')
);