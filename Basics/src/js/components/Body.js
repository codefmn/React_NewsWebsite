import React from 'react';
import Child from './Child';

export default class Body extends React.Component{
    constructor(){
        super();
        this.state = {
            userName:"Ashley",
            age:20,
            uni:"UQ",
            major:"IT"
        }
    }

    changeInfo() {
        this.setState({uni:"QUT"});
    };
        
    handleChange(event) {
        this.setState({major: event.target.value});
    };

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
                <p>{userName=="" ? "Not login" : "User:"+userName}</p>
                <input type="button" value={valueName} disabled={boolInput}/>
                <p>State:{this.state.userName} {this.state.age}</p>
                <p>Parent props:{this.props.userName} {this.props.age}</p>
                <label>Event: {this.state.uni}  </label>
                <input type="button" value="Submit" onClick={this.changeInfo.bind(this)}/>
                <p>Child Change: {this.state.major}</p>
                <Child handleChange={this.handleChange.bind(this)}/>
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