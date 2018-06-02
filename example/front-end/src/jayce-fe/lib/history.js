import createHashHistory from "history/createHashHistory"


function createJayceHistory(store) {
  const history = createHashHistory()

  /**
   * 监听url变化，通知服务端更新当前用户订阅器
   */
  history.listen((location, action) => {
    console.log(
      `The current URL is ${location.pathname}${location.search}${location.hash}`
    )

    // TODO: 告诉后台 订阅内容

    //jayce.subscribe(['GET_NEW_ARTICLE']);

    store.dispatch({
      type: 'UPDATE_URL',
      url: location.pathname
    })

    console.log(store.getState());
  })

  return history;
}



export default createJayceHistory;
