import React, { Component } from 'react'

export default class LifeCycleSample extends Component {
    state={
        number:0,
        color:null
    }

    myRef = null; //ref를 설정할 부분.

    //생성자
    constructor(props){
        super(props);
        console.log("constructor");
    }

    //props로 받아 온 값을 state에 동기화시키는 용도로 사용하며 마운트하거나 props를 변경할 때 호출된다.
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.color !== prevState.color){
            return { color : nextProps.color };
        }
        return null;
    }
    
    //랜더링 된다음에 실행. 이 안에서 다른 자바스크립트 라이브러리 또는 프레임 워크 함수를 호출하거나 이벤트 등록같은 작업을 한다.
    componentDidMount(){
        console.log('componentDidMount');
    }

    //props또는 state를 변경했을 때 리렌더링을 시작할지 여부를 지정하는 메서드이다. 반드시 true나 false를 반환해야한다.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate',nextProps,nextState);
        //숫자의 마지막 자리가 4면 리렌더링하지 않는다.
        return nextState.number%10 !==4;
    }
    
    //컴포넌트를 Dom에서 제거할 때 실행한다.
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number:this.state.number+1
        });
    }

    //render메서드를 호출한 후 Dom에 변화를 반영하기 바로 직전에 호출하는 메서드이다. 주로 업데이트하기 직전의 값을 참고할 일이 
    //있을때 활용된다.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps!==this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }
    
    //리렌더링을 완료한 후 실행한다. 예전 prevProps prevState를 사용하여 이전에 가졌던 데이터에 접근 가능.
    //getSnapshotBeforeUpdate에서 반환값이 있다면 여기서 snapshot값을 전달 받을 수 있다.
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('componentDidUpdate',prevProps,prevState);
        if(snapshot){
            console.log('업데이트 되기 직전 색상:',snapshot);
        }
    }
  render() {
      console.log('render');

      const style={
          color:this.props.color
      };

    return (
      <div>
        <h1 style={style} ref={ref => this.myRef=ref}>
            {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>
        더하기
        </button>
      </div>
    )
  }
}
