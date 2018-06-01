const initialState = {
  cur_url: '/',
};

function jayceReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_URL':
      return Object.assign({}, state, {
        cur_url: action.url
      })
    default:
      return state
  }
  return state
}

export default jayceReducer;
