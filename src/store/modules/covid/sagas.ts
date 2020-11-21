import { call, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import api from '../../../services/api';

export function* loadCountryInfo({
  payload,
}: ActionType<typeof actions.getCountryInfo>) {
  try {
    const country = payload;
    const { data } = yield call(api.get, `/${country}`);

    yield put(actions.inputCountryInfo(data));
  } catch (error) {
    console.log(error);
  }
}

export function* loadUfInfo({ payload }: ActionType<typeof actions.getUFInfo>) {
  try {
    const UF = payload;
    const { data } = yield call(api.get, `/brazil/uf/${UF}`);
    // console.log('saga');
    // console.log(data);
    yield put(actions.inputUFInfo(data));
  } catch (error) {
    console.log(error);
  }
}
