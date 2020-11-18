// import { createStore, applyMiddleware, Store } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { InitialState } from './ducks/modules/types';

// import rootReducer from './ducks/rootReducer';
// import rootSaga from './ducks/rootSaga';

// export interface AplicationState {
//   covid: InitialState;
// }

// const sagaMiddleware = createSagaMiddleware();

// const store: Store<AplicationState> = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware),
// );

// sagaMiddleware.run(rootSaga);

// export default store;

import { createStore, applyMiddleware, Reducer, Middleware } from 'redux';
import { InitialState, CovidAction } from './modules/covid/types';

export interface StoreState {
  covid: InitialState;
}

// const a: StoreState;
// a.covid.params

export type StoreAction = CovidAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
