// 필요한 React와 ReactDOM 모듈을 가져옵니다.
import React from "react";
// import ReactDom from 'react-dom'

// React 컴포넌트를 작성합니다.
function App() {
   // items 배열을 정의합니다.
  const items = ['one', 'two', 'three'];

   // JSX를 사용하여 UI를 정의합니다.
  return (
    <div className="App">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
