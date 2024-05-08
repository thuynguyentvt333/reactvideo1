import React from "react";
import './DisplayIfor.scss';
import logo from './../logo.svg' ;
class DisplayInfor extends React.Component{
    constructor(props){
        console.log(`call constructor`)
        super(props);
        this.state ={
            isShowListUser: true
        }
    }

componentDidMount=()=>{
console.log(`componentDidMount`);
setTimeout(()=>{
    document.title=`test`
},3000);
}
componentDidUpdate=(prevProps,prevState)=>{
    console.log(`componentDidUpdate`,this.props,prevProps);
    if(this.props.listUser !==prevProps.listUser)
        if(this.props.listUser.length ==5){
            alert(`you got 5 member`)
        }
}

    handleShowHide=()=>{
        this.setState({
            isShowListUser: !this.state.isShowListUser

        })
    }
    render(){
        console.log(`call me render`);
        //destrucfturing array/object
        const{listUser}=this.props;

        //khi dùng cái này thì ở thẻ div ta k cần viết như này <div>My name is {this.props.name}</div>
        //thay vào đó ta có thể viết <div>My name is {name}</div> cho ngắn gọn

        //props => properties: tài sản / dùng để truyền dữ liệu cha sang con
        return(
           <div className='display-infor-container'>
            {/* <img src ={logo}/> */}
                            <div>
                            <span onClick={() => {this.handleShowHide()}}>
                            {this.state.isShowListUser ===true ? "Hide list user" : "Show list user"}
                            </span>
                            </div>
                           
{this.state.isShowListUser &&
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
                            <button onClick={()=>this.props.handleDeleteUser(user.id)}>Delete </button>
                            </div>
                            <hr/>
                        </div>
                    )
                
})}
            </>}
            </div>
            
        )
    }
}

export default DisplayInfor;