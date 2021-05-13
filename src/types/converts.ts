export interface ConvertsState {
  items: ConvertItemState[];
  unselectedItems: ConvertItemState[];
  history: {
    currency: string;
    value: number;
  }[][];
}

export interface ConvertItemState {
  value: number;
  currency: { abbreviation: string, rate: number };
  isConvertable: boolean;
}

export enum ConvertsActionTypes {
  CHANGE_CURRENCY = 'CHANGE_CURRENCY',
  FILTER_UNSELECTED_ITEMS = 'FILTER_UNSELECTED_ITEMS',
  CHANGE_VALUE = 'CHANGE_VALUE',
  CONVERT = 'CONVERT',
  SET_HISTORY = 'SET_HISTORY',
  GET_HISTORY = 'GET_HISTORY',
}

interface ChangeCurrencydAction {
  type: ConvertsActionTypes.CHANGE_CURRENCY;
  payload: { id: number, currency: any };
}
interface UpdateUnselectedItems {
  type: ConvertsActionTypes.FILTER_UNSELECTED_ITEMS;
  payload: ConvertItemState[];
}

interface ChangeValueAction {
  type: ConvertsActionTypes.CHANGE_VALUE;
  payload: { id: number, newValue: number };
}

interface ConvertAction {
  type: ConvertsActionTypes.CONVERT;
  payload: { id: number };
}

interface SetHistory {
  type: ConvertsActionTypes.SET_HISTORY;
  payload: { convertableId: number, calculatedId: number };
}

interface GetHistory {
  type: ConvertsActionTypes.GET_HISTORY;
}

export type ConvertsAction = ChangeCurrencydAction | UpdateUnselectedItems | ChangeValueAction | ConvertAction | SetHistory | GetHistory;