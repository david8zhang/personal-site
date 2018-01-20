import { createStore, applyMiddleware } from 'redux';
import BaseReducer from './baseReducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(BaseReducer);

export { store };
