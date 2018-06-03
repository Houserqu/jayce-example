import React, { Component } from 'react';
import {
  jaycesubscribe
} from '../jayce-fe';
import jayce from '../jayce';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  // componentWillMount() {
  //   console.log('will mount');

  //   // 执行订阅操作
  //   jayce.subscribe('GET_NEW_ARTICLE');
  // }

  componentDidMount() {
    console.log('cdm')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
     console.log('shouldComponentUpdate')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  render() {
    return (
      <div> article </div>
    );
  }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');

  //   // 取消订阅
  //   jayce.unsubscribe('GET_NEW_ARTICLE')
  // }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch')
  }
}

export default jaycesubscribe(['GET_NEW_ARTICLE'], jayce)(Article);