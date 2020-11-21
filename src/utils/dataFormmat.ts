import { Country, UF } from '../store/modules/covid/types';

export const formatDataCountry = ({ data }: Country) => {
  console.log('LogCountry: ' + data.updated_at);
  const date = new Date(data.updated_at);
  return {
    confirmed: String(
      data.confirmed.toLocaleString('pt-BR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    ),
    cases: String(
      data.cases.toLocaleString('pt-BR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    ),
    recovered: String(
      data.recovered.toLocaleString('pt-BR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    ),
    deaths: String(
      data.deaths.toLocaleString('pt-BR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    ),
    updated_at: date.toLocaleString('pt-BR'),
  };
};

export const formatDataUF = (data: UF) => {
  // console.log('Valor CARDUFDATA');
  // console.log(data);
  const date = new Date(data.datetime);
  return {
    cases: String(
      data.cases.toLocaleString('pt-BR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    ),
    deaths: String(
      data.deaths.toLocaleString('pt-BR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    ),
    suspects: String(
      data.suspects.toLocaleString('pt-BR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    ),
    datetime: date.toLocaleString('pt-BR'),
  };
};
