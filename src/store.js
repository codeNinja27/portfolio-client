import { createStore, applyMiddleware, combineReducers } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import projectReducer from './reducers/projects';


const store = createStore(
	combineReducers({
    projects: projectReducer
	}),
  // composeWithDevTools(applyMiddleware(thunk))
  (applyMiddleware(thunk))
);


export default store;