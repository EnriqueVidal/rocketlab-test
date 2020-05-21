import * as React from 'react';

export interface SearchState {
  term: string;
  selected: string;
}

interface Action {
 type: 'SELECT_OPTION' | 'SEARCH';
 payload: string;
}

export const useSearch = (initialState: SearchState) => {
  const [inputs, dispatch] = React.useReducer((state: SearchState, action: Action) => {
    switch (action.type) {
      case 'SELECT_OPTION': {
        return { term: '', selected: action.payload };
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

  return {
    inputs,
    search,
    select,
  };
};
