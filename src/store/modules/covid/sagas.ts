import { call, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import api from '../../../services/api';

import { getCountryInfo } from './actions';

// export function* loadCountryInfo(country: string) {
//   const response = yield call(api.get, `/${country}`);
//   yield put(getCountryInfo(response));
// }

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

// export function* loadUfInfo(uf: string) {
//   const response = yield call(api.get, `/brazil/uf/${uf}`);
//   yield put(getUFInfo(response.data));
// }

export function* loadUfInfo({ payload }: ActionType<typeof actions.getUFInfo>) {
  try {
    const UF = payload;
    const { data } = yield call(api.get, `/brazil/uf/${UF}`);
    yield put(actions.inputUFInfo(data));
  } catch (error) {
    console.log(error);
  }
}
