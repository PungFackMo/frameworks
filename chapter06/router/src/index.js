import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
/* App컴포넌트를 렌더링하는 대신 Router컴포넌트를 렌더링한다. 
Router컴포넌트는 자신의 안에 포함된 자식 중 하나에 대한 위치 정보를 전달받는다. 
Router컴포넌트는 단 한번만 사용해야 하며 애플리케이션의 컴포넌트 트리 루트 가까이에 위치해야 한다.
BrouserRouter를 Router로 임포트 했다.*/
root.render(
  <React.StrictMode>
    {/* <Router>
      <App2 />
    </Router> */}
    <Router>
      <App2/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
