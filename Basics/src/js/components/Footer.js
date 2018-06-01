import React from 'react';

var footerStyle = require("../../css/footer.css")

export default class Footer extends React.Component{
    render(){
        return(
            <footer className={footerStyle.footerColor}>
                <h2>This is Footer.</h2>
            </footer>
        );
    }
}