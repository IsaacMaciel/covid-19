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

interface StateProps {
  data: InitialState;
}
interface DispatchProps {
  getCountryInfo(): void;
  getUFInfo(): void;
}

type Props = StateProps;
const Content: React.FC = () => {
  const covid = useSelector((state: StoreState) => state.covid);
  console.log(covid);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryInfo('brazil'));
  }, []);

  // dispatch(getUFInfo('brazil'));

  // const dispatch = useDispatch();

  const getBrCountry = () => {
    const br = flags.filter((flag) => flag.title === 'Brasil');

    return Object(br);
  };

  return <div>Oi</div>;
  // <Card data={data} flag={getBrCountry()} />;
};
// const mapDispatchToProps = (dispatch: Dispatch) =>
//   bindActionCreators(covidActions, dispatch);

// const mapStateToProps = (state: AplicationState) => ({
//   data: state.covid,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Content);

export default Content;
