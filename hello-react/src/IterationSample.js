import React, { Component } from 'react'

export default class IterationSample extends Component {
    
    state={
        names:['눈사람','얼음','눈','바람'],
        name:''
    };

    handleChange = (e) =>{
        this.setState({
            name:e.target.value
        });
    };

    handleInsert = () => {
        //names에 추가하고 현재 적혀저있는 것 지우기 concat이 추가.
        //concat은 push처럼 추가하는 것이 아닌 새 배열을 생성하는 것
        this.setState({
            names:this.state.names.concat(this.state.name),
            name:''
        })
    }

    handleRemove = (index) => {
        const {names} = this.state;

        this.setState({
            names:[
            ...names.slice(0,index),//0번째 부터 index 전까지 자르고
            ...names.slice(index+1,names.length)//index+1부터 마지막까지 자른다.
            //filter도 사용가능하다 index번째를 제외한 원소만 있는 새배열 생성
            //names:names.filter((item,i)=>i!==index)
            ]
            //합쳐서 저장.
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleInsert()
        }
    }
  render() {
      const nameList = this.state.names.map(
          (name,index) => (<li key={index} onDoubleClick={()=>this.handleRemove(index)}>{name}</li>)
      );
    return (
      <div>
        <input
        onChange={this.handleChange}
        value={this.state.name}
        onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleInsert}>
        추가
        </button>
        <ul>{nameList}</ul>
      </div>
    )
  }
}
