import React, { Component } from 'react';

const subscribe = (actions, jayce) => (WrappedComponent) => {
  class Subscribe extends Component {
    componentWillMount() {
      console.log('will mount');

      // 执行订阅操作
      jayce.subscribe('GET_NEW_ARTICLE');
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');

      // 取消订阅
      jayce.unsubscribe('GET_NEW_ARTICLE')
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  return Subscribe;
}

export default subscribe;