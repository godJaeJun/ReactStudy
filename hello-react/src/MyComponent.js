import React, {Component} from "react";
import PropTypes from "prop-types";
//rcc를 이용해서 초기코드를 간단하게 생성할 수 있다.
class MyComponent extends Component{
    
    constructor(props){
        super(props);
        this.state={
            number:0
        }   
    };

    static defaultProps={   //props가 없을 경우 default props설정.
        name: "기본이름"
    };

    static propTypes={  //props의 type지정
        name:PropTypes.string,
        age:PropTypes.number.isRequired
    };

    render(){
        return(
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}살 입니다.</p>
                <p>숫자 : {this.state.number}</p>
            </div>
        );
    }
}
export default MyComponent;