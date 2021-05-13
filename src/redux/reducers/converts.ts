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
    const items = [...state.items];
    items[action.payload.id].value = action.payload.newValue;

    items.forEach((item: any) => item.isConvertable = false);
    items[action.payload.id].isConvertable = true;

    return {
      ...state,
      items,
    }
  }

  if (action.type === ConvertsActionTypes.CONVERT) {
    const items = [...state.items];
    const convertibleItem = items.find((item: any) => item.isConvertable === true);
    const calculateItem = items[action.payload.id];

    if (!convertibleItem) return state;

    const convertibleValue = convertibleItem.value;
    const convertibleRate = convertibleItem.currency.rate;

    calculateItem.value = convertibleItem.currency.abbreviation === 'RUB' ?
      +((convertibleValue / calculateItem.currency.rate).toFixed(2)) :
      +((convertibleValue * convertibleRate / calculateItem.currency.rate).toFixed(2))

    return {
      ...state,
      items,
    }
  }

  if (action.type === ConvertsActionTypes.SET_HISTORY) {
    const items = [...state.items];
    const convertableId = action.payload.convertableId;
    const calculatedId = action.payload.calculatedId;

    const history = [
      [{
        currency: items[convertableId].currency.abbreviation,
        value: items[convertableId].value
      },
      {
        currency: items[calculatedId].currency.abbreviation,
        value: items[calculatedId].value
      },],

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