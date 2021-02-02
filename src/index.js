/*
 * @Author: yzh
 * @Date: 2021-02-02 10:18:59
 * @LastEditTime: 2021-02-02 13:46:53
 * @LastEditors: yzh
 * @Description: 
 * @FilePath: /main-react/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { registerMicroApps, start } from 'qiankun';

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById('root')
);

// registerMicroApps([
//   {
//     name: 'vueApp',
//     entry: '//localhost:8080',
//     container: '#container',
//     activeRule: '/app-vue',
//   }
// ]);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  // console.log
