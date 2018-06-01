const initialState = {
  about: 'websocket',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return Object.assign({}, state, {
        cur_url: action.about
      })
    default:
      return state
  }
  return state
}

export default homeReducer;
