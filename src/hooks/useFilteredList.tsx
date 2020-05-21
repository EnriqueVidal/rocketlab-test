import * as React from 'react';

export const useFilteredList = (initialState: string[]) => {
  const [items, filterList] = React.useState(initialState);

  const reset = () => filterList((_) => initialState);

  const filter = (term: string) => {
    if (term.trim() === '') return reset();

    /* TODO: this should be replaced by real fuzzy search */
    const matcher = new RegExp(term, 'i');
    const newList = initialState.filter((value) => matcher.test(value));
    return filterList((_) => newList);
  };

  return {
    items,
    filter,
    reset,
  };
};
