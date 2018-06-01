import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component{
    constructor(){
        super();
        this.state={
            bigFont: false
        }
    }

    switchH3(){
        this.setState({
            bigFont: !this.state.bigFont
        });
    }

    render(){
        const style = {
            h1:{
                color:"#f33",
                backgroundColor:"#ccf"
            },
            h3:{
                fontSize:(this.state.bigFont)?"30px":"15px"
            }
        }

        return(
            <header>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/details'}>Details in Index</Link></li>
                    <li><Link to={'/list/123'}>List Page</Link></li>
                </ul>
                <h1 style={style.h1}>This is Header.(const style)</h1>
                <h2 className="fontColor">Header 2 (className)</h2>
                <h3 style={style.h3} onClick={this.switchH3.bind(this)}>Header 3 (switch on click)</h3>
            </header>
        )
    }
}