import React, { useState } from "react";
import App from "../App";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
const Mycomponent = ()=>{
   const [ listUser,setListUser] = useState(
    [
             {id:1,name:`nguyen`,age:`12` },
             {id:2, name:`thanh`,age:`23`},
             {id:3, name:`thuy`,age:`93`}
    ])
 


    const handleAddNewUser = (UserOj) => {
      setListUser([UserOj,...listUser])
//        this.setState({
//         listUser: [UserOj,...this.state.listUser]
//        })

    }

    const handleDeleteUser = (UserId)=>{
        let listUsersClone=listUser;
listUsersClone = listUsersClone.filter(item =>item.id!== UserId);
setListUser(listUsersClone);
// this.setState({
//     listUser: listUsersClone
// })
    }


        return(
            <>
            <div className='a'>
               <AddUserInfor handleAddNewUser = {handleAddNewUser}> </AddUserInfor>

               <br></br>

               <DisplayInfor listUser={listUser}
               handleDeleteUser={handleDeleteUser}
               >

               </DisplayInfor>
               </div>
            <div className='b'></div>
            </>
        );
}
export default Mycomponent;