import React from "react";

class AddUserInfor extends React.Component{
    state = {
        name: ``,
        address: `Ha Noi`,
        age: ''
    };

handleOnChangeInput=(event)=>{
  
    this.setState({
        name: event.target.value
        
    })
}
handleOnChangeAge=(event)=>{
   
    this.setState({
        age: event.target.value
        
    })
}
handleOnSubmit=(event)=>{
    event.preventDefault();
    this.props.handleAddNewUser( {
        id: Math.floor((Math.random()* 100) + 1) + 'min',
        name: this.state.name,
        age:this.state.age
    });
    console.log(this.state);
}

render(){
    return(
        <div>
 My name is {this.state.name} and I'm from {this.state.address}
<form onSubmit= {(event) => this.handleOnSubmit(event)}>
    <label>Your name: </label>
<input 
value={this.state.name}
type="text"
onChange={(event)=>this.handleOnChangeInput(event)}/>
<button>Submit</button>

<label> Your age: </label>
<input 
value={this.state.age}
type="text"
onChange={(event)=>this.handleOnChangeAge(event)}/>
<button>Submit</button>
</form>
        </div>
    )
}
}
export default AddUserInfor;