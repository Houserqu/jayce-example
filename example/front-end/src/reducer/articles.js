
function homeReducer(state = ['hahah'], action) {
  switch (action.type) {
    case 'GET_NEW_ARTICLE':
      return [...state, action.title]
    default:
      return state
  }
}

export default homeReducer;
