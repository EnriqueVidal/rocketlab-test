import * as React from 'react';

export interface SearchState {
  term: string;
  selected: string;
}

interface Action {
 type: 'SELECT_OPTION' | 'SEARCH' | 'RESET';
 payload: string;
}

export const useSearch = (selected: string) => {
  const initialState = { term: selected, selected };
  const [inputs, dispatch] = React.useReducer((state: SearchState, action: Action) => {
    switch (action.type) {
      case 'RESET':
      case 'SELECT_OPTION': {
        return { term: action.payload, selected: action.payload };
      }

      case 'SEARCH': {
        return { ...state, term: action.payload };
      }

      default:
        return state;
    }
  }, initialState);

  const search = (payload: string) => dispatch({ type: 'SEARCH', payload });
  const select = (payload: string) => dispatch({ type: 'SELECT_OPTION', payload });
  const clear = (payload = '') => dispatch({ type: 'RESET', payload });

  return {
    inputs,
    clear,
    search,
    select,
  };
};
