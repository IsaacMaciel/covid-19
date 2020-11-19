import { Country } from '../store/modules/covid/types';

const formatData = ({ data }: Country) => {
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

export default formatData;
