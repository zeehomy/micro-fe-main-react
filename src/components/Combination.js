/*
 * @Author: yzh
 * @Date: 2021-02-02 18:21:48
 * @LastEditTime: 2021-02-03 17:07:38
 * @LastEditors: yzh
 * @Description: 
 * @FilePath: /main-react/src/components/Combination.js
 */
import { loadMicroApp } from 'qiankun';
import React from 'react';

export default class Combination extends React.Component {
  containerRef = React.createRef();
  microApp = null;

  componentDidMount() {
    this.microApp = loadMicroApp(
      {
        name: 'large-screen',
        entry: '//localhost:3001/',
        container: this.containerRef.current,
        props: { name: 'load qiankun' }
      },
    );
  }

  componentWillUnmount() {
    this.microApp.unmount();
  }

  componentDidUpdate() {
    this.microApp.update({ name: 'kuitos' });
  }

  render() {
    return <div>
      <div>载入一个微应用载入一个微应用载入一个微应用载入一个微应用载入一个微应用载入一个微应用载入一个微应用
      载入一个微应用载入一个微应用载入一个微应用载入一个微应用载入一个微应用载入一个微应用载入一个微应用载入一个微应用
      载入一个微应用载入一个微应用载入一个微应用载入一个微应用载入一个微应用载入一个微应用载入一个微应用载入一个微应用
      </div>
      <div ref={this.containerRef}>

      </div>
    </div>;
  }
}