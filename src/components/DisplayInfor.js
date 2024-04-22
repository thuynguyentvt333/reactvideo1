import React from "react";

class DisplayInfor extends React.Component{
    render(){
        console.log(this.props);
        //destrucfturing array/object
        const{name,age}=this.props;

        //khi dùng cái này thì ở thẻ div ta k cần viết như này <div>My name is {this.props.name}</div>
        //thay vào đó ta có thể viết <div>My name is {name}</div> cho ngắn gọn
        
        //props => properties: tài sản / dùng để truyền dữ liệu cha sang con
        return(
            <div>
            <div>My name is {this.props.name}</div>
            <div>My age is {this.props.age}</div>
            </div>
        )
    }
}

export default DisplayInfor;