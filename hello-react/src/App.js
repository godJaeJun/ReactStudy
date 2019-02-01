import React, { Component } from 'react';
import MyComponent from "./MyComponent";

//항상 부모가 있어야 된다. jsx특징.
//*Fragment컴포넌트는 div 같은 것으로 감싸지 않고 여러 요소를 렌더링하고 싶을때 사용.
class App extends Component {
  render() {
      return(
        <MyComponent name="이재준" age={22}/>
      );
  }
}

export default App;
