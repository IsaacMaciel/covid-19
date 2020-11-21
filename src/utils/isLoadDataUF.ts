import { UF } from '../store/modules/covid/types';
const isLoadDataUF = (data: UF) => {
  return data.uid ? true : false;
};

export default isLoadDataUF;
