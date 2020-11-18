import { combineReducers } from 'redux';
import { StoreState } from '../createStore';
import covidInfo from './covid/reducer';

export default combineReducers<StoreState>({ covid: covidInfo });
