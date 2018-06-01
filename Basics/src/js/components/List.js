import React from 'react';

export default class List extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>list1</li>
                    <li>list2</li>
                    <li>Receive id from url: {this.props.params.id}</li>
                </ul>
            </div>
        );
    }
}