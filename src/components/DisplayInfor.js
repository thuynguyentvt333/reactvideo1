import React from "react";
import './DisplayIfor.scss';
class DisplayInfor extends React.Component{
state ={
    isShowListUser: true
}

    handleShowHide=()=>{
        this.setState({
            isShowListUser: !this.state.isShowListUser

        })
    }
    render(){
        // console.log(this.props);
        //destrucfturing array/object
        const{listUser}=this.props;

        //khi dùng cái này thì ở thẻ div ta k cần viết như này <div>My name is {this.props.name}</div>
        //thay vào đó ta có thể viết <div>My name is {name}</div> cho ngắn gọn

        //props => properties: tài sản / dùng để truyền dữ liệu cha sang con
        return(
           <div className='display-infor-container'>
                            <div>
                            <span onClick={() => {this.handleShowHide()}}>
                            {this.state.isShowListUser ===true ? "Hide list user" : "Show list user"}
                            </span>
                            </div>
                           
{this.state.isShowListUser &&
            <div>
                  {listUser.map((user,index)=>{
                    console.log(`check: `,user);

                    return(
                        
                        <div key={user.id} className={+user.age>18 ? "green" : "red"}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            <hr/>
                        </div>
                    )
                
})}
            </div>}
            </div>
            
        )
    }
}

export default DisplayInfor;