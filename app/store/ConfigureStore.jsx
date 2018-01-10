import * as redux from 'redux';
import thunk from 'redux-thunk'

import {usersReducer} from 'reducers';
import * as actions from 'actions';

export var configure = (initialState = {}) => {
	var reducer = redux.combineReducers({
		user: usersReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
		redux.applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	));

	store.dispatch(actions.initUser());

	return store;
};
