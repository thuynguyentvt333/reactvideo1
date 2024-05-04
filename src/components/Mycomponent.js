import React from "react";
import App from "../App";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component{
    state={
        listUser:[
            {id:1,name:`nguyen`,age:`12` },
            {id:2, name:`thanh`,age:`23`},
            {id:3, name:`thuy`,age:`93`}
        ]
    }

    handleAddNewUser = (UserOj) => {
       console.log(`check data from parent `,UserOj)
       this.setState({
        listUser: [UserOj,...this.state.listUser]
       })

    }

    //JSX
    render(){
        return(
            <>
            <div className='a'>
               <AddUserInfor handleAddNewUser = {this.handleAddNewUser}> </AddUserInfor>

               <br></br>

               <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
               </div>
            <div className='b'></div>
            </>
        );
    }
}
export default Mycomponent;