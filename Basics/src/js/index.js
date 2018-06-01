var React = require('react');
var ReactDom = require('react-dom');
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import 'antd/dist/antd.css'; 

export default class Index extends React.Component{
    render(){
        var header = <Header/>;
        return(
            //one node div
            <div>
                {header}
                <div>{this.props.children}</div>
                <Body userName={"Mary"} age={50}/>
                <Footer/>
            </div>
        );
    }

    componentWillMount(){
        console.log("Index Component Will Mount");
    }
    componentDidMount(){
        console.log("Index Component Did Mount");
    }
}

