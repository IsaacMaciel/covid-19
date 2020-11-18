import { action } from 'typesafe-actions';
import { CovidInfoTypes, Country, UF } from './types';

export const getCountryInfo = (country: string) =>
  action(CovidInfoTypes.GET_COUNTRY_INFO, country);
export const inputCountryInfo = (data: Country) =>
  action(CovidInfoTypes.INPUT_COUNTRY_INFO, data);

// export const getUFInfo = (data: UF) => action(CovidInfoTypes.GET_UF_INFO, data);
// export const inputUfInfo
