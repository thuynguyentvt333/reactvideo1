import React from "react";
import App from "../App";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component{
    
    //JSX
    render(){
        return(
            <div>
               <UserInfor></UserInfor>
               <br></br>
               <DisplayInfor name ="Thuy" age="23"></DisplayInfor>
               <hr/>
               <DisplayInfor name ="Thuy" age="23"></DisplayInfor>
            </div>
        );
    }
}
export default Mycomponent;