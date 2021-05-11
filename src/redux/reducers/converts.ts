import { ConvertsState, ConvertsAction, ConvertsActionTypes } from "../../types/converts";

const initialState: ConvertsState = {
  items: [
    { value: 0, currency: { abbreviation: 'RUB', rate: 0 }, isConvertable: false },
    { value: 0, currency: { abbreviation: 'USD', rate: 0 }, isConvertable: false },
    { value: 0, currency: { abbreviation: 'EUR', rate: 0 }, isConvertable: false },
  ],
  unselectedItems: [],
  history: []
}

const converts = (state = initialState, action: ConvertsAction) => {
  if (action.type === ConvertsActionTypes.CHANGE_CURRENCY) {
    const items = [...state.items];
    items[action.payload.id].currency = action.payload.currency;

    return {
      ...state,
      items,
    }
  }

  if (action.type === ConvertsActionTypes.FILTER_UNSELECTED_ITEMS) {
    const selectedItems = state.items;
    const allItems = action.payload;

    return {
      ...state,
      unselectedItems: allItems.filter(({ abbreviation }: any) => {
        return !selectedItems.find((convertItem: any) => convertItem.currency.abbreviation === abbreviation)
      }),
    }
  }

  if (action.type === ConvertsActionTypes.CHANGE_VALUE) {
    const items = [...state.items]
    items[action.payload.id].value = action.payload.newValue;

    items.forEach((item: any) => item.isConvertable = false);
    items[action.payload.id].isConvertable = true;

    return {
      ...state,
      items,
    }
  }

  if (action.type === ConvertsActionTypes.CONVERT) {
    const items = state.items;
    const convertibleItem = items.find((item: any) => item.isConvertable === true)

    if (!convertibleItem) return state;

    const convertibleValue = convertibleItem.value;
    const convertibleRate = convertibleItem.currency.rate;

    const calculateItems = items.map(((item: any) => {
      if (!item.isConvertable) {
        return {
          ...item,
          value: convertibleItem.currency.abbreviation === 'RUB' ?
            +((convertibleValue / item.currency.rate).toFixed(2)) :
            +((convertibleValue * convertibleRate / item.currency.rate).toFixed(2))
        }
      }
      return item;
    }));

    return {
      ...state,
      items: calculateItems,
    }
  }

  if (action.type === ConvertsActionTypes.SET_HISTORY) {
    const history = [
      [{ currency: state.items[0].currency.abbreviation, value: state.items[0].value },
      { currency: state.items[1].currency.abbreviation, value: state.items[1].value }],

      [{ currency: state.items[0].currency.abbreviation, value: state.items[0].value },
      { currency: state.items[2].currency.abbreviation, value: state.items[2].value }],

      [{ currency: state.items[1].currency.abbreviation, value: state.items[1].value },
      { currency: state.items[2].currency.abbreviation, value: state.items[2].value }],

      ...state.history,
    ];

    while (history.length > 10) {
      history.pop()
    }

    window.sessionStorage.setItem('history', JSON.stringify(history))

    return {
      ...state,
      history
    }
  }

  if (action.type === ConvertsActionTypes.GET_HISTORY) {
    const history = JSON.parse(window.sessionStorage.getItem('history') || '[]');
    return {
      ...state,
      history
    }
  }

  return state;
}

export default converts;