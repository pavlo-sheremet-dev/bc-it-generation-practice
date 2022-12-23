export const getDataFromLS = (key, initialState = []) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? initialState;
  } catch (error) {
    return initialState;
  }
};
