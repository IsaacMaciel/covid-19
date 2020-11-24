import { all, takeLatest } from 'redux-saga/effects';

import { CovidInfoTypes } from './covid/types';
import { loadCountryInfo, loadUfInfo } from './covid/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(CovidInfoTypes.GET_COUNTRY_INFO, loadCountryInfo),
    takeLatest(CovidInfoTypes.GET_UF_INFO, loadUfInfo),
  ]);
}
