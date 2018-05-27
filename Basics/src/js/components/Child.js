import React from 'react';

export default class Child extends React.Component{
    render(){
        return(
            <div>
                <label>Change value in Child:</label>
                <input type="text" onChange={this.props.handleChange}/>
            </div>
        );
    }
}