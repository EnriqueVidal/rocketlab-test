import * as React from 'react';

export interface SearchState {
  term: string;
  selected: string;
}

export const useSearch = (initialState: SearchState) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SELECT_OPTION': {
        return { term: '', selected: action.payload };
      }

      case 'SEARCH': {
        return { ...state, term: action.payload };
      }

      default:
        state;
    }
  };

  const [inputs, dispatch] = React.useReducer(reducer, initialState);

  const search = (payload: string) => dispatch({ type: 'SEARCH', payload });
  const select = (payload: string) => dispatch({ type: 'SELECT_OPTION', payload });

  return {
    inputs,
    search,
    select,
  };
};
