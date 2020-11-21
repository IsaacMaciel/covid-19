import { Reducer } from 'redux';
import { action } from 'typesafe-actions';

import { InitialState, CovidInfoTypes, CovidAction } from './types';

const INITIAL_STATE: InitialState = {
  country: {
    data: {
      country: '',
      cases: 0,
      confirmed: 0,
      deaths: 0,
      recovered: 0,
      updated_at: '',
    },
  },
  uf: {
    data: {
      uid: 0,
      uf: '',
      cases: 0,
      deaths: 0,
      state: '',
      suspects: 0,
      refuses: 0,
      datetime: '',
    },
  },
  params: '',
  search: '',
};

const reducer = (state = INITIAL_STATE, action: CovidAction) => {
  switch (action.type) {
    case CovidInfoTypes.GET_COUNTRY_INFO:
      return { ...state, params: action.payload };

    case CovidInfoTypes.INPUT_COUNTRY_INFO:
      return { ...state, country: action.payload };

    case CovidInfoTypes.GET_UF_INFO:
      return { ...state, params: action.payload };

    case CovidInfoTypes.INPUT_UF_INFO:
      return { ...state, uf: action.payload };
    case CovidInfoTypes.SEARCH:
      return { ...state, search: action.payload };

    default:
      return state;
  }
};
export default reducer;
