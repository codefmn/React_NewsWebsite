import React from 'react';
import PCHeader from './PCHeader';
import Footer from './Footer';

export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader />
                <Footer />
            </div>
        );
    }
}