import React from "react";
import App from "../App";
class Mycomponent extends React.Component{
    state = {
        name: `nguyenthuy`,
        address: `Ha Noi`,
        age: 24
    };
handleClick(event){
    console.log(`Click this button`)
}
handleOnMoverOver(event){
console.log(event.pageX)
}
    //JSX
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick ={this.handleClick}>Click Me</button>
                <button onMouseOver ={this.handleOnMoverOver}>Hit Me</button>
            </div>
        );
    }
}
export default Mycomponent;