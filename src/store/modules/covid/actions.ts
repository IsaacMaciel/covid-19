import { action } from 'typesafe-actions';
import { CovidInfoTypes, Country, UF } from './types';

export const getCountryInfo = (country: string) =>
  action(CovidInfoTypes.GET_COUNTRY_INFO, country);
export const inputCountryInfo = (data: Country) =>
  action(CovidInfoTypes.INPUT_COUNTRY_INFO, data);

export const getUFInfo = (UF: string) => action(CovidInfoTypes.GET_UF_INFO, UF);
export const inputUFInfo = (data: UF) =>
  action(CovidInfoTypes.INPUT_UF_INFO, data);

export const search = (search: string) => action(CovidInfoTypes.SEARCH, search);
export const error = (error: string) => action(CovidInfoTypes.ERROR, error);
