import React from 'react';
import MobileHeader from './MobileHeader';
import MobileNav from './MobileNav';
import Footer from './Footer';

export default class MobileIndex extends React.Component{
    render(){
        return(
            <div>
                <MobileHeader />
                <MobileNav />
                <Footer />
            </div>
        );
    }
}