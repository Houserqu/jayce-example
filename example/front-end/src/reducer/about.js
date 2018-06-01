const initialState = {
  title: 'websocket',
};

function aboutReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return Object.assign({}, state, {
        cur_url: action.title
      })
    default:
      return state
  }
  return state
}

export default aboutReducer;
