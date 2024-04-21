import React from "react";
import App from "../App";
class Mycomponent extends React.Component{
    state = {
        name: `nguyenthuy`,
        address: `Ha Noi`,
        age: 24
    };
// handleClick = (event) => {
//     console.log(`Click this button`)
//     console.log( `my name is: `,this.state.name)

//     this.setState({
//         name:`thuy`,
//         address: `Nam Dinh`
//     })
// }
// handleOnMoverOver(event){
// console.log(event.pageX)
// }
handleOnChangeInput=(event)=>{
    // console.log(event.target.value)
    // alert(`me`)
    this.setState({
        name: event.target.value
        
    })
}
handleOnSubmit=(event)=>{
    event.preventDefault();
    alert(`me`)
}
    //JSX
    render(){
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
<form onSubmit= {(event) => this.handleOnSubmit(event)}>
<input 
type="text"
onChange={(event)=>this.handleOnChangeInput(event)}/>
<button>Submit</button>
</form>
            </div>
        );
    }
}
export default Mycomponent;