import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum CovidInfoTypes {
  GET_COUNTRY_INFO = 'GET_COUNTRY_INFO',
  INPUT_COUNTRY_INFO = 'INPUT_COUNTRY_INFO',
  GET_UF_INFO = 'GET_UF_INFO',
  INPUT_UF_INFO = 'INPUT_UF_INFO',
  SEARCH = 'SEARCH',
}

export interface UF {
  uid: number;
  uf: string;
  state: string;
  cases: number;
  deaths: number;
  suspects: number;
  refuses: number;
  datetime: string;
}
// export interface RepositoriesUF {
//   data: UF[];
// }

export interface Country {
  data: {
    country: string;
    cases: number;
    confirmed: number;
    deaths: number;
    recovered: number;
    updated_at: string;
  };
}

// export interface RepositoriesCountry {
//   readonly data: Country[];
// }

export interface InitialState {
  country: Country;
  uf: UF;
  params: string;
  search: string;
}

export type CovidAction = ActionType<typeof actions>;
