import React, { useState } from "react";
const AddUserInfor=(props)=>{
       const[name,setName]=useState('');
       const[address,setAddress]=useState('HaNoi');
       const[age,setAge]=useState('');


      const handleOnChangeInput=(event)=>{
  
        // this.setState({
        //     name: event.target.value
            setName(event.target.value)
        }

   const handleOnChangeAge=(event)=>{
    setAge(event.target.value)
        // this.setState({
        //     age: event.target.value
            
        }

    const handleOnSubmit=(event)=>{
        event.preventDefault();
        props.handleAddNewUser( {
            id: Math.floor((Math.random()* 100) + 1) + 'min',
            name:name,
            age:age
        });
    }


    return(
        <div>
        My name is {name} and I'm {age}
       <form onSubmit= {(event) => handleOnSubmit(event)}>
           <label>Your name: </label>
       <input 
       value={name}
       type="text"
       onChange={(event)=>handleOnChangeInput(event)}/>
       <button>Submit</button>
       
       <label> Your age: </label>
       <input 
       value={age}
       type="text"
       onChange={(event)=>handleOnChangeAge(event)}/>
       <button>Submit</button>
       </form>
               </div>
    )
}
    
export default AddUserInfor;