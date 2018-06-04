import React from 'react';
import MobileHeader from './MobileHeader';
import Footer from './Footer';

export default class MobileIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader />
                <Footer />
            </div>
        );
    }
}