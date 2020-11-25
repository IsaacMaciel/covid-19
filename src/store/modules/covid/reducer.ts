import isLoadDataUf from '../../../utils/isLoadDataUF';

import { InitialState, CovidInfoTypes, CovidAction } from './types';

export const INITIAL_STATE: InitialState = {
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
    uid: 0,
    uf: '',
    cases: 0,
    deaths: 0,
    state: '',
    suspects: 0,
    refuses: 0,
    datetime: '',
  },
  params: '',
  search: '',
  error: {
    isError: false,
    message: '',
  },
};

const reducer = (state = INITIAL_STATE, action: CovidAction) => {
  switch (action.type) {
    case CovidInfoTypes.GET_COUNTRY_INFO:
      return { ...state, params: '' };

    case CovidInfoTypes.INPUT_COUNTRY_INFO:
      return { ...state, country: action.payload };

    case CovidInfoTypes.GET_UF_INFO:
      return { ...state, params: action.payload };

    case CovidInfoTypes.INPUT_UF_INFO:
      if (isLoadDataUf(action.payload)) return { ...state, uf: action.payload };
      return { ...state };
    case CovidInfoTypes.SEARCH:
      return { ...state, search: action.payload };

    case CovidInfoTypes.ERROR:
      if (action.payload) {
        return { ...state, error: { isError: true, message: action.payload } };
      }

      return { ...state, error: { isError: false, message: '' } };

    default:
      return state;
  }
};
export default reducer;
