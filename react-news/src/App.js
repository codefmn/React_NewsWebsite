import React, { Component } from 'react';
import {Router,Route,hashHistory} from 'react-router';
// import MediaQuery from 'react-responsive';
import PCIndex from './components/PCIndex';
import PCNewsDetails from './components/PCNewsDetails';
import UserInfo from './components/UserInfo';
// import MobileIndex from './components/MobileIndex';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <MediaQuery query="(min-device-width: 1224px)"> */}
            <Router history={hashHistory}>
                <Route path="/" component={PCIndex}></Route>
                <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                <Route path="/userinfo" component={UserInfo}></Route>
            </Router>
        {/* </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
            <MobileIndex />
        </MediaQuery> */}
      </div>
    );
  }
}

export default App;
