var React = require('react');
var ReactDom = require('react-dom');
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class Index extends React.Component{
    render(){
        var header = <Header/>;
        return(
            //one node div
            <div>
                {header}
                <Body/>
                <Footer/>
            </div>
        );
    }
}

//entry
ReactDom.render(
    <Index/>,
    document.getElementById('container')
);