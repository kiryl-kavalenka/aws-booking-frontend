import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
