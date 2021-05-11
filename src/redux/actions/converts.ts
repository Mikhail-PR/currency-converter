export const changeCurrency = (id: number, currency: object) => ({
  type: 'CHANGE_CURRENCY',
  payload: { id, currency },
});

export const filterUnselectedItems = (allItems: any[]) => ({
  type: 'FILTER_UNSELECTED_ITEMS',
  payload: allItems,
});

export const changeValue = (id: number, newValue: number) => ({
  type: 'CHANGE_VALUE',
  payload: { id, newValue },
});

export const convert = () => ({
  type: 'CONVERT',
});

export const setHistory = () => ({
  type: 'SET_HISTORY',
});

export const getHistory = () => ({
  type: 'GET_HISTORY',
});