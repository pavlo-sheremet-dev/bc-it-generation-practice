import { useEffect, useState } from 'react';
import { getDataFromLS } from 'service/localStorage';

export const useLocalStorage = (key, initialState) => {
  const [data, setData] = useState(() => getDataFromLS(key, initialState));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
};
