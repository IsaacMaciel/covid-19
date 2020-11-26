import { Country } from '../store/modules/covid/types';

const percentInfo = ({ data }: Country) => {
  const total = data.confirmed;

  const percentCases = ((data.cases * 100) / total).toFixed(2);
  const percentRecovered = ((data.recovered * 100) / total).toFixed(2);
  const percentDeaths = ((data.deaths * 100) / total).toFixed(2);

  return {
    cases: percentCases,
    recovered: percentRecovered,
    death: percentDeaths,
  };
};

export default percentInfo;
