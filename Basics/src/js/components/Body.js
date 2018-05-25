import React from 'react';

export default class Body extends React.Component{
    constructor(){
        super();
        this.state = {
            userName:"Ashley",
            age:20
        }
    }

    render(){
        // comment
        var userName = "Ashley M";
        var valueName = "Please\u0020Login";//unicode\u0020
        var boolInput = false;

        setTimeout(()=>{
            this.setState({userName:"Amy", age:30});
        },5000);
        
        return(
            <div>
                {/* comment */}
                <h2>Body</h2>
                <p>{userName=="" ? "Not login" : "User:"+userName}</p>
                <input type="button" value={valueName} disabled={boolInput}/>
                <p>{this.state.userName} {this.state.age}</p>
                <p>{this.props.userName} {this.props.age}</p>
            </div>
        );
    }

    componentWillMount(){
        console.log("Body Component Will Mount");
    }
    componentDidMount(){
        console.log("Body Component Did Mount");
    }
    
}