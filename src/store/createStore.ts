import { createStore, applyMiddleware, Reducer, Middleware } from 'redux';
import { InitialState, CovidAction } from './modules/covid/types';

export interface StoreState {
  covid: InitialState;
}

export type StoreAction = CovidAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
