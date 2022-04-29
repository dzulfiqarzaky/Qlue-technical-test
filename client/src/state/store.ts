import { Dispatch } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
export const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>
export type State = ReturnType<typeof reducers>;