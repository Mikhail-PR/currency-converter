import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancers = compose(applyMiddleware(thunk)
  // , composeWithDevTools()
);

const store = createStore(rootReducer, composedEnhancers);

export default store;