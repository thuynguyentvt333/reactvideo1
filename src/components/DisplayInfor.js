import React, { useState } from "react";
import './DisplayIfor.scss';
import logo from './../logo.svg' ;


const DisplayInfor=(props)=>{
    const{listUser}=props;
       
   const[isShowHideListUser, setShowHideListUser]= useState(true);
   //destrucfturing array/object

const handleShowHideListUser=()=>{
setShowHideListUser(!isShowHideListUser);
}

        //props => properties: tài sản / dùng để truyền dữ liệu cha sang con
        return(
           <div className='display-infor-container'>
                <div>
                    <span onClick={()=>{handleShowHideListUser()}}>
                        {isShowHideListUser===true?"Hide List User":"show list user"}
                    </span>
                    </div>            
                           
{isShowHideListUser &&
            <>
                  {listUser.map((user,index)=>{
                    // console.log(`check: `,user);

                    return(
                        
                        <div key={user.id} className={+user.age>18 ? "green" : "red"}>
                            <div>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            </div>
                            <div>
                            <button onClick={()=>props.handleDeleteUser(user.id)}>Delete </button>
                            </div>
                            <hr/>
                        </div>
                    )
                
})}
            </>}
            </div>
            
        )
    }
export default DisplayInfor;