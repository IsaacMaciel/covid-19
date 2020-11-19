import React, { useEffect } from 'react';

// import { getBrasilInfo } from '../../services/covidService';

import flags from '../../utils/loaderFlags';

import Card from '../Card';

// import { AplicationState } from '../../store/createStore';
import { InitialState } from '../../store/modules/covid/types';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
// import { bindActionCreators, Dispatch } from 'redux';

import { getCountryInfo } from '../../store/modules/covid/actions';

// interface StateProps {
//   data: InitialState;
// }
// interface DispatchProps {
//   getCountryInfo(): void;
//   getUFInfo(): void;
// }

// type Props = StateProps;
const Content: React.FC = () => {
  const covid = useSelector((state: StoreState) => state.covid);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryInfo('brazil'));
  }, []);

  const getBrCountry = () => {
    const br = flags.filter((flag) => flag.title === 'Brasil');

    return Object(br);
  };

  console.log(covid);
  console.log(getBrCountry());

  return <Card data={covid.country} flag={getBrCountry()} />;
};

export default Content;
