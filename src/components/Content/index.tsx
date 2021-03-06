import React, { useEffect, useState } from 'react';

import flags from '../../utils/loaderFlags';

import Card from '../Card';
import CardUF from '../CardUF';
import List from '../List';
import Search from '../Search';

import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';

import { getCountryInfo } from '../../store/modules/covid/actions';

const Content: React.FC = () => {
  const [arrayFlags, setArrayFlags] = useState(flags);

  const covid = useSelector((state: StoreState) => state.covid);
  const error = covid.error;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryInfo('brazil'));
  }, []);

  useEffect(() => {
    error.isError && alert(error.message);
  }, [error]);

  useEffect(() => {
    const arraySearch = flags.filter(({ title }) => {
      const titleCompare = title.toLocaleLowerCase();
      const searchCompare = covid.search.toLocaleLowerCase();

      return titleCompare.includes(searchCompare);
    });
    setArrayFlags(arraySearch);
  }, [covid.search]);

  const getBrCountry = () => {
    const br = flags.filter((flag) => flag.title === 'Brasil')[0];

    return br;
  };

  return (
    <>
      {' '}
      {covid.params !== '' ? (
        <CardUF
          data={covid.uf}
          flag={flags.filter((flag) => flag.apiParams === covid.params)[0]}
        />
      ) : (
        <Card data={covid.country} flag={getBrCountry()} />
      )}
      <Search />
      {arrayFlags.map(({ title, src, apiParams }, index) => (
        <List apiParams={apiParams} key={index} title={title} src={src} />
      ))}
    </>
  );
};

export default Content;
