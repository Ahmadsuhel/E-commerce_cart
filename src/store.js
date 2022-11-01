import {applyMiddleware, createStore,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/index'
const composeEnhencers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store=createStore(
reducers,
composeEnhencers(applyMiddleware(thunk)));
export default store;
