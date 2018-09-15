import React from 'react';

export default class MobileHeader extends React.Component{
    render(){
        return(
        <header className="mobileLogo">
            <a href="/">
                <img src="./src/images/icon.png" alt="logo"/>
                <span>News Website</span>
            </a>
        </header>
        )
    }
}