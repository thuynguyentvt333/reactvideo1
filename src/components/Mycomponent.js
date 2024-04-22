import React from "react";
import App from "../App";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component{
    state={
        listUser:[
            {id:1,name:`nguyen`,age:`22` },
            {id:2, name:`thanh`,age:`23`},
            {id:3, name:`thuy`,age:`23`}
        ]
    }
    //JSX
    render(){
        return(
            <div>
               <UserInfor></UserInfor>
               <br></br>

               <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
            </div>
        );
    }
}
export default Mycomponent;