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

export const convert = (id: number) => ({
  type: 'CONVERT',
  payload: { id },
});

export const setHistory = (convertableId: number, calculatedId: number) => ({
  type: 'SET_HISTORY',
  payload: { convertableId, calculatedId },
});

export const getHistory = () => ({
  type: 'GET_HISTORY',
});