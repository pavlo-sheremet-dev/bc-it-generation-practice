import { nanoid } from 'nanoid';
import { useLocalStorage } from './useLocalStorage';

export const useArrayDataHandler = ({ localStorageKey }) => {
  const [data, setData] = useLocalStorage(localStorageKey, []);

  const addData = newItem =>
    setData(prev => [...prev, { id: nanoid(), ...newItem }]);

  const deleteData = id => setData(prev => prev.filter(item => item.id !== id));

  const changeData = changedItem =>
    setData(prev =>
      prev.map(item => (item.id === changedItem.id ? data : item))
    );

  return { data, deleteData, changeData, addData };
};
