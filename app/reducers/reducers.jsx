export var itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ]
    default:
      return state;
  }
}

export var usersReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOGIN_USER':
		return action.username;
    default:
    	return state;
  }
}
