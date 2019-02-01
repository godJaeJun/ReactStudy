import React, { Component } from 'react';
//import MyComponent from "./MyComponent";  1~3장
//import EventPractice from "./EventPractice"; 4장
//import ValidationSample from "./ValidationSample"; 5장
import ScrollBox from "./ScrollBox";

//항상 부모가 있어야 된다. jsx특징.
//*Fragment컴포넌트는 div 같은 것으로 감싸지 않고 여러 요소를 렌더링하고 싶을때 사용.
class App extends Component {
  render() {
      return(
        <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={()=>this.scrollBox.scrollToBottom()}>
        맨 밑으로
        </button>
        </div>
      );
  }
}

export default App;
