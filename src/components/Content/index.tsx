import React, { useEffect } from 'react';

import flags from '../../utils/loaderFlags';

import Card from '../Card';
import List from '../List';

import { InitialState } from '../../store/modules/covid/types';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';

import { getCountryInfo, getUFInfo } from '../../store/modules/covid/actions';

const Content: React.FC = () => {
  const covid = useSelector((state: StoreState) => state.covid);
  console.log(covid);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryInfo('brazil'));
    dispatch(getUFInfo('sp'));
  }, []);

  const getBrCountry = () => {
    const br = flags.filter((flag) => flag.title === 'Brasil');

    return Object(br[0]);
  };

  return (
    <>
      <Card data={covid.country} flag={getBrCountry()} />
      {flags.map(({ title, src }, index) => (
        <List key={index} title={title} src={src} />
      ))}
    </>
  );
};

export default Content;
