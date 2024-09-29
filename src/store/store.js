import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Custom logging middleware
const loggerMiddleware = store => next => action => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('New state:', store.getState());
  return result;
};

// Create the Redux store with middleware (Thunk and logger)
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggerMiddleware) // Add the logger middleware
);

export default store;
