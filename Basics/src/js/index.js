var React = require('react');
var ReactDom = require('react-dom');
import Header from './components/Header';

class Index extends React.Component{
    render(){
        return(
            //one node div
            <div id="wrapper">
                <Header/>
            </div>
        );
    }
}

//entry
ReactDom.render(
    <Index/>,
    document.getElementById('container')
);