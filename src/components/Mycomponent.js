import React from "react";
import App from "../App";
class Mycomponent extends React.Component{
    state = {
        name: `nguyenthuy`,
        address: `Ha Noi`,
        age: 24
    };

    //JSX
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}
export default Mycomponent;