import React, { useEffect, useState } from 'react';

import flags from '../../utils/loaderFlags';

import Card from '../Card';
import List from '../List';
import Search from '../Search';

import { InitialState } from '../../store/modules/covid/types';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';

import { getCountryInfo, getUFInfo } from '../../store/modules/covid/actions';

const Content: React.FC = () => {
  const [arrayFlags, setArrayFlags] = useState(flags);

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
      <Search />
      {arrayFlags.map(({ title, src, apiParams }, index) => (
        <List apiParams={apiParams} key={index} title={title} src={src} />
      ))}
    </>
  );
};

export default Content;
