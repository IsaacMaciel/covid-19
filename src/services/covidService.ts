import axios from './api';

const getBrasilInfo = async () => {
  const result = await axios.get('/brazil');

  return result.data;
};

const getStateInfo = async (state: string) => {
  const result = await axios.get(`/brazil/uf/${state}`);

  return result.data;
};

export { getBrasilInfo, getStateInfo };
